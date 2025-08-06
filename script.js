const preguntas = [
  {
    texto: "¿Qué es Starlink?",
    opciones: [
      "Una empresa de cohetes",
      "Un sistema de internet satelital",
      "Una red social",
      "Un satélite de televisión"
    ],
    correcta: 1
  },
  {
    texto: "¿Quién creó Starlink?",
    opciones: [
      "Jeff Bezos",
      "NASA",
      "Elon Musk (SpaceX)",
      "Bill Gates"
    ],
    correcta: 2
  },
  {
    texto: "¿Qué tipo de órbita usan los satélites de Starlink?",
    opciones: [
      "Órbita geostacionaria",
      "Órbita baja (LEO)",
      "Órbita media (MEO)",
      "Órbita polar"
    ],
    correcta: 1
  },
  {
    texto: "¿Cuál es una ventaja de Starlink?",
    opciones: [
      "Requiere cableado",
      "Solo funciona en ciudades",
      "Permite conexión en zonas rurales",
      "Solo se usa en Estados Unidos"
    ],
    correcta: 2
  }
];

let preguntaActual = 0;

function mostrarPregunta() {
  const p = preguntas[preguntaActual];
  document.getElementById("pregunta").innerText = p.texto;

  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  p.opciones.forEach((opcion, index) => {
    const div = document.createElement("div");
    div.className = "opcion";
    div.innerText = opcion;
    div.onclick = () => verificarRespuesta(index);
    opcionesDiv.appendChild(div);
  });

  document.getElementById("resultado").innerText = "";
}

function verificarRespuesta(indiceSeleccionado) {
  const p = preguntas[preguntaActual];
  const resultado = document.getElementById("resultado");

  if (indiceSeleccionado === p.correcta) {
    resultado.innerText = "✅ ¡Correcto!";
  } else {
    resultado.innerText = `❌ Incorrecto. La respuesta era: "${p.opciones[p.correcta]}"`;
  }
}

function siguientePregunta() {
  if (preguntaActual < preguntas.length - 1) {
    preguntaActual++;
    mostrarPregunta();
  } else {
    document.getElementById("pregunta").innerText = "🎉 ¡Trivia finalizada!";
    document.getElementById("opciones").innerHTML = "";
    document.getElementById("resultado").innerText = "";
  }
}

mostrarPregunta();
