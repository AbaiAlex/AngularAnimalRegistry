import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cat-menu',
  templateUrl: './cat-menu.component.html',
  styleUrls: ['./cat-menu.component.css']
})
export class CatMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('cats/list').then();
  }

}
