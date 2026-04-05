import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  depart = '';
  destination = '';
  dateAller = '';
  dateRetour = '';
  email = '';

  currentSlide = 0;
  private autoSlideInterval: any;

  partners = ['Air France', 'Camair-Co', 'Ethiopian', 'Turkish Airlines', 'Royal Air Maroc'];

  get sliderTransform(): string {
    return `translateX(-${this.currentSlide * 170}px)`;
  }

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => this.changeSlide(1), 4000);
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  changeSlide(direction: number) {
    this.currentSlide += direction;
    if (this.currentSlide >= this.partners.length - 2) this.currentSlide = 0;
    if (this.currentSlide < 0) this.currentSlide = this.partners.length - 3;
  }

  searchVol() {
    alert(`Recherche: ${this.depart} → ${this.destination} (simulé)`);
  }

  subscribe(event: Event) {
    event.preventDefault();
    alert('Inscription réussie ! (simulé)');
    this.email = '';
  }
}
