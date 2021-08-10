import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CatsFacade} from '../../store/cats.facade';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  listData = this.catsFacade.listData;
  selectedId: number;
  constructor(private router: Router, private catsFacade: CatsFacade) { }

  ngOnInit(): void {
    this.catsFacade.loadList();
  }

  editRow(id: number): void{
    this.selectedId = id;
    // this.router.navigateByUrl('cats/editedData/' + id).then();
    console.log(id);
  }


}
