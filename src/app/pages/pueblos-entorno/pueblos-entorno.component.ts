// pueblos-entorno.component.ts
import { Component, OnInit } from '@angular/core';

interface Pueblo {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  historia: string;
  lugares: string[];
  coordenadas: {
    latitud: number;
    longitud: number;
  };
}

interface ElementoNatural {
  nombre: string;
  descripcion: string;
  imagen: string;
}

interface Montana extends ElementoNatural {
  altura: number;
}

@Component({
  selector: 'app-pueblos-entorno',
  templateUrl: './pueblos-entorno.component.html',
  styleUrls: ['./pueblos-entorno.component.css']
})
export class PueblosEntornoComponent implements OnInit {
  pueblos: Pueblo[] = [
    {
      id: 1,
      nombre: 'Vegacerneja',
      descripcion: 'Pequeño pueblo situado en la confluencia de los ríos Yuso y Esla.',
      imagenUrl: 'assets/images/pueblos/vegacerneja.jpg',
      historia: 'Vegacerneja es un pueblo con rica historia ganadera y fue un importante punto de paso de la trashumancia.',
      lugares: ['Iglesia parroquial', 'Puente medieval', 'Mirador del valle'],
      coordenadas: {
        latitud: 43.0658,
        longitud: -5.0133
      }
    },
    {
      id: 2,
      nombre: 'Liegos',
      descripcion: 'Pintoresco pueblo de montaña con vistas espectaculares a los Picos de Europa.',
      imagenUrl: 'assets/images/pueblos/liegos.JPG',
      historia: 'Liegos conserva construcciones tradicionales de arquitectura leonesa de montaña.',
      lugares: ['Iglesia de San Tirso', 'Mirador del Pico Jario', 'Bosque de robles centenarios'],
      coordenadas: {
        latitud: 43.0505,
        longitud: -5.0203
      }
    },
    {
      id: 3,
      nombre: 'Salamón',
      descripcion: 'Encantador pueblo en el valle del Esla con gran patrimonio cultural.',
      imagenUrl: 'assets/images/pueblos/salamon.jpg',
      historia: 'Salamón tiene orígenes medievales y fue un importante centro administrativo de la zona.',
      lugares: ['Iglesia románica', 'Casas blasonadas', 'Molino tradicional'],
      coordenadas: {
        latitud: 43.0064,
        longitud: -5.1342
      }
    },
    {
      id: 4,
      nombre: 'Las Salas',
      descripcion: 'Población con abundante patrimonio histórico y arquitectónico.',
      imagenUrl: 'assets/images/pueblos/las-salas.png',
      historia: 'Las Salas fue sede de un importante monasterio benedictino y conserva vestigios medievales.',
      lugares: ['Torre medieval', 'Santuario de la Virgen de Roblo', 'Casonas nobiliarias'],
      coordenadas: {
        latitud: 42.9937,
        longitud: -5.1231
      }
    },
    {
      id: 5,
      nombre: 'Horcadas',
      descripcion: 'Pueblo ubicado en un entorno natural privilegiado cerca del Pantano de Riaño.',
      imagenUrl: 'assets/images/pueblos/horcadas.png',
      historia: 'Horcadas mantiene vivas tradiciones ancestrales y festejos populares de gran interés.',
      lugares: ['Iglesia parroquial', 'Mirador del embalse', 'Senderos de montaña'],
      coordenadas: {
        latitud: 42.9648,
        longitud: -5.1389
      }
    },
    {
      id: 6,
      nombre: 'Carande',
      descripcion: 'Pequeña localidad con gran encanto rural y paisajístico.',
      imagenUrl: 'assets/images/pueblos/carande.png',
      historia: 'Carande fue un importante asentamiento en la ruta hacia Asturias desde tiempos romanos.',
      lugares: ['Puente medieval', 'Ermita rupestre', 'Antigua calzada'],
      coordenadas: {
        latitud: 42.9397,
        longitud: -5.1524
      }
    },
    {
      id: 7,
      nombre: 'Boca de Huérgano',
      descripcion: 'Capital del municipio, situada en un enclave estratégico entre valles.',
      imagenUrl: 'assets/images/pueblos/boca-de-huergano.jpg',
      historia: 'Boca de Huérgano fue un importante centro administrativo y comercial de la comarca.',
      lugares: ['Ayuntamiento histórico', 'Iglesia de San Vicente', 'Casa del Parque Natural'],
      coordenadas: {
        latitud: 42.9747,
        longitud: -4.9253
      }
    },
    {
        id: 8,
        nombre: 'Riaño',
        descripcion: 'Pueblo a orillas del embalse de Riaño, conocido por su paisaje lacustre y montañoso. Reconstruido tras la antigua inundación, es hoy un centro turístico y cultural que sirve de puerta de entrada al Parque Regional de los Picos de Europa.',
        imagenUrl: 'assets/images/pueblos/riaño.jpg',
        historia: 'Riaño fue trasladado y parcialmente reconstruido tras la construcción del embalse en los años 80. Desde entonces ha recuperado actividad económica y turística, preservando tradiciones locales y desarrollando iniciativas para la promoción del patrimonio natural y cultural de la comarca.',
        lugares: ['Iglesia de San Martín de Pedrosa del Rey', 'iglesia de Nuestra Señora del Rosario', 'Museo Etnográfico Comarcal de Riaño'],
        coordenadas: {
          latitud: 42.9747,
          longitud: -4.9253
        }
    }
  ];

