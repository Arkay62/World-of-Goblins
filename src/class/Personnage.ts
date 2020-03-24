import Arme from './Arme';
export default class Personnage {
    private _name: string;
    private _nbPv: number;
    private _nbPvMax: number;
    private _defense: number;
    private _arme: Arme;
    private _cible: any;
    private _targeted: boolean;

    constructor(name: string, arme: Arme) {
        this._name = name;
        this._nbPv = Math.floor(Math.random() * 50) + 50;
        this._nbPvMax = this._nbPv;
        this._defense = Math.floor(Math.random() * 5) + 1;
        this._arme = arme;
        this._targeted = false;
        //this._cible = new Personnage("", new Arme());
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

//cible get/set
    get cible(){
        return this._cible;
    }
    set cible(value: Personnage){
        this._cible = value;
    }

//targeted get/set
    get targeted(){
        return this._targeted;
    }
    set targeted(value: boolean){
        this._targeted = value;
    }

    attaquer() {
        if (this.cible.nbPv != 0) {
            let degats = this.calculDegats();
            degats = degats > 0 ? degats : 0;
            this.cible.nbPv = this.cible.nbPv - degats;
            if (this.cible.nbPv < 0) {
                this.cible.nbPv = 0;
            }
            console.log(`${this.name} attaque ${this.cible.name} et fait ${degats} dégâts. Il reste ${this.cible.nbPv} PV à ${this.cible.name}.`);
        }
    }

    cibler(value:Personnage) {
        if (this.nbPv > 0) {
            this.cible = value;
            this.cible.targeted = true;
            //console.log(`${this.name} cible ${this.cible.name}`);
            this.attaquer();
        }
    }

    calculDegats(): number {
        return (Math.floor(Math.random() * this.arme.getDelta()) + this.arme.degatsMin) - this.cible.defense;
    }

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