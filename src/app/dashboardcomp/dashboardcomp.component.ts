import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../Dog';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { EmptyStore, PushToFavourites } from '../store/dog.action';
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
  @Select(DogState.getDogs) dogs$: Observable<IDog[]>;

  constructor(private dogserviceinstance: DogsService, private store: Store) { }

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
    localStorage.setItem("favouritedogs", JSON.stringify(this.favdogs))

    this.store.dispatch(new PushToFavourites(dog));

  }
}


