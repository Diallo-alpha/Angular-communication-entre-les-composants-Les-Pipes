import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  produit = [
    { id: 1,
      imageUrl:"https://cdn.pixabay.com/photo/2024/04/04/15/59/ai-generated-8675363_1280.jpg",
      titre: 'Gâteau',
      prix: 10.5
    },
    {
      id: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2020/03/22/10/36/berry-4956645_1280.png',
      titre: 'Lait',
      prix: 25.3
    },
     {
      id: 3,
      imageUrl: 'https://images.stockcake.com/public/a/f/2/af2e14e7-5d49-407a-8721-04dbcf7a01eb_large/red-apple-hanging-stockcake.jpg',
      titre: 'Pomme',
      prix: 25.3
    },
    {
      id: 4,
      imageUrl: 'https://images.stockcake.com/public/b/7/a/b7a4ad47-3b95-4af4-9c06-6d79a2e1fde5_large/tropical-fruit-bounty-stockcake.jpg',
      titre: 'Ananas',
      prix: 25.3
    },
  ];
}
