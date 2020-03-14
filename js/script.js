var quantidadeCursos = 0;
var totalHoras = 0;

function selecionaCurso(checkbox) {
  console.log(checkbox.checked, checkbox.value);

  if (checkbox.checked) {
    totalHoras = totalHoras + parseInt(checkbox.value);
    quantidadeCursos++;
  } else {
    totalHoras = totalHoras - parseInt(checkbox.value);
    quantidadeCursos--;
  }

  console.log(quantidadeCursos, totalHoras);
  // alterar os textos de quantidade de cursos
  // e total de carga horária
}
