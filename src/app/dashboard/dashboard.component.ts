import {Component, OnInit, SimpleChanges, OnChanges, Input, DoCheck} from '@angular/core';
import { Dog} from '../dog';
import { DogService} from '../dog.service';
import {AppFacade} from '../store/app.facades';
import {isNumber} from 'chart.js/helpers';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],

})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = [];
  selectedId: number;
  createNewDog = false;
  selectedIdFromDogDetail: number;
  loading = false;
  resetChanges = false;
  changesCounterObservable = this.appFacade.changesCounterObservable;
  changes: number;
  constructor(private dogService: DogService,
              private appFacade: AppFacade) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs()
      .subscribe(dogs => this.dogs = dogs);
  }

  showDog(id: number): void{
    console.log(id);
    this.selectedId = id;
  }

  saveId($event: Dog): void{
    console.log('A kiválasztott és betöltött kutya éppen most: ' + $event.name);
    this.selectedIdFromDogDetail = $event.id;
  }

  delete(dog: Dog): void {
    this.dogs = this.dogs.filter(h => h !== dog);
    this.dogService.deleteDog(dog.id).subscribe(() => this.refreshData());
  }

  closeCreateWindow($event): void{
    if ($event){
      this.createNewDog = false;
      this.refreshData();
    }else{
      this.createNewDog = true;
    }
  }
  closeDetailsWindow($event): void {
    if ($event) {
      this.selectedId = 0;
    }
    this.refreshData();
  }
  refreshData(): void{
    this.getDogs();
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
    console.log('Data refreshed');
  }
  // tslint:disable-next-line:typedef
  showInfo() {
    this.changesCounterObservable.subscribe(value => this.changes = value);
    console.log(this.changes + ' detail change(s) happened');
  }
  resetCounter(): void{
    this.appFacade.resetChangesCounter();
    this.resetChanges = true;
    setTimeout(() => this.resetChanges = false, 1000);
  }

}
