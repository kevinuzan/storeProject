const termosJuridicosPorLetra = {
    A: ["Acórdão", "Advogado", "Ação", "Audiência", "Apelação", "Arbitragem", "Alienação", "Administrativa", "Ação popular", "Ação civil pública", "Alimentação", "Ampla proteção ao salário na falência da empresa", "Assiduidade", "Aptidão", "Avisos", "Aposentadoria", "Autoexecutoriedade", "Atos normativos", "Aquisição de materiais/produtos de marca específica", "Artista consagrado pela crítica ou pela opinião pública", "Apostilas"],
    B: ["Beneficiário", "Bens", "Bancarrota", "Busca e Apreensão", "Bonificação", "Branqueamento de Capital"],
    C: ["Contrato", "Constituição", "Competência", "Citação", "Caução", "Custas", "Coisa Julgada", "Competência", "Capacitação", "Condição mais benéfica", "Cidadania", "Consultor técnico ou instituição com notória especialização", "Circulares", "Certidões", "Contraditório", "Construir uma sociedade livre, justa e solidária", "Competência exclusiva"],
    D: ["Dano", "Defensor", "Denúncia", "Depósito", "Decreto", "Diligência", "Despacho", "Direitos individuais", "Despacho", "Demissão", "Desamparados", "Disciplina", "Dignidade da pessoa humana"],
    E: ["Embargo", "Escritura", "Estelionato", "Exceção", "Execução", "Extradição", "Embargo de Declaração", "Eficiência", "Exoneração", "Educação", "Estabilidade do salário", "Eficiência", "Erradicar a pobreza e a marginalização"],
    F: ["Fiança", "Foro", "Fraude", "Formalismo", "Fato Jurídico", "Favorecido", "Fiscalização", "Finalidade", "Forma", "Financeira", "Forma federativa de estado", "Finalidade", "Fornecedor exclusivo", "Falecimento"],
    G: ["Garantia", "Gratuidade de Justiça", "Guia", "Gestão", "Gravame", "Graduação", "Genealogia Jurídica", "Garantir o desenvolvimento nacional"],
    H: ["Habeas Corpus", "Honorários", "Hipoteca", "Homologação", "Hierarquia", "Herdabilidade", "Habilitação", "Habeas corpus", "Habeas data", "Higidez salarial"],
    I: ["Indenização", "Injunção", "Intimação", "Interesse", "Interdito", "Improbidade", "Imóvel", "In dubio pro operario", "Irrenunciabilidade dos direitos do trabalhador", "Imagem", "Infância", "Idoneidade moral", "Imperatividade", "Impessoalidade", "Instruções"],
    J: ["Jurisdição", "Juiz", "Julgamento", "Justiça", "Jurisprudência", "Juizado", "Jurada"],
    K: ["Kleptocracia", "Know-how", "Kangaroo Court (tribunal injusto)", "Kafkiano (relacionado a processos absurdos)"],
    L: ["Legislação", "Licitação", "Liminar", "Litispendência", "Lavagem de Dinheiro", "Leilão", "Liberdade Provisória", "Lugar", "Lazer", "Livre estipulação", "Legalidade", "Livre iniciativa"],
    M: ["Mandado", "Ministério Público", "Medida Cautelar", "Mora", "Moratória", "Mutirão", "Mesário", "Motivação", "Mandato Classista", "Mandado de segurança", "Mandado de injunção", "Marca", "Maternidade", "Moradia", "Monetização do salário", "Moralidade"],
    N: ["Notificação", "Nulidade", "Norma", "Necessidade", "Negócio Jurídico", "Nomeação", "Nexo Causal", "Norma mais favorável", "Nome"],
    O: ["Objeto", "Onerosidade", "Ordem Pública", "Obrigação", "Ofensa", "Outorga", "Observância", "Objeto", "Orçamentária", "Ofícios", "Objetividade", "Oralidade", "Ordens de Serviço"],
    P: ["Parecer", "Perícia", "Penhora", "Prescrição", "Prova", "Processo", "Pena", "Patrimonial", "Portarias", "Posse em cargo inacumulável", "Previdência", "Produtividade", "Publicidade", "Proporcionalidade", "Promoção", "Promover o bem de todos", "Presunção de legitimidade", "Periodicidade do pagamento", "Pareceres"],
    Q: ["Quota", "Questionamento", "Quórum", "Qualificação", "Quebra de Sigilo", "Quarentena"],
    R: ["Recurso", "Réu", "Réplicas", "Rescisão", "Remessa", "Representação", "Regulamento", "Recursos administrativos", "Readaptação", "Responsabilidade", "Razoabilidade"],
    S: ["Sentença", "Suspensão", "Súmula", "Sucessão", "Sigilo", "Sanção", "Subsídio", "Separação dos poderes", "Segredo", "Saúde", "Segurança", "Segurança jurídica", "Soberania nacional", "Salário é impenhorável", "Serviços técnicos de natureza singular"],
    T: ["Tutela", "Testamento", "Tribunal", "Transação", "Trânsito em Julgado", "Termo", "Tutela Antecipada", "Tratar de assuntos particulares", "Tempo", "Trabalho", "Transporte", "Transparência no pagamento", "Tipicidade"],
    U: ["Usucapião", "Urbanização", "Ultratividade", "Utilização", "Unificação", "Unilateralidade", "Urbanismo", "Ubiquidade"],
    V: ["Vara", "Vício", "Validade", "Veredicto", "Vínculo", "Vedação", "Violação", "Voto direto secreto", "Vedação ao salário inferior ao mínimo", "Valorização do trabalho humano"],
    W: ["Writ (ordem judicial)", "Wrongful Act", "Waiver (renúncia)", "Witness (testemunha)"],
    X: ["Xerox (cópia autenticada)", "Xenofobia (no direito penal)", "Exceção de Pré-Executividade", "Taxa de Execução"],
    Y: ["Yield (rendimento, rendimento jurídico)", "Yankee bond (título americano)", "Yearly tenancy (locação anual)", "Youth law (direito da juventude)"],
    Z: ["Zona de Interesse Jurídico", "Zelo", "Zona Franca", "Zeladoria", "Zelo Profissional", "Zona de Conflito"]
};

