import { createServer } from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';



var app = express();
var server = createServer(app);
server.listen(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/src', express.static(path.join(__dirname, 'public/src')));
app.use('/html', express.static(path.join(__dirname, 'public/html')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/temp_folder', express.static(path.join(__dirname, 'public/temp_folder')));
app.use('/', express.static(path.join(__dirname, '/index.html')));


app.get('/constituicao', async (req, res) => {
  try {
    const url = 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm';
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36',
        'Accept': 'text/html',
      },
    });
    if (!response.ok) {
      return res.status(502).json({ error: 'Falha ao obter Constituição' });
    }

    const buffer = await response.arrayBuffer();
    const html = iconv.decode(Buffer.from(buffer), 'ISO-8859-1');
    const $ = cheerio.load(html);

    const artigos = [];

    $('p').each((_, el) => {
      // Se dentro do <p> tiver alguma tag <strike>, ignora
      if ($(el).find('strike').length > 0) return; // pula este <p>

      const text = $(el).text().trim();
      const artigoMatch = text.match(/^Art\. ?\d+/);
      if (artigoMatch) {
        const artigo = { titulo: text, paragrafos: [], incisos: [] };
        // Pega todos os elementos irmãos seguintes, até o próximo artigo
        const siblings = [];
        let current = $(el).next();

        while (current.length && !/^Art\. ?\d+/.test(current.text().trim())) {
          siblings.push(current);
          current = current.next();
        }

        // Agora dentro dos siblings, percorre buscando <p> com style text-indent: 38px, mesmo que estejam aninhados
        siblings.forEach(sib => {
          // Busca todos os <p> com style text-indent: 38px dentro do sib (inclusive sib mesmo)
          const ps = sib.is('p') && (sib.attr('style') || '').includes('text-indent: 38px')
            ? [sib]
            : sib.find('p[style*="text-indent: 38px"]').toArray().map(el => $(el));

          ps.forEach(pElem => {
            if (pElem.find('strike').length > 0) return; // pula riscados

            const t = pElem.text().trim();
            if (/^§/.test(t)) artigo.paragrafos.push(t);
            else if (/^[IVXLC]+[-—]\s/.test(t)) artigo.incisos.push(t);
            else if (t) artigo.paragrafos.push(t);
          });
        });



        artigos.push(artigo);
      }
    });

    res.json({ artigos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});