  fauna: ElementoNatural[] = [
    {
      nombre: 'Oso Pardo',
      descripcion: 'Especie emblemática de la Cordillera Cantábrica, protegida y en recuperación.',
      imagen: 'assets/images/fauna/oso-pardo.png'
    },
    {
      nombre: 'Ciervo',
      descripcion: 'Ungulado de gran tamaño; en otoño se puede disfrutar del espectáculo de la berrea.',
      imagen: 'assets/images/fauna/ciervo.jpg'
    },
    {
      nombre: 'Rebeco',
      descripcion: 'Ungulado perfectamente adaptado a la vida en la alta montaña.',
      imagen: 'assets/images/fauna/rebeco.jpg'
    },
    {
      nombre: 'Águila Real',
      descripcion: 'Rapaz que anida en los roquedos más inaccesibles de la comarca.',
      imagen: 'assets/images/fauna/aguila-real.jpg'
    }
  ];

  flora: ElementoNatural[] = [
    {
      nombre: 'Haya',
      descripcion: 'Árbol dominante en los bosques de la zona, forma extensos hayedos.',
      imagen: 'assets/images/flora/haya.jpg'
    },
    {
      nombre: 'Roble Albar',
      descripcion: 'Especie característica de los bosques montanos, de gran valor ecológico.',
      imagen: 'assets/images/flora/roble-albar.jpg'
    },
    {
      nombre: 'Acebo',
      descripcion: 'Arbusto perenne protegido, importante para la fauna local.',
      imagen: 'assets/images/flora/acebo.jpg'
    },
    
  ];

  montanas: Montana[] = [
    {
      nombre: 'Pico Gilbo',
      descripcion: 'Cima emblemática que domina el valle de Riaño, accesible y con buenas vistas.',
      imagen: 'assets/images/montanas/gilbo.jpg',
      altura: 1667
    },
    {
      nombre: 'Yordas',
      descripcion: 'Cima cercana destacada por sus rutas y miradores sobre el embalse.',
      imagen: 'assets/images/montanas/yordas.jpg',
      altura: 1964
    },
    {
      nombre: 'Las Pintas',
      descripcion: 'Elevación próxima a Riaño, popular en senderismo local por sus panorámicas.',
      imagen: 'assets/images/montanas/pintas.jpg',
      altura: 1985
    },
    {
      nombre: 'Pico Castaño',
      descripcion: 'Cima cercana, frecuentada por senderistas locales.',
      imagen: 'assets/images/montanas/pico-castano.jpg',
      altura: 1865
    },
    {
      nombre: 'Llerenes',
      descripcion: 'Elevación próxima a Riaño, conocida por sus buenas panorámicas.',
      imagen: 'assets/images/montanas/llerenes.jpg',
      altura: 1874
    },
    
  ];

  bosques: ElementoNatural[] = [
    {
      nombre: 'Hayedo de Hormas',
      descripcion: 'Extenso bosque de hayas con ejemplares centenarios.',
      imagen: 'assets/images/bosques/hormas.jpg'
    },
    {
      nombre: 'Robledal de Riañó',
      descripcion: 'Bosque mixto con predominio de roble albar.',
      imagen: 'assets/images/bosques/riano.jpg'
    },
    {
      nombre: 'Bosque de Pardomino',
      descripcion: 'Masa forestal mixta de gran biodiversidad.',
      imagen: 'assets/images/bosques/pardomino.jpg'
    }
  ];

  puebloSeleccionado: Pueblo | null = null;

  constructor() { }

  ngOnInit(): void { }

  verDetalle(pueblo: Pueblo): void {
    this.puebloSeleccionado = pueblo;
  }
}