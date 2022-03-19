import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juroscompostos',
  templateUrl: './juroscompostos.component.html',
  styleUrls: ['./juroscompostos.component.css']
})
export class JuroscompostosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() {
    this.vp = 0;
    this.j = 0;
    this.n = 0;
  }

  ngOnInit() {
  }

  getJurosCompostos(){
    return this.vp * (1 + this.j/100 * this.n);
  }
}

