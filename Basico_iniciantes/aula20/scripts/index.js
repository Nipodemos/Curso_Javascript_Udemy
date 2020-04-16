function meuEscopo() {
    const nomes = [];
    const form = document.querySelector("#formulario");
    form.onsubmit = function (e) {
        e.preventDefault();
    };
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', function (e) {
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        nomes.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        });
        
        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';

        let tbody = document.querySelector('#tbody');
        tbody.innerHTML = '';
        for (let part of nomes) {

            tbody.innerHTML += `
            <tr>
                <td>${part.nome}</td>
                <td>${part.sobrenome}</td>
                <td>${part.peso}</td>
                <td>${part.altura}</td>
            </tr>`;
        }


        console.log(nomes);
    })
}

meuEscopo();
