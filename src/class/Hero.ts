import Personnage from './Personnage';
import Arme from './Arme';
//import Role from '../enum/Role';

export default class Hero extends Personnage {
    //private _role: Role;
    constructor(name: string, arme: Arme/*, role: Role*/){
        super(name, arme);
        //this._role = role;
    }

    /*get role() {
        return this._role;
    }

    set role(role) {
        this._role = role;
    }*/

}