export const CONTACTO = {
  nombre: "Mauricio Rios",
  rol: "Líder técnico",
  email: "riosmaurii@gmail.com",
  linkedin: "https://www.linkedin.com/in/rios-mauricio",
  linkedinLabel: "linkedin.com/in/rios-mauricio",
};

export type FlowStep = { nombre: string; detalle: string };

export const JUMIN = {
  indice: "01",
  kicker: "Lo que la mina compra",
  nombre: "Jumin",
  rol: "Consultor de compras con IA",
  estado: "Prototipo funcional",
  estadoExtra: "Presentado en Hackathon INNOA · Jujuy",
  accent: "senal" as const,
  cita: "La planta deja de moler porque faltan bolas de acero. El insumo cuesta centavos el kilo; la planta parada cuesta miles por hora.",
  bajada:
    "Avisa qué insumo está por faltar, recomienda a qué proveedor verificado comprarle y explica por qué. Una persona siempre aprueba.",
  pilares: [
    {
      titulo: "Red de proveedores verificados",
      detalle:
        "Proveedores reales de fuentes públicas — CAPMIN y el Registro Provincial de Jujuy — con puntaje de confianza de 0 a 100: identidad, cumplimiento, desempeño, ESG y capacidad.",
    },
    {
      titulo: "Alertas de stock",
      detalle:
        "La mina carga su stock con un punto de reorden por insumo. Jumin avisa qué está por faltar y cuántos días de margen quedan.",
    },
    {
      titulo: "Agente en lenguaje natural",
      detalle:
        "«¿Quién me entrega respiradores más rápido?» Compara ofertas por precio, plazo y confianza. No inventa datos ni compra solo.",
    },
  ],
  stats: [
    { valor: "277", etiqueta: "proveedores en la red", nota: "271 de CAPMIN" },
    { valor: "188", etiqueta: "categorías de insumos" },
    { valor: "58", etiqueta: "reglas de requisitos por categoría" },
    { valor: "3", etiqueta: "roles: comprador, aprobador, admin" },
  ],
  reglas: {
    titulo: "Reglas que protegen a la mina",
    detalle:
      "Un proveedor solo se recomienda si cumple todos los requisitos obligatorios de su categoría. Si un certificado vence, sale solo de las recomendaciones. Las reglas viven en la base de datos, no en la IA: se auditan y se ajustan a cada mina.",
    ejemplos: [
      { categoria: "Explosivos", exige: "ANMaC" },
      { categoria: "Geomembranas", exige: "GRI-GM13" },
      { categoria: "EPP", exige: "IRAM" },
    ],
  },
  flujo: [
    { nombre: "Alerta", detalle: "Un insumo cae bajo su punto de reorden." },
    { nombre: "Consulta", detalle: "Compras le pregunta al agente qué hacer." },
    {
      nombre: "Recomendación",
      detalle: "Proveedor, precio, plazo y puntaje, con justificación.",
    },
    {
      nombre: "Aprobación",
      detalle: "Una persona aprueba o rechaza. Todo queda registrado.",
    },
  ] satisfies FlowStep[],
};

export const JULIT = {
  indice: "02",
  kicker: "Lo que la mina vende",
  nombre: "JuLit",
  rol: "El lote verificado",
  estado: "Pago en red de prueba",
  estadoExtra: "Certificación: próximo paso",
  demo: "https://ju-lit.vercel.app/",
  accent: "litio" as const,
  bajada:
    "Cada lote con un pasaporte digital: su certificado de calidad firmado por el laboratorio, que el comprador puede verificar, y su pago protegido hasta la entrega.",
  analogia:
    "Como comprar un auto usado a un desconocido: para «¿está como me dicen?» está el mecánico de confianza; para «¿y si pago y no me lo entregan?», el escribano que guarda la plata. La certificación es el mecánico; el pago protegido es el escribano.",
  partes: [
    {
      titulo: "Certificación del lote",
      detalle:
        "El laboratorio firma el análisis y su huella queda registrada de forma inalterable, atada a ese lote. El comprador verifica en segundos, con un link o QR, que es el original — sin depender de un PDF que se puede editar.",
    },
    {
      titulo: "Pago protegido",
      detalle:
        "La plata del comprador queda bloqueada por reglas públicas y se libera al productor cuando el lote llega. Si el productor nunca despacha, el comprador recupera el 100%. Nadie — ni siquiera nosotros — puede mover el dinero por fuera de esas reglas.",
    },
  ],
  flujo: [
    { nombre: "Contrato", detalle: "Productor y comprador acuerdan lote y plazos." },
    {
      nombre: "Depósito",
      detalle: "El comprador deposita el precio. Queda bloqueado.",
    },
    {
      nombre: "Despacho",
      detalle: "El productor registra la huella del documento de embarque.",
    },
    {
      nombre: "Cobro",
      detalle: "El comprador confirma la llegada y el productor cobra en el acto.",
    },
  ] satisfies FlowStep[],
  modelo:
    "Pagos en dólares digitales (USDC) sobre Solana, con transacciones de menos de un centavo. Comisión del 1% cobrada solo cuando se libera el pago — crear el lote y depositar es gratis — con un tope fijo del 2% en el propio sistema.",
  honesto:
    "Estado honesto: el ciclo completo de pago funciona en la red de prueba de Solana con dinero de prueba. Antes de operar con dinero real falta la revisión legal frente a la normativa cambiaria de exportación (Decreto 609/2019, BCRA). Por eso proponemos lanzar primero la certificación, que no mueve dinero.",
};

