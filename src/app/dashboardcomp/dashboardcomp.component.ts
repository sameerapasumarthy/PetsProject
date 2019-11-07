import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../Dog';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { pushToFavourites } from '../store/dog.action';

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
  @Select(DogState.getDogs) dogs$: Observable<IDog[]>;

  constructor(private dogserviceinstance:DogsService,private store:Store) { }

  ngOnInit() {
  for(let i=1;i<=10;i++)
    {
      this.dogserviceinstance.getDog();
    }
  }
  addToFavourites(dog:IDog)
  {
      this.store.dispatch(new pushToFavourites(dog));
  }
}


