import { Component, AfterViewInit} from '@angular/core';
import { ProduitComponent } from "./produit/produit.component";
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProduitComponent, DetailProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  selectedProduct: any;
  private modalElement: any;
  private modalInstance: Modal | undefined;

  ngAfterViewInit() {
    // Initialisez le modal de Bootstrap
    this.modalElement = document.getElementById('productModal');
    this.modalInstance = this.modalElement ? new Modal(this.modalElement) : undefined;
  }

  onProductSelected(product: any) {
    this.selectedProduct = product;
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}
