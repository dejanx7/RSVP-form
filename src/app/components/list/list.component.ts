import { Component, Input } from '@angular/core';
import { Rsvp } from 'src/app/rsvp';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input() rsvpList: any[] = [];


  removeRsvp(rsvp : Rsvp){

    let index = this.rsvpList.indexOf(rsvp);
    console.log("item to remove" + this.rsvpList.at(index));
    this.rsvpList.splice(index, 1);
  }

    
}


