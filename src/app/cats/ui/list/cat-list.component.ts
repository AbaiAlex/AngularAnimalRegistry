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
  constructor(private router: Router, private catsFacade: CatsFacade) { }

  ngOnInit(): void {
    this.catsFacade.loadList();
  }

  editRow(item: any): void{
    this.router.navigateByUrl('cats/editedData/' + item.id).then();
  }
}
