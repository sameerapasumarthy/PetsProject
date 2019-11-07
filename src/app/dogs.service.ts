import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDog } from './Dog';
import { Store } from '@ngxs/store';
import { pushdog } from './store/dog.action';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private url:string="https://dog.ceo/api/breeds/image/random"

  dog:IDog;
  //dogs:IDog[]=[];
  breed:string="Breed";
  name:string="name";
  desc:string="description";
  constructor(private http:HttpClient, private store:Store) { }

  getDog()
  {
      this.http.get<IDog>(this.url).subscribe(dog=> {
                                                      this.dog=dog;
                                                      this.dog.breed=this.breed;
                                                      this.dog.name=this.name;
                                                      this.dog.desc=this.desc;
                                                      this.store.dispatch(new pushdog(dog))})
    }
}
