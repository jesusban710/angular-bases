import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: "./hero.component.html",
    styleUrls:["./hero.component.css"]
})

export class HeroComponent {
    
    public name : string = "Iroman";
    public age : number = 45;

    get capitalizedName():string {
        return this.name.toUpperCase();
    }

    getHeroDescription():string {
        return `${ this.name } - ${ this.age }`;
    }

    setChengeHero(nombreHero: string):string{
        return this.name= nombreHero;
    }

    setChangeAge(edadHero:number):number{
        return this.age=edadHero;
    }

    resetForm():void{
        this.name='iroman';
        this.age=45;
    }

}