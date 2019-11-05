import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { IDog } from '../Dog';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.css']
})
export class DashboardcompComponent implements OnInit {
  dog:IDog;
  dogs:IDog[]=[];
  breed:string="golden retriever";
  name:string="name";
  desc:string="description";
  constructor(private dogserviceinstance:DogsService) { }

  ngOnInit() {
  for(let i=1;i<=10;i++)
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


