import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Dog } from '../dog';
import {DogService} from '../dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {
 // dogs: Dog[] = [];
  constructor(private dogService: DogService) {  }
  @Output()
  onClose = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.getDogs();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dogService.addDog({ name } as Dog)
      .subscribe(() => this.closeCreate());
  }

  getDogs(): void {
    this.dogService.getDogs()
      .subscribe();
  }

  closeCreate(): void {
    this.onClose.emit(true);
  }
}
