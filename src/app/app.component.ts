import { Component } from '@angular/core';
import { Rsvp } from './rsvp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csfForm';

  rsvpList : Rsvp[] = [];

  receiveFormInput(event: Rsvp){

    console.log("received event " + event);
    this.rsvpList.push(event);
  }
}
