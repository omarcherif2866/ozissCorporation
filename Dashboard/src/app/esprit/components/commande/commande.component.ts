import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../service/order.service';
import { ProduitService } from '../../service/produit.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.scss'
})
export class CommandeComponent {
  orders: Order[] = [];
  cols: any[];
  orderDialogVisible: boolean = false;
  selectedOrder: Order | null = null;

  constructor(
    private orderService: OrderService,
    private produitService: ProduitService,
  ) {
    this.cols = [
      { field: 'produits.produit.nom', header: 'Produits' },
      { field: 'status', header: 'Statut' },
    ];
  }

  ngOnInit(): void {
    const clientId = localStorage.getItem('user_id'); // Récupérer l'ID du client depuis localStorage
    if (clientId) {
      this.getOrdersByClient(clientId);
    } else {
      console.error('ID du client non trouvé dans le localStorage.');
    }
  }

  getOrdersByClient(clientId: string): void {
    this.orderService.getOrderByClient(clientId).subscribe(
      (orders: Order[]) => {
        this.orders = orders;
        this.loadProduitsDetails();
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes du client :', error);
      }
    );
  }

  loadProduitsDetails(): void {
    const produitRequests = this.orders.flatMap(order =>
      order.produits.map(produitItem =>
        this.produitService.getProductById(produitItem.produit._id)
      )
    );

    forkJoin(produitRequests).subscribe(
      (produits) => {
        this.orders.forEach(order => {
          order.produits.forEach(produitItem => {
            const produitDetail = produits.find(p => p._id === produitItem.produit._id);
            if (produitDetail) {
              produitItem.produit = produitDetail;
            }
          });
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails des produits :', error);
      }
    );
  }

  onGlobalFilter(table: any, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  showOrderDetails(order: Order) {
    this.selectedOrder = order;
    this.orderDialogVisible = true;
  }
}