import { Component } from '@angular/core';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Activite, Annimateur } from '../../models/activite';
import { ActiviteService } from '../../service/activite.service';
import { SessionService } from '../../service/session.service';
import { Session } from '../../models/session';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  providers: [MessageService],
  templateUrl: './activite.component.html',
})
export class ActiviteComponent {
  activiteDialog: boolean = false;
  SessionDialog: boolean = false;
  actionLabel: string = 'Enregistrer'; 

  deleteActiviteDialog: boolean = false;


  activites: Activite[] = [];

  sessions: Session[] = [];

  activite: Activite = {};

  newSession: Session = {};

  selectedActivites: Activite[] = [];

  submitted: boolean = false;

  annimateurOptions: any[] = [];
  selectedAnnimateur: Annimateur;
  selectedSessions: Session[] = [];
  // selectedReservations: Reservtion[] = [];

  uploadedFiles: File[] = [];

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private activiteService: ActiviteService, private messageService: MessageService, private sessionService: SessionService) { }

  ngOnInit() {
    this.selectedSessions = []; 
    // this.selectedReservations = []; 

    this.getAllSessions();
    // this.getAllReservations();

    this.getAnnimateurOptions();
    this.getAllActivites()

  }

  openNew() {
      this.activite = {};
      this.submitted = false;
      this.activiteDialog = true;
  }

  openNewSession() {
    this.newSession = {};
    this.submitted = false;
    this.SessionDialog = true;
  }

  editProduct(activite: Activite) {
    this.activite = { ...activite };
    this.activiteDialog = true;
    this.actionLabel = 'Modifier'; // Lors de l'édition, le libellé devient "Modifier"
}

deleteProduct(activite: Activite) {
  console.log('deleteProduct called with activite:', activite);
  if (activite && activite.id) { // Vérifiez que l'objet activite contient bien un ID
    this.deleteActiviteDialog = true;
    this.activite = { ...activite }; // Assurez-vous de copier l'objet activite correctement
  } else {
    console.error('Activite object is missing ID:', activite);
  }
}

confirmDelete() {
  console.log('confirmDelete called with activite:', this.activite);
  if (this.activite && this.activite.id) {
    this.activiteService.deleteActivite(this.activite.id).subscribe(
      response => {
        this.activites = this.activites.filter(val => val.id !== this.activite.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Activity Deleted', life: 3000 });
        this.activite = {};
        this.deleteActiviteDialog = false;
      },
      error => {
        console.error('Error deleting activity:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to Delete Activity', life: 3000 });
        this.deleteActiviteDialog = false;
      }
    );
  } else {
    console.error('Invalid Activity ID:', this.activite);
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Activity ID', life: 3000 });
    this.deleteActiviteDialog = false;
  }
}



  hideDialog() {
      this.activiteDialog = false;
      this.submitted = false;
  }


  

  saveActivite(): void {
    if (!this.activite.nom || !this.activite.description || !this.activite.annimateur || this.uploadedFiles.length === 0) {
      console.error('Veuillez remplir tous les champs obligatoires.');
      return;
    }
  
    const formData = new FormData();
    formData.append('nom', this.activite.nom);
    formData.append('description', this.activite.description);
    formData.append('annimateur', this.activite.annimateur.toString());
    formData.append('image', this.uploadedFiles[0]); // Ajouter l'image
  
    if (this.selectedSessions.length > 0) {
      const sessionIds = this.selectedSessions.map(session => session.id);
      formData.append('sessionIds', sessionIds.join(','));
    }

    // if (this.selectedReservations.length > 0) {
    //   const reservationIds = this.selectedReservations.map(reservation => reservation.id);
    //   formData.append('reservationIds', reservationIds.join(','));
    // }
  
    if (this.activite.id) {
      this.activiteService.putActivite(this.activite.id, formData).subscribe(
        res => {
          console.log('Activité mise à jour avec succès', res);
          this.activiteDialog = false; 
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Activité mis à jour', life: 3000 });
          window.location.reload();
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la mise à jour de l\'activité:', error);

          this.messageService.add({ severity: 'error', summary: 'Erreur lors de la mise à jour de l\'activité', detail: error.message });
        }
      );
    } else {
      this.activiteService.addActivite(formData).subscribe(
        res => {
          console.log('Activité ajoutée avec succès', res);
          this.activiteDialog = false; 
          this.activite = {}; 
          this.uploadedFiles = []; 
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Activité ajoutée', life: 3000 });

        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout de l\'activité:', error);
          this.messageService.add({ severity: 'error', summary: 'Erreur lors de l\'ajout de l\'activité', detail: error.message });
        }
      );
    }
  }
  

  

  


  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getAllSessions(): void {
    this.sessionService.getSession().subscribe(ss => {
      this.sessions = ss;
      console.log("Sessions récupérées:", ss);
      // this.selectedSessions = ss; // Mettez à jour selectedSessions avec les sessions récupérées
    });
  }
  

  getAnnimateurOptions(): void {
    this.annimateurOptions = Object.keys(Annimateur).map(key => ({
      label: Annimateur[key],
      value: Annimateur[key]
    }));
  }

  onFileSelected(event): void {
    // Vérifier si la propriété 'files' est définie dans l'événement
    if (event.files && event.files.length > 0) {
        // Réinitialiser les fichiers sélectionnés précédemment
        this.uploadedFiles = [];

        // Ajouter les fichiers sélectionnés à uploadedFiles
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    } else {
        console.error("Erreur lors de la sélection du fichier : la propriété 'files' n'est pas définie dans l'événement.");
    }
}

  
  getImageUrl(imageName: string): string {
  // console.log("imageName:" , imageName)
  return `http://localhost:8075/activite/image/${imageName}`;
}

  getAllActivites(): void {
    this.activiteService.getActivite().subscribe(ss => {
      this.activites = ss;
      console.log("activites récupérées:", ss);
    });
  }

  saveSession() {
    this.submitted = true;
    if (this.newSession.nom && this.newSession.activite) {
      const sessionData = {
        nom: this.newSession.nom,
        activite: this.newSession.activite
      };
      
      console.log('Session Data:', sessionData); // Vérifiez que les données sont correctement formatées
      
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.sessionService.addSessionAndAssignToActivite(sessionData, this.newSession.activite.id)
        .subscribe({
          next: (data) => {
            this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Session ajoutée avec succès' });
            this.SessionDialog = false;
            this.getAllSessions(); // Rafraîchir la liste des sessions
          },
          error: (error) => {
            console.error('Erreur lors de l\'ajout de la session:', error);
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Échec de l\'ajout de la session' });
          }
        });
    }
  }
  
  
  

  closeDialog() {
    this.SessionDialog = false;
  }
  
}
