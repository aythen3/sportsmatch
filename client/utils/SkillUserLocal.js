
export const opciones_posicion = {
    futbol: [
        'Portero',
        'Lateral',
        'Central',
        'Mediocentro',
        'Interior',
        'Extremo',
        'Mediapunta',
        'Delantero centro'
    ],
    baloncesto: [
        'Base',
        'Escolta',
        'Alero',
        'Ala-pivot',
        'Pivot'
    ],
    futbolSala: [
        'Portero',
        'Cierre',
        'Ala',
        'Pivot'
    ],
    hockey: [
        'Portero'
        , 'Jugador'
    ],
    voleibol: [
        'Colocador',
        'Rematador externo',
        'Rematador opuesto',
        'Central',
        'Libero',
        'Receptor/zaguero'
    ],
    handball: [
        'Portero',
        'Central',
        'Ala derecha',
        'Ala izquierda',
        'Pivot',
        'Extremo derecho',
        'Extremo izquierdo'
    ]
}


export const opciones_categoria = {
    futbol: [
        'Escuela (4-6 años)',
        'Pre benjamin (6-8 años)',
        'Benjamin (8-10 años)',
        'Alevin (10-12 años)',
        'Infantil (12-14 años)',
        'Cadete (14-16 años)',
        'Juvenil (16-18 años)',
        'Senior (+18 años)',
        'Veteranos (+30 años)'
    ],
    baloncesto: [
        'Minibasket (4-5 años)',
        'Pre benjamin (6-8 años)',
        'Benjamin (8-10 años)',
        'Alevin (10-12 años)',
        'Infantil (12-14 años)',
        'Cadete (14-16 años)',
        'Junior (16-18 años)',
        'Sub 23 (18 a 23 años)',
        'Senior (+23 años)',
        'Veteranos (+30 años)'
    ],
    futbolSala: [
        'Escuela (4-6 años)',
        'Pre benjamin (6-8 años)',
        'Benjamin (8-10 años)',
        'Alevin (10-12 años)',
        'Infantil (12-14 años)',
        'Cadete (14-15 años)',
        'Juvenil (16-18 años)',
        'Senior (+18 años)',
        'Veteranos (+30 años)'
    ],
    hockey: [
        'Minihoquei (4-6 años)',
        'Pre benjamin (6-8 años)',
        'Benjamin (8-10 años)',
        'Alevin (10-12 años)',
        'Infantil (12-14 años)',
        'Juvenil (14-16 años)',
        'Junior (16-18 años)',
        'Senior (+18 años)',
        'Veteranos (+30 años)'
    ],
    voleibol: [
        'Pre benjamin (6-8 años)',
        'Benjamin (8-10 años)',
        'Alevin (10-12 años)',
        'Infantil (12-14 años)',
        'Cadete (14-16 años)',
        'Juvenil (16-18 años)',
        'Senior (+18 años)',
        'Veteranos (+30 años)'
    ],
    handball: [
        'Escuela (4-6 años)',
        'Pre benjamin (6-8 años)',
        'Benjamin (8-10 años)',
        'Alevin (10-12 años)',
        'Infantil (12-14 años)',
        'Cadete (14-16 años)',
        'Juvenil (16-18 años)',
        'Senior (+18 años)',
        'Veteranos (+30 años)'
    ]
}

export const opciones_skills = {
    futbol: [
        "Resistencia",
        "Disparo",
        "Regate",
    ],
    baloncesto: [
        "Bote",
        "Lanzamiento",
        "Dribling"
    ],
    futbolSala: [
        "Resistencia",
        "Disparo",
        "Regate"
     
    ],
    hockey: [
        "Resistencia",
        "Disparo",
        "Dribling"
    
    ],
    voleibol: [
        "Servicio",
        "Recepción",
        "Salto"
    ],
    handball: [
        "Fuerza",
        "Finta",
        "Lanzamiento"
    ]

}

export const categorias_deporte = {
    'Fútbol': opciones_categoria.futbol,
    'Fútbol Sala': opciones_categoria.futbolSala,
    'Voley': opciones_categoria.voleibol,
    'Hockey': opciones_categoria.hockey,
    'Básquetbol': opciones_categoria.baloncesto,
    'Handball': opciones_categoria.handball,
};

export const skills_deporte = {
    'Fútbol': opciones_skills.futbol,
    'Fútbol Sala': opciones_skills.futbolSala,
    'Básquetbol': opciones_skills.baloncesto,
    'Hockey': opciones_skills.hockey,
    'Handball': opciones_skills.handball,
    'Voley': opciones_skills.voleibol,
};