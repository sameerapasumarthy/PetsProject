import { Injectable } from '@angular/core';
import { IDog } from './Dog';
import { Store } from '@ngxs/store';
import { PushToFavourites, EmptyFavourites } from './store/dog.action';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favdogs: IDog[] = []
  constructor(private store: Store) { }

  getFavouriteDogs() {
    if (localStorage.getItem("favouritedogs") != null) {
      this.favdogs = JSON.parse(localStorage.getItem("favouritedogs"))
      this.store.dispatch(new EmptyFavourites())
      this.favdogs.forEach(val => {
        this.store.dispatch(new PushToFavourites(val));
      });


    }
  }

}
