import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { IDog } from '../Dog';
import { FavouritesService } from '../favourites.service';
import { RemoveFromFavourite } from '../store/dog.action';

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
    this.favouriteserviceinstance.getFavouriteDogs()
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