// Função para pegar as primeiras letras únicas da lista base
function getLetrasIniciais(palavras) {
    const letras = new Set();
    for (const palavra of palavras) {
        letras.add(palavra[0].toUpperCase());
    }
    return Array.from(letras);
}
// Função para escolher N palavras aleatórias de um array
function escolherAleatorias(array, n) {
    const copia = [...array];
    const escolhidas = [];
    for (let i = 0; i < n && copia.length > 0; i++) {
        const index = Math.floor(Math.random() * copia.length);
        escolhidas.push(copia.splice(index, 1)[0]);
    }
    return escolhidas;
}

// Função principal
function criarListaCompleta(base, extras, numAleatorias = 2) {
    const letras = getLetrasIniciais(base);
    const resultado = [...base];

    for (const letra of letras) {
        if (extras[letra]) {
            const listaExtras = extras[letra];
            const aleatorias = escolherAleatorias(listaExtras, numAleatorias);

            for (const palavra of aleatorias) {
                if (!resultado.includes(palavra)) {
                    resultado.push(palavra);
                }
            }
        }
    }

    return resultado;
}

var dataJsonItem = []
async function addCardToPage(data) {
    dataJsonItem = data
    var dataToChange = data[0].items
    for (item in data[0].items) {
        console.log(dataToChange[item])
        var template = document.getElementById("cardToAdd");

        // Clona o conteúdo do template
        var clone = document.importNode(template.content, true);

        // Seleciona a div onde você deseja adicionar o template
        var divDestino = document.getElementById("addCardToPage");

        // Adiciona o clone do template à div
        divDestino.appendChild(clone);
        document.getElementById("titleCard").innerText = dataToChange[item].minemonico
        document.getElementById("descriptionCard").innerText = dataToChange[item].palavras[0]
        document.getElementById("priceCard").innerText = dataToChange[item].palavras_corretas[1]
        document.getElementById("titleCard").id = `title${dataToChange[item].id}`
        document.getElementById("descriptionCard").id = `description${dataToChange[item].id}`
        document.getElementById("priceCard").id = `price${dataToChange[item].id}`
    }
}


