// Lista completa de cursos organizados por semestre y dependencias
const malla = [
  {
    semestre: "1° SEMESTRE",
    cursos: [
      { nombre: "Prácticas Médicas I" },
      { nombre: "Estructura Y Función Del Cuerpo Humano" },
      { nombre: "Procesos Celulares Y Moleculares I" },
      { nombre: "Desarrollo Humano Y Social" },
      { nombre: "Inglés I" },
    ]
  },
  {
    semestre: "2° SEMESTRE",
    cursos: [
      { nombre: "Prácticas Médicas II", prereqs: ["Prácticas Médicas I"] },
      { nombre: "So I - Circulación, Respiración, Eliminación Y Equilibrio Ácido-Básico", prereqs: ["Estructura Y Función Del Cuerpo Humano"] },
      { nombre: "Procesos Celulares Y Moleculares II", prereqs: ["Procesos Celulares Y Moleculares I"] },
      { nombre: "Estilo De Vida, Salud Y Medio Ambiente" },
      { nombre: "Inglés II", prereqs: ["Inglés I"] },
    ]
  },
  // (Puedes seguir añadiendo aquí los semestres siguientes…)
];

const container = document.getElementById("semesters-container");

// Estado global
let completados = JSON.parse(localStorage.getItem("cursosCompletados") || "[]");

function guardarEstado() {
  localStorage.setItem("cursosCompletados", JSON.stringify(completados));
}

function estaDisponible(curso) {
  if (!curso.prereqs) return true;
  return curso.prereqs.every(pr => completados.includes(pr));
}

function render() {
  container.innerHTML = "";

  malla.forEach(semestre => {
    const bloque = document.createElement("div");
    bloque.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre.semestre;
    bloque.appendChild(titulo);

    semestre.cursos.forEach(curso => {
      const div = document.createElement("div");
      div.className = "course";

      if (!estaDisponible(curso)) {
        div.classList.add("locked");
      }

      if (completados.includes(curso.nombre)) {
        div.classList.add("completed");
      }

      div.textContent = curso.nombre;
      div.addEventListener("click", () => {
        if (!estaDisponible(curso)) return;

        if (completados.includes(curso.nombre)) {
          completados = completados.filter(c => c !== curso.nombre);
        } else {
          completados.push(curso.nombre);
        }
        guardarEstado();
        render();
      });

      bloque.appendChild(div);
    });

    container.appendChild(bloque);
  });
}

render();
