import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FishsFacade} from '../../store/fishs.facade';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {

  listData = this.fishsFacade.listData;
  selectedId: number;

  constructor(private router: Router, private fishsFacade: FishsFacade) {
  }

  ngOnInit(): void {
    this.fishsFacade.loadList();
  }

  editRow(id: number): void {
    this.selectedId = id;
    console.log(id);
  }

  closeDetailsWindow($event): void {
    if ($event) {
      this.selectedId = 0;
    }
  }
}
