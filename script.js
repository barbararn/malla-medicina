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
  {
    semestre: "3° SEMESTRE",
    cursos: [
      { nombre: "Prácticas Médicas III", prereqs: ["Prácticas Médicas II", "So I - Circulación, Respiración, Eliminación Y Equilibrio Ácido-Básico"] },
      { nombre: "So II - Digestión, Absorción, Reproducción Y Control Endocrino", prereqs: ["So I - Circulación, Respiración, Eliminación Y Equilibrio Ácido-Básico"] },
      { nombre: "Mecanismos De Agresión Y Defensa I", prereqs: ["Procesos Celulares Y Moleculares II", "So I - Circulación, Respiración, Eliminación Y Equilibrio Ácido-Básico"] },
      { nombre: "Bases De La Terapéutica Farmacológica", prereqs: ["Procesos Celulares Y Moleculares II", "So I - Circulación, Respiración, Eliminación Y Equilibrio Ácido-Básico"] },
    ]
  },
  {
    semestre: "4° SEMESTRE",
    cursos: [
      { nombre: "Prácticas Médicas IV", prereqs: ["Prácticas Médicas I"] },
      { nombre: "So III- Soporte, Movimiento Y Control Neural", prereqs: ["So II - Digestión, Absorción, Reproducción Y Control Endocrino"] },
      { nombre: "Mecanismos De Agresión Y Defensa II", prereqs: ["Mecanismos De Agresión Y Defensa I"] },
      { nombre: "Salud Pública Y Sistemas De Salud", prereqs: ["Estilo De Vida, Salud Y Medio Ambiente"] },
    ]
  },
  {
    semestre: "5° SEMESTRE",
    cursos: [
      { nombre: "Prevención Y Promoción De La Salud", prereqs: ["Salud Pública Y Sistemas De Salud"] },
      { nombre: "Mecanismos De Agresión Y Defensa III", prereqs: ["Mecanismos De Agresión Y Defensa II", "So III- Soporte, Movimiento Y Control Neural"] },
      { nombre: "Neurociencias Y Comportamiento", prereqs: ["So III- Soporte, Movimiento Y Control Neural"] },
      { nombre: "Salud Del Niño Y Del Adolescente", prereqs: ["So III- Soporte, Movimiento Y Control Neural", "Prácticas Médicas IV"] },
    ]
  },
  {
    semestre: "6° SEMESTRE",
    cursos: [
      { nombre: "Ciencia Y Descubrimiento" },
      { nombre: "Salud Comunitaria", prereqs: ["Prevención Y Promoción De La Salud"] },
      { nombre: "Salud Del Adulto", prereqs: ["Salud Del Niño Y Del Adolescente"] },
      { nombre: "Salud De La Mujer Y Neonato", prereqs: ["Salud Del Niño Y Del Adolescente"] },
    ]
  },
  {
    semestre: "7° SEMESTRE",
    cursos: [
      { nombre: "Tecnologías Biomédicas" },
      { nombre: "Salud Del Adulto Mayor", prereqs: ["Salud Del Adulto"] },
      { nombre: "Salud Mental", prereqs: ["Salud Comunitaria", "Salud Del Adulto"] },
      { nombre: "Atención Integral De La Salud", prereqs: ["Salud Comunitaria", "Salud Del Adulto"] },
    ]
  },
  {
    semestre: "8° SEMESTRE",
    cursos: [
      { nombre: "Cuidados Paliativos Y Del Fin De La Vida", prereqs: ["Salud Del Adulto Mayor"] },
      { nombre: "Medicina Interna I", prereqs: ["Atención Integral De La Salud"] },
      { nombre: "Pediatría I", prereqs: ["Atención Integral De La Salud"] },
      { nombre: "Ginecología Y Obstetricia I", prereqs: ["Atención Integral De La Salud"] },
    ]
  },
  {
    semestre: "9° SEMESTRE",
    cursos: [
      { nombre: "Medicina Interna II", prereqs: ["Medicina Interna I"] },
      { nombre: "Pediatría II", prereqs: ["Medicina Interna I", "Pediatría I"] },
      { nombre: "Ginecología Y Obstetricia II", prereqs: ["Medicina Interna I", "Ginecología Y Obstetricia I"] },
      { nombre: "Electivo I" },
    ]
  },
  {
    semestre: "10° SEMESTRE",
    cursos: [
      { nombre: "Medicina De Emergencias Y Cuidados Críticos", prereqs: ["Medicina Interna II"] },
      { nombre: "Cirugía General", prereqs: ["Medicina Interna II"] },
      { nombre: "Neurología Y Psiquiatría", prereqs: ["Medicina Interna II"] },
      { nombre: "Electivo II" },
    ]
  },
  {
    semestre: "11° SEMESTRE",
    cursos: [
      { nombre: "Cirugía De Especialidades", prereqs: ["Medicina De Emergencias Y Cuidados Críticos", "Cirugía General"] },
      { nombre: "Tendencias Globales En Salud" },
      { nombre: "Proyectos De Intervención En Salud" },
      { nombre: "Electivo De Especialidad" },
    ]
  },
  {
    semestre: "12° SEMESTRE",
    cursos: [
      { nombre: "Externado - Medicina Interna", prereqs: ["Neurología Y Psiquiatría", "Medicina De Emergencias Y Cuidados Críticos", "Cirugía General"] },
      { nombre: "Externado - Pediatría", prereqs: ["Pediatría II", "Medicina De Emergencias Y Cuidados Críticos", "Cirugía General"] },
      { nombre: "Externado - Cirugía", prereqs: ["Medicina De Emergencias Y Cuidados Críticos", "Cirugía General", "Cirugía De Especialidades"] },
      { nombre: "Externado - Gineco-Obstetricia", prereqs: ["Ginecología Y Obstetricia II"] },
    ]
  },
  {
    semestre: "13° SEMESTRE",
    cursos: [
      { nombre: "Internado - Medicina Interna", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
      { nombre: "Internado - Pediatría", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
      { nombre: "Seminarios De Integración Clínica I", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
      { nombre: "Seminario De Investigación", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
    ]
  },
  {
    semestre: "14° SEMESTRE",
    cursos: [
      { nombre: "Internado - Cirugía", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
      { nombre: "Internado - Gineco-Obstetricia", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
      { nombre: "Seminarios De Integración Clínica II", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia", "Seminarios De Integración Clínica I"] },
      { nombre: "Trabajo De Investigación", prereqs: ["Externado - Medicina Interna", "Externado - Pediatría", "Externado - Cirugía", "Externado - Gineco-Obstetricia"] },
    ]
  },
];

const container = document.getElementById("semesters-container");
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

      if (!estaDisponible(curso)) div.classList.add("locked");
      if (completados.includes(curso.nombre)) div.classList.add("completed");

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
