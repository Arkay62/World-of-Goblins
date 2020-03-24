import Hero from '../class/Hero';
import Monstre from '../class/Monstre';
import Arme from '../class/Arme';
import Arme1 from '../class/Arme1';
import Arme2 from '../class/Arme2';
var inquirer = require('inquirer');
export class WorldOfGoblinsService {

   constructor () {
   }

   private heroes: Array<Hero> = new Array<Hero>();            //Liste contenant les héros
   private monsters: Array<Monstre> = new Array<Monstre>();    //Liste contenant les monstres
   private questions: any = "";
   initQuestions(): void {
      this.questions = [
         {
            type: 'input',
            name: 'name',
            message: 'Nom du héros ?',
            default: 'Michel'
         },
         {
            type: 'rawlist',
            name: 'weapon',
            message: 'Choisissez une arme',
            choices: ['Massue', 'Epee']
         },
         {
            type: 'expand',
            name: 'option',
            message: 'Voulez-vous créer un héros supplémentaire ?',
            choices: [
               {
               key: 'O',
               name: 'Oui',
               value: 'yes'
               },
               {
               key: 'N',
               name: 'Non',
               value: 'no'
               }
            ]
         }
         ];
   };

   inquire(): void {
      inquirer.prompt(this.questions).then((answers:any) => {
         this.addToArray(answers.name, answers.weapon);
         if (this.heroes.length < 4 && answers.option == "yes") {
            this.inquire();
         } else {
            console.log("Création des monstres");
            let nbMonstre: any = Math.floor(Math.random() * 4) + 1;
            //let nbMonstre: any = 1;
            //console.log(nbMonstre);
            for (let i = 0; i < nbMonstre; i++) {
               this.monsters.push(new Monstre());
            }
            //console.log(this.heroes);
            //console.log(this.monsters);
            let nbTour = 1;
            while (!this.allHeroesDead() && !this.allMonstersDead()) {
               //this.monsters[0].nbPv = 0;
               console.log(`Tour ${nbTour}`);
               // On fait attaquer tous les personnages d'un seul camp, puis de l'autre.
               // On va utiliser la propriété "targeted" pour savoir si quelqu'un est déjà ciblé. (utilisation du filter maggle)
               // Si infériorité numérique, on cible le premier de la liste (donc en 3 vs 2 par exemple, on tape sur le premier qui passe).
               if (Math.random() > 0.5) {
                  this.heroesAttack();
                  this.monstersAttack();
                  //this.heroes[0].cibler(this.monsters[0]);
                  //this.monsters[0].cibler(this.heroes[0]);   
               } else {
                  this.monstersAttack();
                  this.heroesAttack();
                  //this.monsters[0].cibler(this.heroes[0]);
                  //this.heroes[0].cibler(this.monsters[0]);
               }
               this.clearTargetedProperties();
               nbTour += 1;
            }

         }
      });
   }

   heroesAttack(): void {
      console.log("--------------TOUR HERO------------------")
      this.heroes.forEach((hero: any) => hero.cibler(this.determineCibleHero()));
   }

   monstersAttack(): void {
      console.log("--------------TOUR VILAIN PAS BEAU------------------")
      this.monsters.forEach((monster: any) => monster.cibler(this.determineCibleMonstre()));
   }

   clearTargetedProperties(): void {
      this.heroes.forEach((hero: any) => hero.targeted = false);
      this.monsters.forEach((monster: any) => monster.targeted = false);
   }

   determineCibleHero(): Monstre {
      let temp = this.allMonstersNotTargeted();
      if (temp.length == 0) {
         return this.monsters[0];
      } else {
         return temp[Math.floor(Math.random() * temp.length)];
      }
   }

   determineCibleMonstre(): Hero {
      let temp = this.allHeroesNotTargeted();
      if (temp.length == 0) {
         return this.heroes[0];
      } else {
         return temp[Math.floor(Math.random() * temp.length)];
      }
   }

   allHeroesNotTargeted(): Array<Hero> {
      return this.heroes.filter((hero: any) => hero.targeted == false);
   }

   allMonstersNotTargeted(): Array<Monstre> {
      return this.monsters.filter((monster: any) => monster.targeted == false);
   }

   allHeroesDead(): boolean {
      //console.log(this.heroes);
      //console.log("FILTRE HEROES");
     let temp =  this.heroes.filter((hero: any) => hero.nbPv == 0);
     temp.forEach((hero: any) => console.log(`${hero.name} é maure ssessoar, ce puant.`));
     /*if (temp.length ==1) {
        console.log(`${temp[0].name} é maure ssessoar, ce puant.`)
     }*/
      this.heroes = this.heroes.filter((hero: any) => hero.nbPv > 0);
      //console.log(this.heroes);
      if (this.heroes.length == 0) {   
         console.log("Tous les héros sont morts");
         return true;
      }
      //console.log("Au moins un héros est toujours vivant."); 
      return false;            
   }

   allMonstersDead(): boolean {
      //console.log(this.monsters);
      //console.log("FILTRE MONSTERS");
      let temp = this.monsters.filter((monster: any) => monster.nbPv == 0);
      temp.forEach((monster: any) => console.log(`${monster.name} est mort.`));
      /*if (temp.length == 1) {
         console.log(`${temp[0].name} est mort.`);
      }*/
      this.monsters = this.monsters.filter((monster: any) => monster.nbPv > 0);
      //console.log(this.monsters);
      if (this.monsters.length == 0) {
         console.log("Tous les monstres sont morts");
         return true;
      }
      //console.log("Au moins un monstre est toujours vivant.");
      return false;
   }

   addToArray(name: string, arme: string): void {
    if (arme == "Massue") {
      this.heroes.push(new Hero(name, new Arme1()));
    } else if (arme == "Epee") {
      this.heroes.push(new Hero(name, new Arme2()));
    } else {
      console.log("Kesse ?");
    }
   }

   start(): void {
      this.initQuestions();
      this.inquire();
   }
}