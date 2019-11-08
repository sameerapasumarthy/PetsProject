import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { IDog } from '../Dog';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-favouritescomp',
  templateUrl: './favouritescomp.component.html',
  styleUrls: ['./favouritescomp.component.css']
})
export class FavouritescompComponent implements OnInit {

  constructor(public favouriteserviceinstance: FavouritesService) { }

  favdogs: IDog[];

  @Select(DogState.getFavouriteDogs) favouritedogs$: Observable<IDog[]>;

  ngOnInit() {

    //this.favdogs=JSON.parse(localStorage.getItem("favouritedogs"));
    this.favouriteserviceinstance.getFavouriteDogs()

  }

}
