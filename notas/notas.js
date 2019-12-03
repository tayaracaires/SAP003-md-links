function mdLinks () {
    return new Promise((resolve, reject) => {
        const soma = 2 + 4;
        const lerArquivo = 'banana[google](google.com)';
        const resultado = [{href:'www.google.com', text:'google'}];

// usar regex aqui, após abrir/ler o arquivo e separar o texto, depois criar o objeto

        if ('deuErro'){
            reject = ('DEU RUIM')
        }
        resolve(resultado)
    });
}

module.exports= mdLinks;

// TESTE DE FUNÇÃO ASSINCRONAS!!! VER VÍDEO DO DANIEL
// A rota está na url do git
// inserir exemplo de uso no terminal e importando pelo JS
// npm install tayaracaires/sap-0003...
