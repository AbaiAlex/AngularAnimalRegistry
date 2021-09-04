import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FishVO} from '../../store/fishs.interfaces';
import {FishsFacade} from '../../store/fishs.facade';

@Component({
  selector: 'app-fish-edited-data',
  templateUrl: './fish-edited-data.component.html',
  styleUrls: ['./fish-edited-data.component.css']
})
export class FishEditedDataComponent implements OnInit, OnChanges {

  fish: FishVO;
  editData = this.fishsFacade.editData;
  selectedFish: any;
  @Input()
  public selectedId: number;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  constructor( private fishsFacade: FishsFacade) { }

  ngOnInit(): void {
    this.getFish();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedId' in changes) {
      console.log(this.selectedId);
      this.getFish();
    }
  }
  getFish(): void{
    this.fishsFacade.loadData(this.selectedId);
    this.editData.subscribe(fish => {
      this.fish = fish;
    });
  }

  onSelect(fish): void {
    this.selectedFish = fish;
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
