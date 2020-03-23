import Arme from './Arme';
export default class Personnage {
    private _name: string;
    private _nbPv: number;
    private _nbPvMax: number;
    private _defense: number;
    private _arme: Arme;

    constructor(name: string, arme: Arme) {
        this._name = name;
        this._nbPv = Math.floor(Math.random() * 50) + 50;
        this._nbPvMax = this._nbPv;
        this._defense = Math.floor(Math.random() * 20) + 1;
        this._arme = arme;
    }
    
    //getters et les setters.
    //Name Get/set
    get name(){
        return this._name;
    }
    set name(value: string){
        this._name = value;
    }

//nbPv Get/set
    get nbPv(){
        return this._nbPv;
    }
    set nbPv(value: number){
        this._nbPv = value;
    }
//nbPvMax get/set
    get nbPvMax(){
        return this._nbPvMax;
    }
    set nbPvMax(value: number){
        this._nbPvMax = value;
    }
//defense get/set
    get defense(){
        return this._defense;
    }
    set defense(value: number){
        this._defense = value;
    }
//arme get/set
    get arme(){
        return this._arme;
    }
    set arme(value: Arme){
        this._arme = value;
    }

    attaquer() {
        //Toucher aux stats de la cible
        //this._cible......
    }

    /*cibler(value:Personnage) {
        this._cible = value;
    }*/

    afficherStats() : string {
        let answer: string = `Voici les stats de ce personnage :
        > Nom : ${this.name}
        > PV actuels : ${this.nbPv}
        > PV maximum : ${this.nbPvMax}
        > Défense : ${this.defense}
        > Arme : ${this.arme.afficherStats()}`;
        return answer;
    }
}