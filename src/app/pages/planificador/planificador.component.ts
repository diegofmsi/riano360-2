import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

interface POI {
  type: 'cima' | 'comida' | 'alojamiento' | 'camping' | 'atraccion';
  nombre: string;
  coordenadas: [number, number];
  descripcion: string;
  icono?: string;
}

@Component({
  selector: 'app-planificador',
  templateUrl: './planificador.component.html',
  styleUrls: ['./planificador.component.css']
})
export class PlanificadorComponent implements OnInit {
  private map!: L.Map;
  route: L.Polyline[] = [];
  // Propiedades que usa la plantilla
  routeDistance: number = 0;
  elevation: number = 0;
  estimatedTime: number = 0;
  
  puntosInteres: POI[] = [
    {
      type: 'cima',
      nombre: 'Pico Gilbo',
      coordenadas: [43.0505, -5.0203],
      descripcion: 'Cima emblemática de 1679m',
      icono: 'mountain'
    },
    {
      type: 'comida',
      nombre: 'Restaurante La Montaña',
      coordenadas: [42.9847, -5.0123],
      descripcion: 'Cocina tradicional montañesa',
      icono: 'restaurant'
    },
    // Añadir más puntos de interés
  ];

  ngOnInit() {
    this.initMap();
    this.addPOIs();
  }

  private initMap(): void {
    this.map = L.map('map').setView([42.9847, -5.0123], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Añadir controles de dibujo
    // L.Control.Draw no tiene tipos expuestos aquí, usar any para evitar error de compilación
    const DrawControl: any = (L as any).Control?.Draw || (L as any).Draw || undefined;
    const drawControl: any = DrawControl ? new DrawControl({
      draw: {
        marker: true,
        polyline: true,
        circle: false,
        rectangle: false,
        polygon: false,
        circlemarker: false
      }
    }) : null;
    if (drawControl) {
      this.map.addControl(drawControl);
    }
  }

  private addPOIs(): void {
    this.puntosInteres.forEach(poi => {
      const marker = L.marker(poi.coordenadas)
        .bindPopup(`
          <h3>${poi.nombre}</h3>
          <p>${poi.descripcion}</p>
        `);
      marker.addTo(this.map);
    });
  }
}
