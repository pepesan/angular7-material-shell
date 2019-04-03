import { Component, OnInit } from '@angular/core';
import {FormModel} from './form-model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  modelo: FormModel;
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.modelo = new FormModel('');
  }

  ngOnInit() {
  }
  save() {
    // TODO: LLamar al API REST para guardar el dato
    console.log(this.modelo);
    // Volver al listado o al Detalle
    this.router.navigate(['/listado']);
  }

}
