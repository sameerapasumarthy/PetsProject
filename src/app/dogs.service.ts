import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDog } from './Dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private url:string="https://dog.ceo/api/breeds/image/random"
  constructor(private http:HttpClient) { }

  getDog():Observable<IDog>
  {
      return this.http.get<IDog>(this.url);
  }

}
