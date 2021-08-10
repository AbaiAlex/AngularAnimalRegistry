import {Component, OnInit, Input, OnChanges, Output, SimpleChanges, EventEmitter, OnDestroy} from '@angular/core';
import {Dog, DogToys} from '../dog';
import { ActivatedRoute } from '@angular/router';
import { DogService} from '../dog.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import {AppFacade} from '../store/app.facades';


@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit , OnChanges, OnDestroy {
  // dog?: Dog;
  @Input()
  public selectedId: number;
  @Output()
  public selectedDogLoadedEmitter = new EventEmitter<Dog>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();
  form: FormGroup;
  toyFormArray: FormArray;
  private toyId: number;
  constructor(
    private route: ActivatedRoute,
     // private dogService: DogService,
    public appFacade: AppFacade,
    private formBuilder: FormBuilder
) { }

  reactiveFormBiulder(): void{
    this.toyFormArray = this.formBuilder.array([]);
    this.form = this.formBuilder.group({
      id: [null, RxwebValidators.digit()],
      name: [null, RxwebValidators.required()],
      gender: [null, RxwebValidators.oneOf({matchValues: ['male', 'female', 'male (neutered)']})],
      type: [null, RxwebValidators.choice({minLength: 3})],
      dateOfBirth: [],
      purebred: [],
      toys: this.toyFormArray
    });
  }

  ngOnInit(): void {
    this.reactiveFormBiulder();
    if (!this.selectedId) {
      this.getDog();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedId' in changes) {
      this.reactiveFormBiulder();
      this.getDog();
    }
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.appFacade.resetLastEditedDog();
  }

  getDog(): void {

    let id;
    if (this.selectedId) {
      id = this.selectedId;
    } else {
      id = +this.route.snapshot.paramMap.get('id');
    }
    this.appFacade.loadDogByID(id);
    this.appFacade.selectEditedDogObservable.subscribe(dog => {
      this.toyFormArray.clear();
      this.form.reset();
      dog.toys?.forEach( value => {
        this.toyFormArray.push(this.getToysFormGroup(value));
      });
      this.form.patchValue(dog);
      this.selectedDogLoadedEmitter.emit(this.form.value);
    });
    /*this.dogService.getDog(id)
      .subscribe(dog => {
        dog.toys?.forEach( value => {
          this.toyFormArray.push(this.getToysFormGroup(value));
        });
        this.form.patchValue(dog);
        this.selectedDogLoadedEmitter.emit(this.form.value);
      });
*/
  }

  save(): void {
    if (this.form.value) {
      /*this.dogService.updateDog(this.form.value as Dog)
        .subscribe(() => this.closeDetails() );*/
    }
  }
  closeDetails(): void{
    this.onClose.emit(true);
  }

  private getToysFormGroup(toyData: DogToys): FormGroup {
    return this.formBuilder.group({
      toy: [toyData.toy]
      });
  }
  /*getDogs(): void {
    this.dogService.getDogs()
      .subscribe();
  }*/
  newToy(value: string): void{
    this.toyId = this.toyFormArray.length;
    this.toyFormArray.push(this.getToysFormGroup({toy: value}));
    // this.getDogs();
    this.appFacade.selectEditedDogObservable.subscribe();
  }
  removeToy(index: number): void {
    this.toyFormArray.removeAt(index);
  }
}
