import Arme from './Arme';
export default class Arme1 extends Arme {
    //Cette classe augmente les chances de coups critiques
    private _boost: number = 0.20;
    constructor() {
        super();
        this.criticalChance = this.criticalChance + (this.criticalChance * this._boost) ;

    }        
}