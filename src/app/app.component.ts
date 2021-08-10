import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal Registry';
  close = true;
  changeingStyle = 'startStyle';

  constructor(public router: Router) {

  }
changeStyle(position: string): void{
  if (position === 'center'){
    this.changeingStyle = 'startStyle';
  }else{
    this.changeingStyle = 'afterStartStyle';
  }
}
  changeTitle(animal: string): void{
    if (animal === 'dogs'){
      this.title = 'Dog Registry';
    }
    else if (animal === 'cats'){
      this.title = 'Cat Registry';
    }
    else{
      this.title = 'Animal Registry';
    }
    this.close = false;
  }

  closeRegistry(): void{
    this.close = false;
  }

}