async function getItemData() {
    fetch('/json/productList.json')
        .then(response => response.json())
        .then(data => {
            // addCardToPage(data)
            console.log(data)
            const app = document.getElementById('app');
            data[0].items.forEach(item => {
                const container = document.createElement('div');
                container.className = 'container';

                const header = document.createElement('div');
                header.className = 'header';
                header.textContent = item.minemonico;

                const cards = document.createElement('div');
                cards.className = 'cards';
                var listaPalavras = shuffle([...item.palavras_corretas])

                var listaPalavrasFinal = criarListaCompleta(listaPalavras, termosJuridicosPorLetra)

                listaPalavrasFinal = shuffle([...listaPalavrasFinal])
                listaPalavrasFinal.forEach(palavra => {
                    const card = document.createElement('div');
                    card.className = 'card';

                    // if (palavra.includes(' ')) {
                    //     const partes = palavra.split(' ');
                    //     card.innerHTML = partes.join('<br>');  // Insere <br> ENTRE as palavras
                    // } else {
                    //     card.textContent = palavra;  // Mantém palavra única na mesma linha
                    // }
                    card.textContent = palavra;
                    card.addEventListener('click', () => {
                        card.classList.toggle('active');
                    });

                    cards.appendChild(card);
                });

                const botaoFinal = document.createElement('button');
                botaoFinal.className = 'btn btn-success mt-3';  // Exemplo: botão verde com margem superior
                botaoFinal.textContent = 'Enviar';

                botaoFinal.addEventListener('click', () => {
                    // Dentro do mesmo container, procura os cards com a classe 'active'
                    const selectedCards = container.querySelectorAll('.card.active');

                    // Extrai os textos das seleções
                    const selecionados = Array.from(selectedCards).map(card => card.innerText);
                    var listaSelecionados = []
                    if (selecionados.length > 0) {

                        selectedCards.forEach(card => {
                            const texto = card.innerText.trim();

                            if (listaPalavras.includes(texto)) {
                                // Palavra correta → verde
                                card.style.backgroundColor = '#d4edda';
                                card.style.borderColor = '#28a745';
                                card.style.color = '#155724';
                                card.style.fontWeight = 'bold';
                                listaSelecionados.push(texto)
                            } else {
                                // Palavra incorreta → vermelho
                                card.style.backgroundColor = '#f8d7da';
                                card.style.borderColor = '#dc3545';
                                card.style.color = '#721c24';
                                card.style.fontWeight = 'bold';
                            }
                        });
                        if (listaPalavras.length > listaSelecionados.length) {
                            alert('Ainda há palavras a serem selecionadas!')
                        }
                    } else {
                        alert('Nenhum card selecionado!');
                    }
                });

                const botaoReset = document.createElement('button');
                botaoReset.className = 'btn btn-secondary mt-3 ml-2';
                botaoReset.textContent = 'Reiniciar';

                botaoReset.addEventListener('click', () => {
                    const allCards = container.querySelectorAll('.card');

                    allCards.forEach(card => {
                        card.classList.remove('active');
                        card.style.backgroundColor = '';
                        card.style.borderColor = '';
                        card.style.color = '';
                        card.style.fontWeight = '';
                    });
                });

                container.appendChild(header);
                container.appendChild(cards);

                const botoesContainer = document.createElement('div');
                botoesContainer.style.display = 'flex';
                botoesContainer.style.gap = '10px';
                botoesContainer.style.marginTop = '10px';

                botoesContainer.appendChild(botaoReset);
                botoesContainer.appendChild(botaoFinal);

                container.appendChild(botoesContainer);
                app.appendChild(container);
            });
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolhe um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de posição
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}