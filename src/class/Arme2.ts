import Arme from './Arme';
export default class Arme2 extends Arme {
    //Cette classe augmente les dégâts max
    private _boost = 0.10;
    constructor() {
        super();
        this.degatsMax = this.degatsMax + (this.degatsMax * this._boost) ;
    }
}