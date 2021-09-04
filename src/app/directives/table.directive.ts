import {Directive, Input, OnInit} from '@angular/core';

interface TableColumn{
  header: string;
  ColumnName: string;
}

@Directive({
  selector: '[appTable]'
})
export class TableDirective implements OnInit{
@Input()
tableColumns: TableColumn[];

  public displayedColumns: string[];
  constructor() { }

  ngOnInit(): void {

    }


  /*defaultColumns: TableColumn[] = [{
    header: 'ID',
    ColumnName: 'id'
  }, {
    header: 'Name',
    ColumnName: 'name'
  }];
*/
}
