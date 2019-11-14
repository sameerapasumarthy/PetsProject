import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDog } from '../Dog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
     name:string
     breed:string
    // message:string
    description:string

    // dog:IDog
    ngOnInit() {

      //  this.dog=JSON .parse(this.route.snapshot.paramMap.get('d'));
        // this.breed=this.route.snapshot.paramMap.get('breed');
        // this.message=this.route.snapshot.paramMap.get('message');
        // console.log(this.name)
        // console.log(this.dog)
        // console.log(this.dog.message)
        // console.log(this.dog.name)
  
      }
  

    public model = {
      name: '',
      breed:"",
      description:""
     };
    
}