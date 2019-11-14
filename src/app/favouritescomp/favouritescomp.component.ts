import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { IDog } from '../Dog';
import { FavouritesService } from '../favourites.service';
import { RemoveFromFavourite, FavouriteDogs, editFavItem } from '../store/dog.action';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { SohoModalDialogService } from 'ids-enterprise-ng';

@Component({
  selector: 'app-favouritescomp',
  templateUrl: './favouritescomp.component.html',
  styleUrls: ['./favouritescomp.component.css']
})
export class FavouritescompComponent implements OnInit {
  

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

  constructor(public favouriteserviceinstance: FavouritesService, private store: Store,private modalService:SohoModalDialogService) { }

  favdogs: IDog[];
  dogcopy:IDog

  @Select(DogState.getFavouriteDogs) favouritedogs$: Observable<IDog[]>;

  ngOnInit() {

    //this.favdogs=JSON.parse(localStorage.getItem("favouritedogs"));
    //this.favouriteserviceinstance.getFavouriteDogs()
    this.favdogs = JSON.parse(localStorage.getItem("favouritedogs"))
    var obj = {}; //create the empty output object
    //this.favdogs.forEach( function(item){ 
    //var key = Object.keys(item)[1]; //take the first key from every object in the array
    //console.log(key)
    //obj[ key ] = item  //assign the key and value to output obj
    //});
    for (let i = 0; i < this.favdogs.length; i++) {
      var key = Object.keys(this.favdogs[i])[0];

      obj[this.favdogs[i][key]] = this.favdogs[i]

    }
    console.log(obj);
    this.store.dispatch(new FavouriteDogs(obj))

  }

  removeFromFavourites(dog: IDog) {
    this.favdogs = JSON.parse(localStorage.getItem("favouritedogs"))
    for (let i = 0; i < this.favdogs.length; i++) {
      if (this.favdogs[i].message === dog.message) {
        let pos = i;
        while (pos < this.favdogs.length) {
          this.favdogs[pos] = this.favdogs[pos + 1]
          pos++;
        }
        this.favdogs.length = this.favdogs.length - 1;
      }
    }
    localStorage.setItem("favouritedogs", JSON.stringify(this.favdogs))
    this.favdogs = JSON.parse(localStorage.getItem("favouritedogs"))
    console.log(this.favdogs)
    this.store.dispatch(new RemoveFromFavourite(dog))
  }

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
       this.favdogs=JSON.parse(localStorage.getItem("favouritedogs"))
       for(let i=0;i<this.favdogs.length;i++)
       {
        if(this.favdogs[i].message==this.dogcopy.message){
          
          this.favdogs[i].name=this.dogcopy.name;
          this.favdogs[i].breed=this.dogcopy.breed;
          this.favdogs[i].desc=this.dogcopy.desc;
          
          localStorage.setItem("favouritedogs",JSON.stringify(this.favdogs));
        }
       }
        this.store.dispatch(new editFavItem(this.dogcopy))
        this.closeResult = result;
      });
  }
 

}
