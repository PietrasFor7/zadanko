import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator2',
  templateUrl: './kalkulator2.component.html',
  styleUrls: ['./kalkulator2.component.css']
})
export class Kalkulator2Component implements OnInit {
public zmienna!:number;
public zmienna2!:number;
public wynik!:number;
public klikniete:boolean;
  constructor() {
    this.zmienna = 0;
    this.zmienna2 = 0;
    this.wynik=0;
    this.klikniete=false;
  }

  dodaj(): void {

    this.wynik = this.zmienna + this.zmienna2;
    this.klikniete=true;
}
odejmij(): void {

  this.wynik = this.zmienna - this.zmienna2;
this.klikniete=true;
}
podziel(): void {

  this.wynik = this.zmienna / this.zmienna2;
  this.klikniete=true;
}
pomnoz(): void {

  this.wynik = this.zmienna * this.zmienna2;
  this.klikniete=true;
}
  ngOnInit(): void {
  }

}
