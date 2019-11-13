import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { IDog } from '../Dog';
import { FavouritesService } from '../favourites.service';
import { RemoveFromFavourite, FavouriteDogs } from '../store/dog.action';

@Component({
  selector: 'app-favouritescomp',
  templateUrl: './favouritescomp.component.html',
  styleUrls: ['./favouritescomp.component.css']
})
export class FavouritescompComponent implements OnInit {

  constructor(public favouriteserviceinstance: FavouritesService,private store:Store) { }

  favdogs: IDog[];

  @Select(DogState.getFavouriteDogs) favouritedogs$: Observable<IDog[]>;

  ngOnInit() {

    //this.favdogs=JSON.parse(localStorage.getItem("favouritedogs"));
    //this.favouriteserviceinstance.getFavouriteDogs()
    this.favdogs=JSON.parse(localStorage.getItem("favouritedogs"))
    var obj = {}; //create the empty output object
    //this.favdogs.forEach( function(item){ 
    //var key = Object.keys(item)[1]; //take the first key from every object in the array
    //console.log(key)
    //obj[ key ] = item  //assign the key and value to output obj
  //});
  for(let i=0;i<this.favdogs.length;i++)
  {
    var key = Object.keys(this.favdogs[i])[0];
   
    obj[ this.favdogs[i][key]] = this.favdogs[i]
    
  }
console.log( obj );
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
        this.favdogs.length=this.favdogs.length-1;
      }
    }
    localStorage.setItem("favouritedogs", JSON.stringify(this.favdogs))
    this.favdogs = JSON.parse(localStorage.getItem("favouritedogs"))
    console.log(this.favdogs)
    this.store.dispatch(new RemoveFromFavourite(dog))
  }

}
