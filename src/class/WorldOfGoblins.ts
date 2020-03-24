import { WorldOfGoblinsService } from '../services/WorldOfGoblins.service';
const chalk = require('chalk');

export class WorldOfGoblins {
    private wogService: WorldOfGoblinsService;
    constructor() {
        this.wogService = new WorldOfGoblinsService();
    }

    start(): void {
        
        console.log(chalk.green.bgRed.bold('World Of Goblins'));
        this.wogService.start();
        //console.log(this.wogService);
        //this.wogService.start();
    }
}