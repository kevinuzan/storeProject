
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
        document.getElementById("titleCard").innerText = dataToChange[item].name
        document.getElementById("descriptionCard").innerText = dataToChange[item].description
        document.getElementById("priceCard").innerText = dataToChange[item].price
        document.getElementById("titleCard").id = `title${dataToChange[item].id}`
        document.getElementById("descriptionCard").id = `description${dataToChange[item].id}`
        document.getElementById("priceCard").id = `price${dataToChange[item].id}`
    }
}

async function goToWhatsApp() {
    alert("Isso vai abrir o whatsapp");
}


async function getItemData() {
    fetch('/json/productList.json')
        .then(response => response.json())
        .then(data => {
            addCardToPage(data)
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
}