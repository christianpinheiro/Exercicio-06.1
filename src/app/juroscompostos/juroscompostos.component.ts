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
  vj: number;

  constructor() {
    this.vp = 0;
    this.j = 0;
    this.n = 0;
    this.vj = 0;
  }

  ngOnInit() {
  }

  getJurosCompostos(){
    return this.vj  = this.vp * (1 + this.j/100 * this.n);
  }

  getJurosList() {
    let list: number[] = [];

    for (let i = 1; i<= this.n; i++) list.push(this.getJurosCompostos());
    
    return list;
  }
}

