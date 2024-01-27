import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summery',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './summery.component.html',
  styleUrl: './summery.component.css'
})
export class SummeryComponent {

  private keszito:string = 'Somossy László';
  private angularURL:string ="http://angular.io/";
  private aOldal:number = -1;

  public get AOldal():number {
    return this.aOldal;
  }

  public set AOldal(v:number) {
    this.aOldal=v;
  }

  //C# - szintakszis- property
  public get Keszito():string{
    return this.keszito;
  }

  public set Keszito(v:string){
    this.keszito=v;
  }

  //readonly: csak olvasható: (nincs setter), csak lekérdezni lehet
  // java és egyéb szintakszis
  public getAngularURL():string {
    return this.angularURL;
  }

  public uzenetKuld():void{
    alert("Event binding függvény hívás :)");
  }

  public keszitoModosit():void {
    this.Keszito ="Somossy László";
  }

  public getTerulet():number {
    return this.aOldal*this.aOldal;
  }
}