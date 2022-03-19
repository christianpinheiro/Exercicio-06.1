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

  getVp(){
    return this.vp;
  }

  getJ(){
    return this.j;
  }

  getN(){
    return this.n;
  }

  getJurosCompostos(vp, j, n){
    return this.vp * Math.pow((1 + (j / 100)),n);
  }

  getJurosList() {
    let list: number[] = [];

    for (let i = 1; i<= this.n; i++) list.push(this.getN());
    
    return list;
  }
  ngOnInit() {}
}

