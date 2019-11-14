import { Component, OnInit, HostBinding } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Store } from '@ngxs/store';
import { EmptyStore } from '../store/dog.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dogserviceinstance: DogsService, private store: Store) { }
  ngOnInit() {
  }
  @HostBinding('class.header') get isHeader() { return true; }
  @HostBinding('class.is-personalizable') get isPersonalizable() { return true; }

  loadDogs()
  {
    this.store.dispatch(new EmptyStore())
    for (let i = 1; i <= 5; i++) {
      this.dogserviceinstance.getDog();
    }
  }
}
