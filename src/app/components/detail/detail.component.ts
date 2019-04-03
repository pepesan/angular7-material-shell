import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((data) => {
      this.id = data.id;
    });
    console.log(this.id);
  }
  volver() {
    this.router.navigate(['/listado']);
  }

  ngOnInit() {
  }

}
