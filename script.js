const cursos = [
  // 1° SEMESTRE
  { id: 'pm1', nombre: 'Prácticas Médicas I', dependeDe: [] },
  { id: 'efch', nombre: 'Estructura Y Función Del Cuerpo Humano', dependeDe: [] },
  { id: 'pcm1', nombre: 'Procesos Celulares Y Moleculares I', dependeDe: [] },
  { id: 'dhs', nombre: 'Desarrollo Humano Y Social', dependeDe: [] },
  { id: 'ing1', nombre: 'Inglés I', dependeDe: [] },

  // 2° SEMESTRE
  { id: 'pm2', nombre: 'Prácticas Médicas II', dependeDe: ['pm1'] },
  { id: 'so1', nombre: 'SO I - Circulación, Respiración...', dependeDe: ['efch'] },
  { id: 'pcm2', nombre: 'Procesos Celulares Y Moleculares II', dependeDe: ['pcm1'] },
  { id: 'evsma', nombre: 'Estilo De Vida, Salud Y Medio Ambiente', dependeDe: [] },
  { id: 'ing2', nombre: 'Inglés II', dependeDe: ['ing1'] },

  // 3° SEMESTRE
  { id: 'pm3', nombre: 'Prácticas Médicas III', dependeDe: ['pm2', 'so1'] },
  { id: 'so2', nombre: 'SO II - Digestión, Reproducción...', dependeDe: ['so1'] },
  { id: 'mad1', nombre: 'Mecanismos De Agresión Y Defensa I', dependeDe: ['pcm2', 'so1'] },
  { id: 'btf', nombre: 'Bases De La Terapéutica Farmacológica', dependeDe: ['pcm2', 'so1'] },

  // 4° SEMESTRE
  { id: 'pm4', nombre: 'Prácticas Médicas IV', dependeDe: ['pm1'] },
  { id: 'so3', nombre: 'SO III - Movimiento y Control Neural', dependeDe: ['so2'] },
  { id: 'mad2', nombre: 'Mecanismos De Agresión Y Defensa II', dependeDe: ['mad1'] },
  { id: 'spss', nombre: 'Salud Pública Y Sistemas De Salud', dependeDe: ['evsma'] },

  // 5° SEMESTRE
  { id: 'pps', nombre: 'Prevención Y Promoción De La Salud', dependeDe: ['spss'] },
  { id: 'mad3', nombre: 'Mecanismos De Agresión Y Defensa III', dependeDe: ['mad2', 'so3'] },
  { id: 'nc', nombre: 'Neurociencias Y Comportamiento', dependeDe: ['so3'] },
  { id: 'sna', nombre: 'Salud Del Niño Y Adolescente', dependeDe: ['so3', 'pm4'] },

  // 6° SEMESTRE
  { id: 'cd', nombre: 'Ciencia Y Descubrimiento', dependeDe: [] },
  { id: 'sc', nombre: 'Salud Comunitaria', dependeDe: ['pps'] },
  { id: 'sad', nombre: 'Salud Del Adulto', dependeDe: ['sna'] },
  { id: 'smn', nombre: 'Salud De La Mujer Y Neonato', dependeDe: ['sna'] },

  // 7° SEMESTRE
  { id: 'tb', nombre: 'Tecnologías Biomédicas', dependeDe: [] },
  { id: 'sam', nombre: 'Salud Del Adulto Mayor', dependeDe: ['sad'] },
  { id: 'sm', nombre: 'Salud Mental', dependeDe: ['sc', 'sad'] },
  { id: 'ais', nombre: 'Atención Integral De La Salud', dependeDe: ['sc', 'sad'] },

  // 8° SEMESTRE
  { id: 'cpv', nombre: 'Cuidados Paliativos y Fin de Vida', dependeDe: ['sam'] },
  { id: 'mi1', nombre: 'Medicina Interna I', dependeDe: ['ais'] },
  { id: 'ped1', nombre: 'Pediatría I', dependeDe: ['ais'] },
  { id: 'gob1', nombre: 'Gineco-Obstetricia I', dependeDe: ['ais'] },

  // 9° SEMESTRE
  { id: 'mi2', nombre: 'Medicina Interna II', dependeDe: ['mi1'] },
  { id: 'ped2', nombre: 'Pediatría II', dependeDe: ['mi1', 'ped1'] },
  { id: 'gob2', nombre: 'Gineco-Obstetricia II', dependeDe: ['mi1', 'gob1'] },
  { id: 'elec1', nombre: 'Electivo I', dependeDe: [] },

  // 10° SEMESTRE
  { id: 'emerg', nombre: 'Medicina de Emergencias', dependeDe: ['mi2'] },
  { id: 'cirug', nombre: 'Cirugía General', dependeDe: ['mi2'] },
  { id: 'neuropsiq', nombre: 'Neurología y Psiquiatría', dependeDe: ['mi2'] },
  { id: 'elec2', nombre: 'Electivo II', dependeDe: [] },

  // 11° SEMESTRE
  { id: 'ciruesp', nombre: 'Cirugía de Especialidades', dependeDe: ['emerg', 'cirug'] },
  { id: 'tgs', nombre: 'Tendencias Globales en Salud', dependeDe: [] },
  { id: 'pis', nombre: 'Proyectos de Intervención en Salud', dependeDe: [] },
  { id: 'elecesp', nombre: 'Electivo de Especialidad', dependeDe: [] },

  // 12° SEMESTRE
  { id: 'extmi', nombre: 'Externado - Medicina Interna', dependeDe: ['neuropsiq', 'emerg', 'cirug'] },
  { id: 'extped', nombre: 'Externado - Pediatría', dependeDe: ['ped2', 'emerg', 'cirug'] },
  { id: 'extcir', nombre: 'Externado - Cirugía', dependeDe: ['emerg', 'cirug', 'ciruesp'] },
  { id: 'extgob', nombre: 'Externado - Gineco-Obstetricia', dependeDe: ['gob2'] },

  // 13° SEMESTRE
  { id: 'intmi', nombre: 'Internado - Medicina Interna', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },
  { id: 'intped', nombre: 'Internado - Pediatría', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },
  { id: 'sic1', nombre: 'Seminarios de Integración Clínica I', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },
  { id: 'si', nombre: 'Seminario de Investigación', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },

  // 14° SEMESTRE
  { id: 'intcir', nombre: 'Internado - Cirugía', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },
  { id: 'intgob', nombre: 'Internado - Gineco-Obstetricia', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },
  { id: 'sic2', nombre: 'Seminarios de Integración Clínica II', dependeDe: ['extmi', 'extped', 'extcir', 'extgob', 'sic1'] },
  { id: 'trabinv', nombre: 'Trabajo de Investigación', dependeDe: ['extmi', 'extped', 'extcir', 'extgob'] },
];

const estadoCursos = {};

cursos.forEach(curso => {
  estadoCursos[curso.id] = {
    completado: false,
    desbloqueado: curso.dependeDe.length === 0
  };
});

const malla = document.getElementById('malla');

function renderMalla() {
  malla.innerHTML = '';
  cursos.forEach(curso => {
    const estado = estadoCursos[curso.id];
    const div = document.createElement('div');
    div.className = 'course';
    if (!estado.desbloqueado) div.classList.add('locked');
    if (estado.completado) div.classList.add('completed');
    div.textContent = curso.nombre;
    div.onclick = () => {
      if (!estado.desbloqueado || estado.completado) return;
      estado.completado = true;
      actualizarDesbloqueos();
      renderMalla();
    };
    malla.appendChild(div);
  });
}

function actualizarDesbloqueos() {
  cursos.forEach(curso => {
    if (estadoCursos[curso.id].completado) return;
    const requisitos = curso.dependeDe;
    const desbloqueado = requisitos.every(req => estadoCursos[req].completado);
    estadoCursos[curso.id].desbloqueado = desbloqueado;
  });
}

renderMalla();
