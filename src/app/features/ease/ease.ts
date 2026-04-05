import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ease',
  imports: [FormsModule, CommonModule],
  templateUrl: './ease.html',
  styleUrl: './ease.css',
})
export class Ease implements OnInit, OnDestroy {
  tripType: 'aller-retour' | 'aller-simple' = 'aller-retour';
  depart = '';
  destination = '';
  dateDepart = '05 Avr.';
  dateRetour = '12 Avr.';
  flexible = false;
  email = '';

  activeTab = 'vol';
  tabs = [
    { id: 'vol',        label: 'Vol',        icon: '✈' },
    { id: 'tourisme',   label: 'Tourisme',   icon: '🧭' },
    { id: 'activites',  label: 'Activités',  icon: '🏄' },
    { id: 'hotels',     label: 'Hôtels',     icon: '🏨' },
    { id: 'logements',  label: 'Logements',  icon: '🏠' },
    { id: 'visa',       label: 'Visa',       icon: '📋' },
    { id: 'voitures',   label: 'Voitures',   icon: '🚗' },
  ];

  hotels = [
    { name: 'FAYA HOTEL',             stars: 4, city: 'Douala',  price: '84 EUR',  img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
    { name: 'STAR LAND HOTEL BASTOS', stars: 4, city: 'Yaoundé', price: '199 EUR', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80' },
    { name: 'LE DONA',                stars: 3, city: 'Kribi',   price: '19 EUR',  img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80' },
    { name: 'GOLD HOTEL',             stars: 3, city: 'Bafang',  price: '77 EUR',  img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80' },
  ];

  apartments = [
    { city: 'Douala',  title: 'Studio meublé à Bonapriso', desc: 'Des Studios Luxueux et très Confortables',   price: '90 000 FCFA',  img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
    { city: 'Douala',  title: 'Studio meublé à ...',        desc: 'Appartement Luxueux DR - Douala, Bessen...', price: '90 000 FCFA',  img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80' },
    { city: 'Yaoundé', title: 'Studio meublé à ...',        desc: 'Appartement Deluxe entièrement climatisé',  price: '116 000 FCFA', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80' },
    { city: 'Douala',  title: 'Studio meublé à ...',        desc: 'Joli Studio PDR - Douala, Km 5',            price: '60 000 FCFA',  img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
  ];

  sejours = [
    { region: "Côte d'Ivoire", city: 'San Pedro',         days: 3, price: '889 000 XAF',   img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { region: "Côte d'Ivoire", city: 'Grand Bereby',       days: 3, price: '889 000 XAF',   img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80' },
    { region: 'Rwanda',        city: 'Kigali',             days: 7, price: '949 000 XAF',   img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80' },
    { region: 'Kenya',         city: 'Nairobi / Mombasa',  days: 7, price: '1 499 000 XAF', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80' },
  ];

  voitures = [
    { name: 'Hyundai Santa Fe - 2010',   type: 'SUV',   city: 'Douala', price: '60 000 XAF', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80' },
    { name: 'Kia Sorento - 2014',        type: 'SUV',   city: 'Douala', price: '60 000 XAF', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80' },
    { name: 'Mercedes-Benz ML350 - 2010',type: 'SUV',   city: 'Douala', price: '80 000 XAF', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80' },
    { name: 'Toyota Avensis - 2008',     type: 'Salon', city: 'Douala', price: '45 000 XAF', img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80' },
  ];

  partners = [
    { name: 'LANA Bio Cosmetics', img: 'https://via.placeholder.com/120x50/22c55e/ffffff?text=LANA' },
    { name: 'Bureau Veritas',     img: 'https://via.placeholder.com/120x50/ef4444/ffffff?text=Bureau+Veritas' },
    { name: 'Star Land Hotel',    img: 'https://via.placeholder.com/120x50/f97316/ffffff?text=Star+Land' },
    { name: 'Nextto',             img: 'https://via.placeholder.com/120x50/6366f1/ffffff?text=nextto' },
  ];

  private autoSlide: any;
  partnerOffset = 0;

  ngOnInit() {
    this.autoSlide = setInterval(() => {
      this.partnerOffset = (this.partnerOffset + 1) % this.partners.length;
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.autoSlide);
  }

  subscribe(e: Event) {
    e.preventDefault();
    alert('Inscription réussie ! (simulé)');
    this.email = '';
  }

  stars(n: number): string[] {
    return Array(n).fill('★');
  }
}
