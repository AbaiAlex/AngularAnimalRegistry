import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {CatsFacade} from '../../store/cats.facade';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {CatVO} from '../../store/cats.interfaces';


@Component({
  selector: 'app-cat-edited-data',
  templateUrl: './cat-edited-data.component.html',
  styleUrls: ['./cat-edited-data.component.css']
})
export class CatEditedDataComponent implements OnInit, OnChanges{
  cat: CatVO;
  editData = this.catsFacade.editData;
  selectedCat: any;
  @Input()
  public selectedId: number;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  constructor( private catsFacade: CatsFacade) { }

  ngOnInit(): void {
    this.getCat();
    console.log(this.cat.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedId' in changes) {
      console.log(this.selectedId);
      this.getCat();
    }
  }
  getCat(): void{
    this.catsFacade.loadData(this.selectedId);
    this.editData.subscribe(cat => {
      this.cat = cat;
    });
  }

  onSelect(cat): void {
    this.selectedCat = cat;
  }

  save(): void{
      this.editData.subscribe(() => this.closeDetails());
      /*this.dogService.updateDog(this.form.value as Dog)
        .subscribe(() => this.closeDetails() );*/
  }

  closeDetails(): void{
    this.onClose.emit(true);
  }
}