export const NOMAI = {
  indice: "03",
  kicker: "Muestra de capacidad",
  nombre: "Nomai",
  rol: "Un agente que reserva y paga solo",
  estado: "En desarrollo",
  estadoExtra: "Rubro turismo",
  demo: "https://nomaiapp.vercel.app/",
  accent: "terra" as const,
  bajada:
    "Nomai no es un producto minero. Lo mostramos porque prueba que el equipo ya construye agentes de IA que ejecutan operaciones con dinero de verdad, con controles.",
  queHace:
    "Un viajero le pide al agente — «Nomito» — que le busque alojamiento. El agente investiga opciones, reserva y paga en moneda digital desde su propia billetera, con límites de gasto. El dinero queda en custodia y se libera al dueño en etapas: 50% al vencer el plazo de cancelación y el resto 24 horas después del check-in si no hay reclamos.",
  demuestra: [
    "Agentes de IA que actúan, no solo conversan.",
    "Pagos automáticos entre máquinas — protocolo x402 sobre Celo — sin que el usuario maneje criptomonedas.",
    "Custodia de fondos con liberación por etapas y reclamos.",
    "Controles contra abuso: niveles de verificación de identidad y topes de gasto diarios.",
  ],
  traslado: [
    {
      pieza: "Agente que reserva y paga con tope de gasto",
      aplicacion:
        "Recompra automática de insumos de rutina en Jumin, dentro de un presupuesto aprobado",
    },
    {
      pieza: "Custodia con liberación en etapas",
      aplicacion:
        "Pago a contratistas por hito cumplido: anticipo, avance, recepción final",
    },
    {
      pieza: "Reservas de alojamiento",
      aplicacion:
        "Alojamiento y traslados para contratistas, auditores y visitas a campamento",
    },
    {
      pieza: "Reclamos con plazo y reglas fijas",
      aplicacion: "Reclamos a proveedores por entrega fuera de especificación",
    },
  ],
};

export const CAPACIDADES = [
  {
    titulo: "Inteligencia artificial",
    detalle:
      "Agentes acotados a su dominio, que no inventan datos y dejan la decisión final en una persona.",
  },
  {
    titulo: "Pagos y custodia",
    detalle:
      "Contratos en Solana y Celo con dólares digitales: fondos bloqueados por reglas públicas y auditables.",
  },
  {
    titulo: "Datos y seguridad",
    detalle:
      "Bases de datos con permisos por fila: cada empresa ve solo lo suyo. Pruebas automáticas en cada proyecto.",
  },
];

export const PILOTOS = [
  {
    proyecto: "Piloto Jumin",
    area: "Compras",
    plazo: "60 a 90 días",
    accent: "senal" as const,
    puntos: [
      "Cargar entre 20 y 50 insumos críticos con su stock y punto de reorden.",
      "Sumar los proveedores habilitados de la mina a la red.",
      "Medir: alertas a tiempo, horas ahorradas en compras, compras de urgencia evitadas.",
    ],
  },
  {
    proyecto: "Piloto JuLit · Certificación",
    area: "Ventas",
    plazo: "Primeros lotes",
    accent: "litio" as const,
    puntos: [
      "Sumar al laboratorio o inspectora que hoy certifica los lotes.",
      "Emitir el certificado verificable de uno o más lotes reales.",
      "Que un comprador lo verifique y nos diga si le suma valor.",
    ],
  },
  {
    proyecto: "JuLit · Pago protegido",
    area: "Ventas",
    plazo: "En paralelo",
    accent: "litio" as const,
    puntos: [
      "Recorrer el flujo completo en la red de prueba con el área comercial.",
      "Revisar juntos el contrato tipo y los plazos.",
      "Definir el camino legal para un primer lote con pago real.",
    ],
  },
];

export const PREGUNTAS = [
  {
    pregunta:
      "¿Tuvieron paradas o compras de urgencia por falta de algún insumo en el último año?",
    producto: "Jumin",
  },
  {
    pregunta:
      "¿Cuánto tiempo le lleva a compras dar de alta y controlar a un proveedor nuevo?",
    producto: "Jumin",
  },
  {
    pregunta:
      "¿Quién emite hoy los certificados de calidad de los lotes: laboratorio propio o inspectora externa?",
    producto: "JuLit",
  },
  {
    pregunta: "¿Algún comprador les pidió validar el certificado de análisis con el laboratorio?",
    producto: "JuLit",
  },
  {
    pregunta:
      "¿Algún comprador les pide trazabilidad, huella de carbono o datos para pasaporte de batería?",
    producto: "JuLit",
  },
  {
    pregunta: "¿Venden o van a vender lotes a compradores que no son socios de la empresa?",
    producto: "JuLit · pago",
  },
  {
    pregunta: "¿Cobran por adelantado, con carta de crédito, o asumen riesgo de cobro?",
    producto: "JuLit · pago",
  },
];
