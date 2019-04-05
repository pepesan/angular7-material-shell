import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  items = [];
  constructor() {
    this.items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);
  }

  ngOnInit() {
  }

}
