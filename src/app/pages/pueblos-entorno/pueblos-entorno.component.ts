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
      imagenUrl: 'assets/images/vegacerneja.jpg',
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
      imagenUrl: 'assets/images/liegos.jpg',
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
      imagenUrl: 'assets/images/salamon.jpg',
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
      imagenUrl: 'assets/images/las-salas.jpg',
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
      imagenUrl: 'assets/images/horcadas.jpg',
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
      imagenUrl: 'assets/images/carande.jpg',
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
      imagenUrl: 'assets/images/boca-de-huergano.jpg',
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
        descripcion: 'Capital del municipio, situada en un enclave estratégico entre valles.',
        imagenUrl: 'assets/images/boca-de-huergano.jpg',
        historia: 'Boca de Huérgano fue un importante centro administrativo y comercial de la comarca.',
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
      imagen: 'assets/images/fauna/oso-pardo.jpg'
    },
    {
      nombre: 'Urogallo Cantábrico',
      descripcion: 'Ave en peligro de extinción que habita en los bosques maduros de la zona.',
      imagen: 'assets/images/fauna/urogallo.jpg'
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
      imagen: 'assets/images/flora/roble.jpg'
    },
    {
      nombre: 'Acebo',
      descripcion: 'Arbusto perenne protegido, importante para la fauna local.',
      imagen: 'assets/images/flora/acebo.jpg'
    },
    {
      nombre: 'Genciana',
      descripcion: 'Planta medicinal típica de los prados de alta montaña.',
      imagen: 'assets/images/flora/genciana.jpg'
    }
  ];

  montanas: Montana[] = [
    {
      nombre: 'Pico Gilbo',
      descripcion: 'Montaña emblemática que domina el valle de Riaño.',
      imagen: 'assets/images/montanas/gilbo.jpg',
      altura: 1679
    },
    {
      nombre: 'Torre del Friero',
      descripcion: 'Impresionante pico calizo en los Picos de Europa.',
      imagen: 'assets/images/montanas/friero.jpg',
      altura: 2445
    },
    {
      nombre: 'Peña Santa',
      descripcion: 'Una de las cumbres más elevadas del macizo occidental.',
      imagen: 'assets/images/montanas/pena-santa.jpg',
      altura: 2596
    }
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