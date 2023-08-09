import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Rsvp } from 'src/app/rsvp';


@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent implements OnInit {

  rsvpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Output() onFormSubmit: EventEmitter<Rsvp> = new EventEmitter();


  ngOnInit(): void {

    this.rsvpForm = this.fb.group({

      name: this.fb.control<string>('', Validators.required),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      phone: this.fb.control<string>('', Validators.required),
      attending: this.fb.control<string>('', Validators.required)

    })

    this.rsvpForm.valueChanges.subscribe(console.log);

  }


  addRsvp() {

    console.log("form values are " + this.rsvpForm.value);
    this.onFormSubmit.emit(this.rsvpForm.value);

  }

}



