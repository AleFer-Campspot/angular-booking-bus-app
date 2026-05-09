import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../service/master';
import { Observable, of } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusListItem, SearchBus } from '../../types/globalTypes';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, FormsModule, DatePipe],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search implements OnInit {

  locations$: Observable<any>  = new Observable<any[]>;
  masrterSrv = inject(Master);
  busList$: Observable<Array<BusListItem>> = new Observable<Array<BusListItem>>();
  searchBus: SearchBus = {
    fromLocation: 0,
    toLocation: 0,
    travelDate: ''
  };

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locations$ = this.masrterSrv.getLocations();
  }

  searchBuses() {
    this.searchBus = {
      fromLocation: this.searchBus.fromLocation,
      toLocation: this.searchBus.toLocation,
      travelDate: this.searchBus.travelDate
    }

    this.masrterSrv.searchBuses(this.searchBus.fromLocation, this.searchBus.toLocation, this.searchBus.travelDate).subscribe((res: Array<BusListItem>) => {
      this.busList$ = of(res);
      console.log(this.busList$);
    });
  }
}
