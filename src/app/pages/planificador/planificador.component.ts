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

  // ---------------------------------------
  // Funciones para gestionar la ruta y perfil
  // ---------------------------------------
  // Añade una ruta (latlngs puede incluir altitudes: [lat, lng, alt])
  addRoute(latlngs: L.LatLngExpression[]): void {
    // eliminar ruta previa si quieres (o comentar para permitir varias)
    this.route.forEach(r => this.map.removeLayer(r));
    this.route = [];
 
    const poly = L.polyline(latlngs, {
      color: '#ff5722',
      weight: 6,
      opacity: 0.95,
      lineCap: 'round',
      className: 'route-line'
    }).addTo(this.map);
 
    // sombra (duplicado con menor opacidad)
    L.polyline(latlngs, {
      color: '#000',
      weight: 10,
      opacity: 0.12,
      interactive: false
    }).addTo(this.map);
 
    // eventos para resaltar en hover
    poly.on('mouseover', () => poly.setStyle({ weight: 9, opacity: 1 }));
    poly.on('mouseout',  () => poly.setStyle({ weight: 6, opacity: 0.95 }));
 
    this.route.push(poly);
 
    // centrar mapa en la ruta
    this.map.fitBounds(poly.getBounds(), { padding: [40, 40] });
 
    // calcular métricas y dibujar perfil
    const pts = latlngs.map(l => {
      const p = L.latLng(l as any);
      // si la entrada es [lat,lng,alt] el tercer elemento puede contener alt
      const alt = Array.isArray(l) && (l as any)[2] != null ? Number((l as any)[2]) : (p as any).alt || 0;
      return { lat: p.lat, lng: p.lng, alt };
    });
 
    this.routeDistance = +(this.computeTotalDistanceKm(pts) ).toFixed(2);
    this.elevation = Math.round(this.computeTotalAscent(pts)); // metros de ascenso total
    this.estimatedTime = +(this.estimateTimeHours(this.routeDistance).toFixed(2));
 
    this.drawElevationProfile('elevation-profile', pts);
  }
 
  private computeTotalDistanceKm(points: {lat:number,lng:number}[]): number {
    const R = 6371; // km
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const a = points[i-1], b = points[i];
      const dLat = this.toRad(b.lat - a.lat);
      const dLon = this.toRad(b.lng - a.lng);
      const lat1 = this.toRad(a.lat);
      const lat2 = this.toRad(b.lat);
      const sinDLat = Math.sin(dLat/2), sinDLon = Math.sin(dLon/2);
      const aa = sinDLat*sinDLat + sinDLon*sinDLon * Math.cos(lat1)*Math.cos(lat2);
      const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1-aa));
      total += R * c;
    }
    return total;
  }
 
  private computeTotalAscent(points: {lat:number,lng:number,alt?:number}[]): number {
    let ascent = 0;
    for (let i = 1; i < points.length; i++) {
      const diff = (points[i].alt || 0) - (points[i-1].alt || 0);
      if (diff > 0) ascent += diff;
    }
    return ascent;
  }
 
  private estimateTimeHours(distanceKm: number): number {
    // regla simple: 4.5 km/h base, +1h por cada 600m de desnivel acumulado (aprox)
    const speed = 4.5;
    const base = distanceKm / speed;
    const extra = (this.elevation || 0) / 600;
    return base + extra;
  }
 
  private toRad(v:number){ return v * Math.PI / 180; }
 
  // Dibuja perfil de elevación en un canvas (id)
  private drawElevationProfile(canvasId: string, points: {lat:number,lng:number,alt?:number}[]): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
 
    const w = canvas.width = canvas.clientWidth * devicePixelRatio;
    const h = canvas.height = 150 * devicePixelRatio;
    ctx.clearRect(0,0,w,h);
 
    const alts = points.map(p => p.alt || 0);
    const max = Math.max(...alts, 0);
    const min = Math.min(...alts, 0);
    const range = Math.max(1, max - min);
 
    // escalado horizontal
    const stepX = w / Math.max(1, points.length - 1);
 
    // fondo
    ctx.fillStyle = '#1f3644';
    ctx.fillRect(0,0,w,h);
 
    // area bajo curva
    ctx.beginPath();
    points.forEach((p, i) => {
      const x = i * stepX;
      const y = h - (( (p.alt||0) - min ) / range) * (h - 20) - 10;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    // cerrar path hacia base
    ctx.lineTo(w, h-10);
    ctx.lineTo(0, h-10);
    ctx.closePath();
    // gradiente area
    const grad = ctx.createLinearGradient(0,0,0,h);
    grad.addColorStop(0, 'rgba(255,87,34,0.35)');
    grad.addColorStop(1, 'rgba(255,87,34,0.05)');
    ctx.fillStyle = grad;
    ctx.fill();
 
    // linea de perfil
    ctx.beginPath();
    ctx.strokeStyle = '#ffb09a';
    ctx.lineWidth = 2 * devicePixelRatio;
    points.forEach((p, i) => {
      const x = i * stepX;
      const y = h - (( (p.alt||0) - min ) / range) * (h - 20) - 10;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
 
    // texto: min/max
    ctx.fillStyle = '#fff';
    ctx.font = `${12 * devicePixelRatio}px sans-serif`;
    ctx.fillText(`Máx: ${Math.round(max)} m`, 8 * devicePixelRatio, 14 * devicePixelRatio);
    ctx.fillText(`Mín: ${Math.round(min)} m`, 8 * devicePixelRatio, 30 * devicePixelRatio);
  }
  // ---------------------------------------
}
