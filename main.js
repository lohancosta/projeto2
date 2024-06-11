const form = document.getElementById("formAtividade");
const imgAprovado =
  '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado =
  '<img src="./images/reprovado.png" alt="Emoji decepcionado" /> ';

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeAtividade = document.getElementById("nomeAtividade");
  const inputNotaAtividade = document.getElementById("notaAtividade");

  let linha = "<tr>";
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${
    inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNomeAtividade = "";
  inputNotaAtividade = "";
});
