var nome = "Letícia Costa";
let idade = 20;
const trabalhos = ["caelum", "pagseguro"];

// comprimento do texto
nome.length;

// verificar trecho semelhantes de texto
nome.includes("Costa");

// operações matemáticas
// não altera a variável
idade * 2 + 24 - 30;

// altera a variável
idade = idade * 2 + 24 - 30;

// acessando elementos da Dom
// acessando pelo ID
document.getElementById("header");

// acessando por seletores CSS, me traz o
//  primeiro elemento encontrado
document.querySelector(".navbar");

// traz todos os elementos correspondentes
document.querySelectorAll("li");

// guardando elementos em variáveis
const item = document.querySelector("li");

// posso acessar e alterar propriedades do elemento
item.innerText;
item.innerText = "Um texto muito bacana";

// configurando eventos
// configuração direta, permite apenas
// uma função por evento
button.onclick = () => {
  confirm("Você me odeia?");
};

// adiciona um ouvinte de evento
// permite inumeras funções relacionadas
// ao evento
button.addEventListener("click", () => {
  console.log("não clica em mim, sai!");
});

// adicionando eventos no HTML
// no .js
function cliqueBotao() {
  alert("Botão clicado");
}
// no .html
// <button onclick="cliqueBotao()">Enviar</button>
