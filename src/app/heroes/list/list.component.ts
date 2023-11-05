import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman','Hulk','She Hulk','Thor','Ironman'];
  public deletedHeroe?: string ;

  removeLastHero():void {
     this.deletedHeroe = this.heroeNames.pop();
  }
}
