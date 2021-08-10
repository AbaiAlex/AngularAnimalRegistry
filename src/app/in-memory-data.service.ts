import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb(){
    const dogs: Dog[] = [
      // tslint:disable-next-line:max-line-length
      { id: 11, name: 'Kajla' , gender: 'female' , type: 'Terrier', dateOfBirth: '2020-1-12', purebred: true, toys: [{toy: 'Rubber bone'}, {toy: 'Rubber duck'}]},
      { id: 12, name: 'Blöki' , gender: 'male (neutered)' , type: 'Bulldog', dateOfBirth: '2020-02-01' , purebred: true} ,
      { id: 13, name: 'Cézár' , gender: 'male' , type: 'Malamute', dateOfBirth: '2019-06-22' , purebred: false},
      { id: 14, name: 'Áfonya' , gender: 'female' , type: 'Shepherd', dateOfBirth: '2020-11-20', purebred: true},
      { id: 15, name: 'Ádáz' , gender: 'male' , type: 'Pitbull', dateOfBirth: '2018-03-16', purebred: true},
      { id: 16, name: 'Bátor' , gender: 'male (neutered)' , type: 'Husky', purebred: false},
      { id: 17, name: 'Bodri' , gender: 'female' , type: 'Terrier', dateOfBirth: '2020-01-12', purebred: true},
      { id: 18, name: 'Max' , gender: 'male' , type: 'Bulldog', purebred: true},
      { id: 19, name: 'Pamacs' , gender: 'female' , type: 'Terrier', purebred: false},
      { id: 20, name: 'Beethoven' , gender: 'male (neutered)' , type: 'Shepherd', purebred: false}
    ];
    return {dogs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(dogs: Dog[]): number {
    return dogs.length > 0 ? Math.max(...dogs.map(dog => dog.id)) + 1 : 11;
  }
}
