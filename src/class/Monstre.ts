import Personnage from './Personnage';
import Arme from './Arme';

export default class Monstre extends Personnage {

    constructor(arme: Arme){
        super("", arme);
        this.name = this.createName();
    }

    createName(): string {
        let name: string = "";
        let nbLettres = Math.floor(Math.random() * 10) + 3;

        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < nbLettres; i++) {
            //On prend un nombre au hasard pour choisir une lettre de l'alphabet.
            let n = Math.floor(Math.random() * 26);
            //Expression ternaire : Si i === 0, on mets en majuscule, sinon on laisse tel quel.
            name += i === 0 ? alphabet[n].toUpperCase() : alphabet[n];
        }
        return name;
        
    }

}