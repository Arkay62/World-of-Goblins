/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _class_Arme1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _class_Arme2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_3__);




var rl = readline__WEBPACK_IMPORTED_MODULE_3__["createInterface"]({
    input: process.stdin,
    output: process.stdout,
    prompt: 'WoG> '
});
//console.log(process);
var self = process;
var phase = 0; //Phase de l'application à laquelle on est arrivé.
var numeroHero = 0; //Numéro du héros auquel on est arrivé.
var heroesNames = new Array(); //Liste des noms des héros
var heroes = new Array(); //Liste contenant les héros
console.log("Saisissez le nom des héros qui vont entrer dans l'arène (laissez un message blanc pour valider votre sélection) :"); //On envoie le premier message
rl.prompt(); // On affiche WoG MAIS vu qu'il n'y a pas de message derrière, cela veut dire que l'on passe la main à l'utilisateur.
rl.on('line', function (line) {
    switch (line.trim()) { //On passe line dans un switch (trim est une fonction générale qui permet de "nettoyer" la valeur des espaces blancs finaux)
        case '': //Si la réponse de l'utilisateur est vide
            switchCaseFinishPhase();
            break;
        default: //Comportement par défaut, on enregistre le nom donné pour un nouveau héros
            switchCaseWorkingPhase(line.trim());
            break;
    }
    controlePhases();
    rl.prompt();
}).on('close', function () {
    console.log(heroes);
    process.exit(0);
});
function addToNamesArray(name) {
    heroesNames.push(name);
}
function addToArray(name, arme) {
    heroes.push(new _class_Hero__WEBPACK_IMPORTED_MODULE_0__["default"](name, arme));
}
function switchCaseWorkingPhase(value) {
    if (phase == 0) {
        console.log("Votre h\u00E9ros va s'appeler \"" + value + "\""); // On donne l'information à l'utilisateur
        addToNamesArray(value);
    }
    else if (phase == 1) {
        if (value == "massue") {
            addToArray(heroesNames[numeroHero], new _class_Arme1__WEBPACK_IMPORTED_MODULE_1__["default"]());
            numeroHero += 1;
        }
        else if (value == "épée") {
            addToArray(heroesNames[numeroHero], new _class_Arme2__WEBPACK_IMPORTED_MODULE_2__["default"]());
            numeroHero += 1;
        }
        else {
            console.log("Je n'ai pas compris quelle arme vous vouliez donner \u00E0 " + heroesNames[numeroHero]);
        }
        if (numeroHero == heroesNames.length) {
            //STOP PASSAGE PHASE 2
            console.log("Coucoumaggle");
            rl.write("");
        }
    }
}
function switchCaseFinishPhase() {
    if (phase == 0) { //En phase 0, on a fini de déterminer les noms des héros.
        phase = 1;
    }
    else if (phase == 1) { //En phase 1, on a fini d'armer les héros.
        console.log("Les héros sont armés et prêts à combattre !");
        phase = 2;
    }
    else if (phase == 2) { //Si on est en phase 2, alors on ferme le flux (il faudra ajouter des étapes supplémentaires pour laisser place au combat)
        rl.close(); // On ferme le flux readLine.
    }
}
function controlePhases() {
    if (phase == 0) {
        if (heroesNames.length != 4) {
            var nbRestant = 4 - heroesNames.length;
            console.log("Saisissez le nom du h\u00E9ros suivant (" + nbRestant + " restants)");
        }
        else {
            phase = 1;
        }
    }
    if (phase == 1) {
        if (heroesNames.length != numeroHero) {
            console.log(heroesNames[numeroHero] + " portera une massue ou une \u00E9p\u00E9e ?");
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//import Role from '../enum/Role';
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    //private _role: Role;
    function Hero(name, arme /*, role: Role*/) {
        return _super.call(this, name, arme) || this;
        //this._role = role;
    }
    return Hero;
}(_Personnage__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Hero);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Personnage = /** @class */ (function () {
    function Personnage(name, arme) {
        this._name = name;
        this._nbPv = Math.floor(Math.random() * 50) + 50;
        this._nbPvMax = this._nbPv;
        this._defense = Math.floor(Math.random() * 20) + 1;
        this._arme = arme;
    }
    Object.defineProperty(Personnage.prototype, "name", {
        //getters et les setters.
        //Name Get/set
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "nbPv", {
        //nbPv Get/set
        get: function () {
            return this._nbPv;
        },
        set: function (value) {
            this._nbPv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "nbPvMax", {
        //nbPvMax get/set
        get: function () {
            return this._nbPvMax;
        },
        set: function (value) {
            this._nbPvMax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "defense", {
        //defense get/set
        get: function () {
            return this._defense;
        },
        set: function (value) {
            this._defense = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "arme", {
        //arme get/set
        get: function () {
            return this._arme;
        },
        set: function (value) {
            this._arme = value;
        },
        enumerable: true,
        configurable: true
    });
    Personnage.prototype.attaquer = function () {
        //Toucher aux stats de la cible
        //this._cible......
    };
    /*cibler(value:Personnage) {
        this._cible = value;
    }*/
    Personnage.prototype.afficherStats = function () {
        var answer = "Voici les stats de ce personnage :\n        > Nom : " + this.name + "\n        > PV actuels : " + this.nbPv + "\n        > PV maximum : " + this.nbPvMax + "\n        > D\u00E9fense : " + this.defense + "\n        > Arme : " + this.arme.afficherStats();
        return answer;
    };
    return Personnage;
}());
/* harmony default export */ __webpack_exports__["default"] = (Personnage);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Arme1 = /** @class */ (function (_super) {
    __extends(Arme1, _super);
    function Arme1() {
        var _this = _super.call(this) || this;
        //Cette classe augmente les chances de coups critiques
        _this._boost = 0.20;
        _this.criticalChance = _this.criticalChance + (_this.criticalChance * _this._boost);
        return _this;
    }
    return Arme1;
}(_Arme__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Arme1);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Arme = /** @class */ (function () {
    function Arme() {
        this._degatsMin = Math.floor(Math.random() * 10) + 1;
        this._degatsMax = Math.floor(Math.random() * 10) + 11;
        this._criticalChance = Math.floor(Math.random() * 20) + 1;
    }
    Object.defineProperty(Arme.prototype, "degatsMin", {
        get: function () {
            return this._degatsMin;
        },
        set: function (min) {
            this._degatsMin = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arme.prototype, "degatsMax", {
        get: function () {
            return this._degatsMax;
        },
        set: function (max) {
            this._degatsMax = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arme.prototype, "criticalChance", {
        get: function () {
            return this._criticalChance;
        },
        set: function (cc) {
            this._criticalChance = cc;
        },
        enumerable: true,
        configurable: true
    });
    Arme.prototype.afficherStats = function () {
        var answer = "Voici les stats de cette arme :\n        > D\u00E9g\u00E2ts minimums : " + this.degatsMin + "\n        > D\u00E9g\u00E2ts maximums : " + this.degatsMax + "\n        > Chance de coup critiques : " + this.criticalChance;
        return answer;
    };
    return Arme;
}());
/* harmony default export */ __webpack_exports__["default"] = (Arme);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Arme2 = /** @class */ (function (_super) {
    __extends(Arme2, _super);
    function Arme2() {
        var _this = _super.call(this) || this;
        //Cette classe augmente les dégâts max
        _this._boost = 0.10;
        _this.degatsMax = _this.degatsMax + (_this.degatsMax * _this._boost);
        return _this;
    }
    return Arme2;
}(_Arme__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Arme2);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9IZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9QZXJzb25uYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9Bcm1lMS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvQXJtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvQXJtZTIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhZGxpbmVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFFRTtBQUNBO0FBQ0c7QUFFckMsSUFBTSxFQUFFLEdBQUcsd0RBQXdCLENBQUM7SUFDaEMsS0FBSyxFQUFF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QztBQUFELENBQUMsQ0FQa0MsNkNBQUksR0FPdEM7Ozs7Ozs7O0FDUkQscUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEhlcm8gZnJvbSAnLi9jbGFzcy9IZXJvJztcclxuaW1wb3J0IEFybWUgZnJvbSAnLi9jbGFzcy9Bcm1lJztcclxuaW1wb3J0IEFybWUxIGZyb20gJy4vY2xhc3MvQXJtZTEnO1xyXG5pbXBvcnQgQXJtZTIgZnJvbSAnLi9jbGFzcy9Bcm1lMic7XHJcbmltcG9ydCAqIGFzIHJlYWRsaW5lIGZyb20gXCJyZWFkbGluZVwiO1xyXG5cclxuY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxyXG4gICAgcHJvbXB0OiAnV29HPiAnXHJcbn0pO1xyXG4vL2NvbnNvbGUubG9nKHByb2Nlc3MpO1xyXG5sZXQgc2VsZjogYW55ID0gcHJvY2VzcztcclxubGV0IHBoYXNlOiBudW1iZXIgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1BoYXNlIGRlIGwnYXBwbGljYXRpb24gw6AgbGFxdWVsbGUgb24gZXN0IGFycml2w6kuXHJcbmxldCBudW1lcm9IZXJvOiBudW1iZXIgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9OdW3DqXJvIGR1IGjDqXJvcyBhdXF1ZWwgb24gZXN0IGFycml2w6kuXHJcbmxldCBoZXJvZXNOYW1lczogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7ICAgICAgICAgICAgICAgLy9MaXN0ZSBkZXMgbm9tcyBkZXMgaMOpcm9zXHJcbmxldCBoZXJvZXM6IEFycmF5PEhlcm8+ID0gbmV3IEFycmF5PEhlcm8+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgLy9MaXN0ZSBjb250ZW5hbnQgbGVzIGjDqXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuY29uc29sZS5sb2coXCJTYWlzaXNzZXogbGUgbm9tIGRlcyBow6lyb3MgcXVpIHZvbnQgZW50cmVyIGRhbnMgbCdhcsOobmUgKGxhaXNzZXogdW4gbWVzc2FnZSBibGFuYyBwb3VyIHZhbGlkZXIgdm90cmUgc8OpbGVjdGlvbikgOlwiKTsgICAgICAgICAgICAgICAgICAgLy9PbiBlbnZvaWUgbGUgcHJlbWllciBtZXNzYWdlXHJcbnJsLnByb21wdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gYWZmaWNoZSBXb0cgTUFJUyB2dSBxdSdpbCBuJ3kgYSBwYXMgZGUgbWVzc2FnZSBkZXJyacOocmUsIGNlbGEgdmV1dCBkaXJlIHF1ZSBsJ29uIHBhc3NlIGxhIG1haW4gw6AgbCd1dGlsaXNhdGV1ci5cclxuXHJcbnJsLm9uKCdsaW5lJywgKGxpbmUpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gdmEgw6ljb3V0ZXIgbGVzIHJldG91cnMgdXRpbGlzYXRldXJzIChvbignbGluZScpIGVzdCBsJ8OpdsOobmVtZW50IFwiTG9yc3F1ZSBqZSByZcOnb2lzIHVuZSBsaWduZS4uLlwiKVxyXG4gIHN3aXRjaCAobGluZS50cmltKCkpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vT24gcGFzc2UgbGluZSBkYW5zIHVuIHN3aXRjaCAodHJpbSBlc3QgdW5lIGZvbmN0aW9uIGfDqW7DqXJhbGUgcXVpIHBlcm1ldCBkZSBcIm5ldHRveWVyXCIgbGEgdmFsZXVyIGRlcyBlc3BhY2VzIGJsYW5jcyBmaW5hdXgpXHJcbiAgICBjYXNlICcnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TaSBsYSByw6lwb25zZSBkZSBsJ3V0aWxpc2F0ZXVyIGVzdCB2aWRlXHJcbiAgICAgIHN3aXRjaENhc2VGaW5pc2hQaGFzZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0NvbXBvcnRlbWVudCBwYXIgZMOpZmF1dCwgb24gZW5yZWdpc3RyZSBsZSBub20gZG9ubsOpIHBvdXIgdW4gbm91dmVhdSBow6lyb3NcclxuICAgICAgc3dpdGNoQ2FzZVdvcmtpbmdQaGFzZShsaW5lLnRyaW0oKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbGVQaGFzZXMoKTtcclxuXHJcbiAgcmwucHJvbXB0KCk7XHJcbn0pLm9uKCdjbG9zZScsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhoZXJvZXMpO1xyXG4gIHByb2Nlc3MuZXhpdCgwKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRUb05hbWVzQXJyYXkobmFtZTogc3RyaW5nKSB7XHJcbiAgICBoZXJvZXNOYW1lcy5wdXNoKG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0FycmF5KG5hbWU6IHN0cmluZywgYXJtZTogQXJtZSkge1xyXG4gICAgaGVyb2VzLnB1c2gobmV3IEhlcm8obmFtZSwgYXJtZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENhc2VXb3JraW5nUGhhc2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHBoYXNlID09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVm90cmUgaMOpcm9zIHZhIHMnYXBwZWxlciBcIiR7dmFsdWV9XCJgKTsgICAvLyBPbiBkb25uZSBsJ2luZm9ybWF0aW9uIMOgIGwndXRpbGlzYXRldXJcclxuICAgICAgICBhZGRUb05hbWVzQXJyYXkodmFsdWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBoYXNlID09IDEpIHtcclxuICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIm1hc3N1ZVwiKSB7XHJcbiAgICAgICAgICAgIGFkZFRvQXJyYXkoaGVyb2VzTmFtZXNbbnVtZXJvSGVyb10sIG5ldyBBcm1lMSgpKTtcclxuICAgICAgICAgICAgbnVtZXJvSGVybyArPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcIsOpcMOpZVwiKSB7XHJcbiAgICAgICAgICAgIGFkZFRvQXJyYXkoaGVyb2VzTmFtZXNbbnVtZXJvSGVyb10sIG5ldyBBcm1lMigpKTtcclxuICAgICAgICAgICAgbnVtZXJvSGVybyArPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEplIG4nYWkgcGFzIGNvbXByaXMgcXVlbGxlIGFybWUgdm91cyB2b3VsaWV6IGRvbm5lciDDoCAke2hlcm9lc05hbWVzW251bWVyb0hlcm9dfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG51bWVyb0hlcm8gPT0gaGVyb2VzTmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgLy9TVE9QIFBBU1NBR0UgUEhBU0UgMlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291Y291bWFnZ2xlXCIpO1xyXG4gICAgICAgICAgICAgIHJsLndyaXRlKFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENhc2VGaW5pc2hQaGFzZSgpIHtcclxuICAgIGlmIChwaGFzZSA9PSAwKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9FbiBwaGFzZSAwLCBvbiBhIGZpbmkgZGUgZMOpdGVybWluZXIgbGVzIG5vbXMgZGVzIGjDqXJvcy5cclxuICAgICAgICBwaGFzZSA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAocGhhc2UgPT0gMSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9FbiBwaGFzZSAxLCBvbiBhIGZpbmkgZCdhcm1lciBsZXMgaMOpcm9zLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGVzIGjDqXJvcyBzb250IGFybcOpcyBldCBwcsOqdHMgw6AgY29tYmF0dHJlICFcIik7XHJcbiAgICAgICAgcGhhc2UgPSAyO1xyXG5cclxuICAgICAgfSBlbHNlIGlmIChwaGFzZSA9PSAyKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NpIG9uIGVzdCBlbiBwaGFzZSAyLCBhbG9ycyBvbiBmZXJtZSBsZSBmbHV4IChpbCBmYXVkcmEgYWpvdXRlciBkZXMgw6l0YXBlcyBzdXBwbMOpbWVudGFpcmVzIHBvdXIgbGFpc3NlciBwbGFjZSBhdSBjb21iYXQpXHJcbiAgICAgICAgIHJsLmNsb3NlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gZmVybWUgbGUgZmx1eCByZWFkTGluZS5cclxuICAgICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250cm9sZVBoYXNlcygpIHtcclxuICAgIGlmIChwaGFzZSA9PSAwKSB7XHJcbiAgICAgICAgaWYgKGhlcm9lc05hbWVzLmxlbmd0aCAhPSA0KSB7XHJcbiAgICAgICAgICAgIGxldCBuYlJlc3RhbnQgPSA0IC0gaGVyb2VzTmFtZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2Fpc2lzc2V6IGxlIG5vbSBkdSBow6lyb3Mgc3VpdmFudCAoJHtuYlJlc3RhbnR9IHJlc3RhbnRzKWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBoYXNlID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGhhc2UgPT0gMSkge1xyXG4gICAgICBpZiAoaGVyb2VzTmFtZXMubGVuZ3RoICE9IG51bWVyb0hlcm8pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtoZXJvZXNOYW1lc1tudW1lcm9IZXJvXX0gcG9ydGVyYSB1bmUgbWFzc3VlIG91IHVuZSDDqXDDqWUgP2ApO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKmltcG9ydCBBcm1lIGZyb20gJy4vY2xhc3MvQXJtZSc7XHJcbmltcG9ydCBBcm1lMSBmcm9tICcuL2NsYXNzL0FybWUxJztcclxuaW1wb3J0IEFybWUyIGZyb20gJy4vY2xhc3MvQXJtZTInO1xyXG5pbXBvcnQgUGVyc29ubmFnZSBmcm9tICcuL2NsYXNzL1BlcnNvbm5hZ2UnO1xyXG5pbXBvcnQgTW9uc3RyZSBmcm9tICcuL2NsYXNzL01vbnN0cmUnOyovXHJcblxyXG4vKmxldCBhcm1lID0gbmV3IEFybWUoKTtcclxuY29uc29sZS5sb2coYXJtZS5hZmZpY2hlclN0YXRzKCkpO1xyXG5sZXQgYXJtZTEgPSBuZXcgQXJtZTEoKTtcclxuY29uc29sZS5sb2coYXJtZTEuYWZmaWNoZXJTdGF0cygpKTtcclxubGV0IGFybWUyID0gbmV3IEFybWUyKCk7XHJcbmNvbnNvbGUubG9nKGFybWUyLmFmZmljaGVyU3RhdHMoKSk7XHJcblxyXG5sZXQgcGVyc28gPSBuZXcgUGVyc29ubmFnZShcIkJvYlwiLCBhcm1lKTtcclxuY29uc29sZS5sb2cocGVyc28uYWZmaWNoZXJTdGF0cygpKTtcclxuXHJcbmxldCBoZXJvID0gbmV3IEhlcm8oXCJNaWNoZWxcIiwgYXJtZTEpO1xyXG5jb25zb2xlLmxvZyhoZXJvLmFmZmljaGVyU3RhdHMoKSk7XHJcblxyXG5sZXQgbW9uc3RyZSA9IG5ldyBNb25zdHJlKGFybWUyKTtcclxuY29uc29sZS5sb2cobW9uc3RyZS5hZmZpY2hlclN0YXRzKCkpOyovIiwiaW1wb3J0IFBlcnNvbm5hZ2UgZnJvbSAnLi9QZXJzb25uYWdlJztcclxuaW1wb3J0IEFybWUgZnJvbSAnLi9Bcm1lJztcclxuLy9pbXBvcnQgUm9sZSBmcm9tICcuLi9lbnVtL1JvbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG4gICAgLy9wcml2YXRlIF9yb2xlOiBSb2xlO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhcm1lOiBBcm1lLyosIHJvbGU6IFJvbGUqLyl7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgYXJtZSk7XHJcbiAgICAgICAgLy90aGlzLl9yb2xlID0gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICAvKmdldCByb2xlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCByb2xlKHJvbGUpIHtcclxuICAgICAgICB0aGlzLl9yb2xlID0gcm9sZTtcclxuICAgIH0qL1xyXG5cclxufSIsImltcG9ydCBBcm1lIGZyb20gJy4vQXJtZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbm5hZ2Uge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbmJQdjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbmJQdk1heDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYXJtZTogQXJtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFybWU6IEFybWUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9uYlB2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTApICsgNTA7XHJcbiAgICAgICAgdGhpcy5fbmJQdk1heCA9IHRoaXMuX25iUHY7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDE7XHJcbiAgICAgICAgdGhpcy5fYXJtZSA9IGFybWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZ2V0dGVycyBldCBsZXMgc2V0dGVycy5cclxuICAgIC8vTmFtZSBHZXQvc2V0XHJcbiAgICBnZXQgbmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuLy9uYlB2IEdldC9zZXRcclxuICAgIGdldCBuYlB2KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25iUHY7XHJcbiAgICB9XHJcbiAgICBzZXQgbmJQdih2YWx1ZTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9uYlB2ID0gdmFsdWU7XHJcbiAgICB9XHJcbi8vbmJQdk1heCBnZXQvc2V0XHJcbiAgICBnZXQgbmJQdk1heCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYlB2TWF4O1xyXG4gICAgfVxyXG4gICAgc2V0IG5iUHZNYXgodmFsdWU6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fbmJQdk1heCA9IHZhbHVlO1xyXG4gICAgfVxyXG4vL2RlZmVuc2UgZ2V0L3NldFxyXG4gICAgZ2V0IGRlZmVuc2UoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcclxuICAgIH1cclxuICAgIHNldCBkZWZlbnNlKHZhbHVlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSB2YWx1ZTtcclxuICAgIH1cclxuLy9hcm1lIGdldC9zZXRcclxuICAgIGdldCBhcm1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybWU7XHJcbiAgICB9XHJcbiAgICBzZXQgYXJtZSh2YWx1ZTogQXJtZSl7XHJcbiAgICAgICAgdGhpcy5fYXJtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFxdWVyKCkge1xyXG4gICAgICAgIC8vVG91Y2hlciBhdXggc3RhdHMgZGUgbGEgY2libGVcclxuICAgICAgICAvL3RoaXMuX2NpYmxlLi4uLi4uXHJcbiAgICB9XHJcblxyXG4gICAgLypjaWJsZXIodmFsdWU6UGVyc29ubmFnZSkge1xyXG4gICAgICAgIHRoaXMuX2NpYmxlID0gdmFsdWU7XHJcbiAgICB9Ki9cclxuXHJcbiAgICBhZmZpY2hlclN0YXRzKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhbnN3ZXI6IHN0cmluZyA9IGBWb2ljaSBsZXMgc3RhdHMgZGUgY2UgcGVyc29ubmFnZSA6XHJcbiAgICAgICAgPiBOb20gOiAke3RoaXMubmFtZX1cclxuICAgICAgICA+IFBWIGFjdHVlbHMgOiAke3RoaXMubmJQdn1cclxuICAgICAgICA+IFBWIG1heGltdW0gOiAke3RoaXMubmJQdk1heH1cclxuICAgICAgICA+IETDqWZlbnNlIDogJHt0aGlzLmRlZmVuc2V9XHJcbiAgICAgICAgPiBBcm1lIDogJHt0aGlzLmFybWUuYWZmaWNoZXJTdGF0cygpfWA7XHJcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcclxuICAgIH1cclxufSIsImltcG9ydCBBcm1lIGZyb20gJy4vQXJtZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFybWUxIGV4dGVuZHMgQXJtZSB7XHJcbiAgICAvL0NldHRlIGNsYXNzZSBhdWdtZW50ZSBsZXMgY2hhbmNlcyBkZSBjb3VwcyBjcml0aXF1ZXNcclxuICAgIHByaXZhdGUgX2Jvb3N0OiBudW1iZXIgPSAwLjIwO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNyaXRpY2FsQ2hhbmNlID0gdGhpcy5jcml0aWNhbENoYW5jZSArICh0aGlzLmNyaXRpY2FsQ2hhbmNlICogdGhpcy5fYm9vc3QpIDtcclxuXHJcbiAgICB9ICAgICAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFybWUge1xyXG4gICAgcHJpdmF0ZSBfZGVnYXRzTWluOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kZWdhdHNNYXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NyaXRpY2FsQ2hhbmNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVnYXRzTWluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcclxuICAgICAgICB0aGlzLl9kZWdhdHNNYXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMTtcclxuICAgICAgICB0aGlzLl9jcml0aWNhbENoYW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDE7ICAgXHJcbiAgICB9XHJcbiAgICBnZXQgZGVnYXRzTWluKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZ2F0c01pbjtcclxuICAgIH1cclxuICAgIHNldCBkZWdhdHNNaW4obWluOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX2RlZ2F0c01pbiA9IG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVnYXRzTWF4KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZ2F0c01heDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGRlZ2F0c01heChtYXg6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fZGVnYXRzTWF4ID0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjcml0aWNhbENoYW5jZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jcml0aWNhbENoYW5jZTtcclxuICAgIH1cclxuICAgIHNldCBjcml0aWNhbENoYW5jZShjYzogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9jcml0aWNhbENoYW5jZSA9IGNjO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVyU3RhdHMoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGFuc3dlcjogc3RyaW5nID0gYFZvaWNpIGxlcyBzdGF0cyBkZSBjZXR0ZSBhcm1lIDpcclxuICAgICAgICA+IETDqWfDonRzIG1pbmltdW1zIDogJHt0aGlzLmRlZ2F0c01pbn1cclxuICAgICAgICA+IETDqWfDonRzIG1heGltdW1zIDogJHt0aGlzLmRlZ2F0c01heH1cclxuICAgICAgICA+IENoYW5jZSBkZSBjb3VwIGNyaXRpcXVlcyA6ICR7dGhpcy5jcml0aWNhbENoYW5jZX1gO1xyXG4gICAgICAgIHJldHVybiBhbnN3ZXI7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCJpbXBvcnQgQXJtZSBmcm9tICcuL0FybWUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcm1lMiBleHRlbmRzIEFybWUge1xyXG4gICAgLy9DZXR0ZSBjbGFzc2UgYXVnbWVudGUgbGVzIGTDqWfDonRzIG1heFxyXG4gICAgcHJpdmF0ZSBfYm9vc3QgPSAwLjEwO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRlZ2F0c01heCA9IHRoaXMuZGVnYXRzTWF4ICsgKHRoaXMuZGVnYXRzTWF4ICogdGhpcy5fYm9vc3QpIDtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=