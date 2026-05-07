import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../service/master';
import { Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {

  locations$: Observable<any>  = new Observable<any[]>;
  masrterSrv = inject(Master);

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
  this.locations$ = this.masrterSrv.getLocations();
  }

}
