import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  name = '';
  email = '';
  job = '';
  address = '';
  selectedSource = 'email';
  selectedGender = 'male';
  isCompany = false;
  createdAt = new FormControl(new Date());

  constructor() { }
  public createCustomer() {
  }


  ngOnInit() {
  }

}
