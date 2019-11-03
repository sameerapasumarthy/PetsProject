import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../Dog';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.css']
})
export class DashboardcompComponent implements OnInit {

  i:number;
  dog:IDog;
  dogs:IDog[]=[];
  breed:string="golden retriever";
  name:string="name";
  desc:string="description";
  constructor(private dogserviceinstance:DogsService) { }

  ngOnInit() {

    for(this.i=1;this.i<=10;this.i++)
    {
      this.dogserviceinstance.getDog().subscribe(data=>{
                                                      this.dog=data;
                                                      this.dog.breed=this.breed;
                                                      this.dog.name=this.name;
                                                      this.dog.desc=this.desc;
                                                      this.dogs.push(this.dog);
                                                      });
    }
  }
}


