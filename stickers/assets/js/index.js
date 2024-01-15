function seleccionarSticker(inputId) {
  let input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
  actualizarResultado();
}

function actualizarResultado() {
  let totalStickers = 0;

  for (let i = 1; i <= 3; i++) {
    let input = document.getElementById("cantidad_" + i);
    totalStickers += parseInt(input.value);
  }

  document.getElementById("resultado").textContent =
    "Cantidad de stickers seleccionados: " + totalStickers;
}

function verificarStickers() {
  let totalStickers = 0;

  for (let i = 1; i <= 3; i++) {
    let input = document.getElementById("cantidad_" + i);
    totalStickers += parseInt(input.value);
  }

  if (totalStickers <= 10) {
    document.getElementById("resultado").textContent =
      "Llevas " + totalStickers + " stickers";
  } else {
    document.getElementById("resultado").textContent =
      "Llevas demasiados stickers";
  }
}
