import { createServer } from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';
import fs from 'fs';
import { promisify } from 'util';

const app = express();
const server = createServer(app);
server.listen(process.env.PORT || 3000);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

const jsonPath = path.join(__dirname, 'public/json/constituicao.json');

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/src', express.static(path.join(__dirname, 'public/src')));
app.use('/html', express.static(path.join(__dirname, 'public/html')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/temp_folder', express.static(path.join(__dirname, 'public/temp_folder')));
app.use('/', express.static(path.join(__dirname, '/index.html')));

async function baixarConstituicao() {
  const url = 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm';
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'text/html',
    },
  });
  if (!response.ok) throw new Error('Falha ao obter Constituição');

  const buffer = await response.arrayBuffer();
  const html = iconv.decode(Buffer.from(buffer), 'ISO-8859-1');
  const $ = cheerio.load(html);

  const artigos = [];

  $('p').each((_, el) => {
    if ($(el).find('strike').length > 0) return;

    const text = $(el).text().trim();
    const artigoMatch = text.match(/^Art\. ?\d+/);
    if (artigoMatch) {
      const artigo = { titulo: text, paragrafos: [], incisos: [] };
      const siblings = [];
      let current = $(el).next();

      while (current.length && !/^Art\. ?\d+/.test(current.text().trim())) {
        siblings.push(current);
        current = current.next();
      }

      siblings.forEach(sib => {
        const ps = sib.is('p') && (sib.attr('style') || '').includes('text-indent: 38px')
          ? [sib]
          : sib.find('p[style*="text-indent: 38px"]').toArray().map(el => $(el));

        ps.forEach(pElem => {
          if (pElem.find('strike').length > 0) return;

          const t = pElem.text().trim();
          if (/^§/.test(t)) artigo.paragrafos.push(t);
          else if (/^[IVXLC]+[-—]\s/.test(t)) artigo.incisos.push(t);
          else if (t) artigo.paragrafos.push(t);
        });
      });

      artigos.push(artigo);
    }
  });

  return artigos;
}

app.get('/constituicao', async (req, res) => {
  try {
    const exists = fs.existsSync(jsonPath);
    let precisaAtualizar = true;

    if (exists) {
      const stats = await stat(jsonPath);
      const agora = new Date();
      const modificadoHoje = new Date(stats.mtime).toDateString() === agora.toDateString();
      if (modificadoHoje) precisaAtualizar = false;
    }

    if (precisaAtualizar) {
      const artigos = await baixarConstituicao();
      await writeFile(jsonPath, JSON.stringify({ artigos }, null, 2), 'utf8');
      return res.json({ artigos });
    }

    const json = await readFile(jsonPath, 'utf8');
    const dados = JSON.parse(json);
    return res.json(dados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno ao carregar a Constituição' });
  }
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
