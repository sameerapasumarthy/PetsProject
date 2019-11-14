import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../Dog';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { EmptyStore, PushToFavourites, editItem } from '../store/dog.action';
import { Router } from '@angular/router';
import { SohoModalDialogService } from 'ids-enterprise-ng';
import { EditItemComponent } from '../edit-item/edit-item.component';
//import { pushToFavourites } from '../store/dog.action';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.css']
})
export class DashboardcompComponent implements OnInit {
  //dog:IDog;
  //dogs:IDog[]=[];
  //breed:string="golden retriever";
  //name:string="name";
  //desc:string="description";
  favdogs: IDog[] = [];
  dogcopy:IDog;
  @Select(DogState.getDogs) dogs$: Observable<IDog[]>;

  @ViewChild('dialogPlaceholder', { read: ViewContainerRef, static: true })
  placeholder: ViewContainerRef;

  public closeResult: string;

  public title = 'Example Modal Dialog';
  public isAlert = false;

  /**
   * Constructor.
   *
   * @param dialogService - the modal dialog service.
   */
  constructor(private dogserviceinstance: DogsService, private store: Store, private router:Router, private modalService: SohoModalDialogService) { }

  ngOnInit() {

    this.store.dispatch(new EmptyStore())
    for (let i = 1; i <= 5; i++) {
      this.dogserviceinstance.getDog();
    }
    if (localStorage.getItem("favouritedogs") != null) {
      this.favdogs = JSON.parse(localStorage.getItem("favouritedogs"));
    }
  }
  addToFavourites(dog: IDog) {
    //this.store.dispatch(new pushToFavourites(dog));
    this.favdogs.push(dog);
    localStorage.setItem("favouritedogs",JSON.stringify(this.favdogs))
    this.store.dispatch(new PushToFavourites(dog));
  }

  // editItem(dog:IDog)
  // {
  //   //this.router.navigate(['/home/edit', { name:dog.name,breed:dog.breed,message:dog.message,description:dog.desc }]);

  //   this.router.navigate(['/home/edit', { d:dog }]);
  // }
  openSimple(dog:IDog) {
    
    const dialogRef = this.modalService
      .modal<EditItemComponent>(EditItemComponent, this.placeholder)
      .buttons([
        {
          id: 'cancel-button',
          text: Soho.Locale.translate('Cancel'),
          click: (e, modal) => { modal.isCancelled = true; dialogRef.close('CANCEL'); }
        },
        {
          text: 'Submit', click: (e, modal) => {
            dialogRef.close('SUBMIT');
          }, isDefault: true
        }])
      .isAlert(this.isAlert)
      .apply((dialogComponent) => { dialogComponent.model.name = dog.name;
                                    dialogComponent.model.breed = dog.breed;
                                    dialogComponent.model.description = dog.desc })
      .open();


      dialogRef.afterClose((result, ref, dialogComponent) => {
        console.log(dialogComponent.model);
        this.dogcopy={...dog}
        this.dogcopy.name=dialogComponent.name;
        this.dogcopy.breed=dialogComponent.breed;
       this.dogcopy.desc=dialogComponent.description;
        this.store.dispatch(new editItem(this.dogcopy))
        this.closeResult = result;
      });
  }

}


