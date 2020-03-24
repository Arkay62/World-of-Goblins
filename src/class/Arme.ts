export default class Arme {
    private _degatsMin: number;
    private _degatsMax: number;
    private _criticalChance: number;

    constructor() {
        this._degatsMin = Math.floor(Math.random() * 10) + 1;
        this._degatsMax = Math.floor(Math.random() * 10) + 11;
        this._criticalChance = Math.floor(Math.random() * 20) + 1;   
    }
    get degatsMin(){
        return this._degatsMin;
    }
    set degatsMin(min: number){
        this._degatsMin = min;
    }

    get degatsMax(){
        return this._degatsMax;
    }
    
    set degatsMax(max: number){
        this._degatsMax = max;
    }

    get criticalChance(){
        return this._criticalChance;
    }
    set criticalChance(cc: number){
        this._criticalChance = cc;
    }

    getDelta(): number {
        return this.degatsMax - this.degatsMin;
    }

    afficherStats() : string {
        let answer: string = `Voici les stats de cette arme :
        > Dégâts minimums : ${this.degatsMin}
        > Dégâts maximums : ${this.degatsMax}
        > Chance de coup critiques : ${this.criticalChance}`;
        return answer;
    }
    
}
