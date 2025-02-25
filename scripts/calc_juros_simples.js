/* Total = Valor * Taxa de Juros * Anos */

document.getElementById('formCalculadora').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos inputs
    const valor = parseFloat(document.getElementById('inputValor').value);
    let juros = parseFloat(document.getElementById('inputJuros').value)/100;
    const anos = parseFloat(document.getElementById('inputAnos').value);

    // Realiza o cálculo (soma)
    const total = valor + (valor * juros * anos) 

    //Criando os elementos HTML
    const botao = document.getElementById('btn-enviar')
    const resultado = document.getElementById('resultado')

        //CRIANDO O HTML
        
    //     const titulo = ["Seu Valor", "Juros", "Período", "Total"]
    //     const ids = ["txtValor", "txtJuros", "txtAnos", "txtTotal"]
        
    //     for(let i = 0; i < titulos.length; i++){
    //         const col = document.createElement('div')
    //         col.classList.add('col-12', 'col-md-3')

    //         const card = document.createElement('div')
    //         card.classList.add('card', 'py-2', 'mb-3', 'text-center')

    //         // Cria o corpo do card (card-body)
    //         const cardBody = document.createElement('div');
    //         cardBody.classList.add('card-body');

    //         // Adiciona um título ao card
    //         const cardTitle = document.createElement('h5');
    //         cardTitle.classList.add('card-title', 'fs-5', 'text-muted');
    //         cardTitle.textContent = titulo[i];

    //         // Adiciona um texto ao card
    //         const cardText = document.createElement('h3');
    //         cardText.classList.add('card-body', 'fs-1');
    //         cardText.setAttribute('id', ids[i])

    //         // Adiciona o título e o texto ao corpo do card
    //         cardBody.appendChild(cardTitle);
    //         cardBody.appendChild(cardText);

    //         // Adiciona o corpo ao card
    //         card.appendChild(cardBody);

    //         // Adiciona o card à coluna
    //         col.appendChild(card);

    //         // Adiciona a coluna à linha (row)
    //         resultado.appendChild(col);
    // }
    

    // Card Valor Inicial
    document.getElementById('txtValor').textContent = `R$${valor.toFixed(2)}`;
    document.getElementById('txtJuros').textContent = `${juros*100}%`;
    document.getElementById('txtAnos').textContent = `${anos}`;
    document.getElementById('txtTotal').textContent = `R$${total.toFixed(2)}`;
});

document.getElementById('formCalculadora').addEventListener('reset', function(event) {
    document.getElementById('txtValor').textContent = "";
    document.getElementById('txtJuros').textContent = "";
    document.getElementById('txtAnos').textContent = "";
    document.getElementById('txtTotal').textContent = "";
})