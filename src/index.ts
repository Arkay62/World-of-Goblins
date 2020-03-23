import Hero from './class/Hero';
import Arme from './class/Arme';
import Arme1 from './class/Arme1';
import Arme2 from './class/Arme2';
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'WoG> '
});
//console.log(process);
let self: any = process;
let phase: number = 0;                                              //Phase de l'application à laquelle on est arrivé.
let numeroHero: number = 0;                                         //Numéro du héros auquel on est arrivé.
let heroesNames: Array<string> = new Array<string>();               //Liste des noms des héros
let heroes: Array<Hero> = new Array<Hero>();                        //Liste contenant les héros
                                                   
console.log("Saisissez le nom des héros qui vont entrer dans l'arène (laissez un message blanc pour valider votre sélection) :");                   //On envoie le premier message
rl.prompt();                                                        // On affiche WoG MAIS vu qu'il n'y a pas de message derrière, cela veut dire que l'on passe la main à l'utilisateur.

rl.on('line', (line) => {                                           // On va écouter les retours utilisateurs (on('line') est l'évènement "Lorsque je reçois une ligne...")
  switch (line.trim()) {                                            //On passe line dans un switch (trim est une fonction générale qui permet de "nettoyer" la valeur des espaces blancs finaux)
    case '':                                                        //Si la réponse de l'utilisateur est vide
      switchCaseFinishPhase();
      break;
    default:                                                        //Comportement par défaut, on enregistre le nom donné pour un nouveau héros
      switchCaseWorkingPhase(line.trim());
      break;
  }

  controlePhases();

  rl.prompt();
}).on('close', () => {
  console.log(heroes);
  process.exit(0);
});

function addToNamesArray(name: string) {
    heroesNames.push(name);
}

function addToArray(name: string, arme: Arme) {
    heroes.push(new Hero(name, arme))
}

function switchCaseWorkingPhase(value: string) {
    if (phase == 0) {
        console.log(`Votre héros va s'appeler "${value}"`);   // On donne l'information à l'utilisateur
        addToNamesArray(value);
      } else if (phase == 1) {
          if (value == "massue") {
            addToArray(heroesNames[numeroHero], new Arme1());
            numeroHero += 1;
          } else if (value == "épée") {
            addToArray(heroesNames[numeroHero], new Arme2());
            numeroHero += 1;
          } else {
            console.log(`Je n'ai pas compris quelle arme vous vouliez donner à ${heroesNames[numeroHero]}`);
          }
          if (numeroHero == heroesNames.length) {
              //STOP PASSAGE PHASE 2
              console.log("Coucoumaggle");
              rl.write("");
          }
      }
}

function switchCaseFinishPhase() {
    if (phase == 0) {                                             //En phase 0, on a fini de déterminer les noms des héros.
        phase = 1;
      } else if (phase == 1) {                                      //En phase 1, on a fini d'armer les héros.
        console.log("Les héros sont armés et prêts à combattre !");
        phase = 2;

      } else if (phase == 2) {                                      //Si on est en phase 2, alors on ferme le flux (il faudra ajouter des étapes supplémentaires pour laisser place au combat)
         rl.close();                                                // On ferme le flux readLine.

         //Faire en sorte que la phase 2 soit une phase 3, et la nouvelle phase 2 accueillera la création des monstres.
      }
}

function controlePhases() {
    if (phase == 0) {
        if (heroesNames.length != 4) {
            let nbRestant = 4 - heroesNames.length;
            console.log(`Saisissez le nom du héros suivant (${nbRestant} restants)`);
        } else {
            phase = 1;
        }
    }
    if (phase == 1) {
      if (heroesNames.length != numeroHero) {
        console.log(`${heroesNames[numeroHero]} portera une massue ou une épée ?`);
      }
  }
}

/*import Arme from './class/Arme';
import Arme1 from './class/Arme1';
import Arme2 from './class/Arme2';
import Personnage from './class/Personnage';
import Monstre from './class/Monstre';*/

/*let arme = new Arme();
console.log(arme.afficherStats());
let arme1 = new Arme1();
console.log(arme1.afficherStats());
let arme2 = new Arme2();
console.log(arme2.afficherStats());

let perso = new Personnage("Bob", arme);
console.log(perso.afficherStats());

let hero = new Hero("Michel", arme1);
console.log(hero.afficherStats());

let monstre = new Monstre(arme2);
console.log(monstre.afficherStats());*/