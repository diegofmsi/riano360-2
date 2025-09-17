import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-documental',
  templateUrl: './documental.component.html',
  styleUrls: ['./documental.component.css']
})
export class DocumentalComponent implements OnInit, OnDestroy {
  // Galería del documental
  images: { src: string; alt?: string; caption?: string }[] = [
    { src: 'assets/images/1.jpg',  alt: 'Escena 1',  caption: 'Escena 1'  },
    { src: 'assets/images/2.jpg',  alt: 'Escena 2',  caption: 'Escena 2'  },
    { src: 'assets/images/3.jpg',  alt: 'Escena 3',  caption: 'Escena 3'  },
    { src: 'assets/images/4.jpg',  alt: 'Escena 4',  caption: 'Escena 4'  },
    { src: 'assets/images/5.jpg',  alt: 'Escena 5',  caption: 'Escena 5'  },
    { src: 'assets/images/6.jpg',  alt: 'Escena 6',  caption: 'Escena 6'  },
    { src: 'assets/images/7.jpg',  alt: 'Escena 7',  caption: 'Escena 7'  },
    { src: 'assets/images/8.jpg',  alt: 'Escena 8',  caption: 'Escena 8'  },
    { src: 'assets/images/9.jpg',  alt: 'Escena 9',  caption: 'Escena 9'  },
    { src: 'assets/images/10.jpg', alt: 'Escena 10', caption: 'Escena 10' },
    { src: 'assets/images/11.jpg', alt: 'Escena 11', caption: 'Escena 11' },
    { src: 'assets/images/12.jpg', alt: 'Escena 12', caption: 'Escena 12' },
    { src: 'assets/images/13.jpg', alt: 'Escena 13', caption: 'Escena 13' },
    { src: 'assets/images/14.jpg', alt: 'Escena 14', caption: 'Escena 14' },
    { src: 'assets/images/15.jpg', alt: 'Escena 15', caption: 'Escena 15' },
    { src: 'assets/images/16.jpg', alt: 'Escena 16', caption: 'Escena 16' },
    { src: 'assets/images/17.jpg', alt: 'Escena 17', caption: 'Escena 17' },
    { src: 'assets/images/18.jpg', alt: 'Escena 18', caption: 'Escena 18' },
    { src: 'assets/images/19.jpg', alt: 'Escena 19', caption: 'Escena 19' },
    { src: 'assets/images/20.jpg', alt: 'Escena 20', caption: 'Escena 20' },
    { src: 'assets/images/21.jpg', alt: 'Escena 21', caption: 'Escena 21' },
    { src: 'assets/images/22.jpg', alt: 'Escena 22', caption: 'Escena 22' }
  ];
  currentImageIndex: number = -1;

  // Event handler referenciable para add/removeEventListener
  private boundKeyHandler = (e: KeyboardEvent) => this.onKeydown(e);

  get currentImage() {
    return this.currentImageIndex >= 0 ? this.images[this.currentImageIndex] : null;
  }

  openGallery(index: number) { this.currentImageIndex = index; }
  closeGallery() { this.currentImageIndex = -1; }
  prevImage() { if (this.currentImageIndex > 0) this.currentImageIndex--; }
  nextImage() { if (this.currentImageIndex < this.images.length - 1) this.currentImageIndex++; }

  ngOnInit(): void {
    // Escuchar teclas cuando el componente está activo
    window.addEventListener('keydown', this.boundKeyHandler);
  }

  ngOnDestroy(): void {
    // Limpiar listener al destruir el componente
    window.removeEventListener('keydown', this.boundKeyHandler);
  }

  // Manejo de teclado: flechas izquierda/derecha y Escape
  private onKeydown(event: KeyboardEvent): void {
    if (this.currentImageIndex === -1) return; // solo cuando la lightbox está abierta

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prevImage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextImage();
        break;
      case 'Escape':
        event.preventDefault();
        this.closeGallery();
        break;
    }
  }
}
