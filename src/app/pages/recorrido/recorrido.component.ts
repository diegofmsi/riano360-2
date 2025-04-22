import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-kml';

// Declare KML constructor for TypeScript
declare module 'leaflet' {
  export class KML extends FeatureGroup {
    constructor(kml: Document);
  }
}

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.css']
})
export class RecorridoComponent implements OnInit, AfterViewInit {
  private map!: L.Map;

  private baseMaps = {
    'Terreno': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenTopoMap contributors'
    }),
    'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }),
    
    'Satélite': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '© Esri'
    })
  };

  ngOnInit() {
    // Inicialización básica
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    // Coordenadas de Riaño
    const lat = 42.9747;
    const lon = -5.0119;

    this.map = L.map('mapa', {
      center: [lat, lon],
      zoom: 13,
      layers: [this.baseMaps['Terreno']] // Mapa por defecto
    });

    // Añadir control de capas
    L.control.layers(this.baseMaps).addTo(this.map);

    // Cargar y mostrar el track KML
    fetch('assets/tracks/riaño360original.kml')
      .then(res => res.text())
      .then(kmltext => {
        // Convertir KML a GeoJSON
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        
        this.map.addLayer(track);
        this.map.fitBounds(track.getBounds());
      });
  }
}
