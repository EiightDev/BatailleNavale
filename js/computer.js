/*jslint browser this */
/*global _, player */

(function (global) {
    "use strict";

    var computer = _.assign({}, player, {
        grid: [],
        tries: [],
        fleet: [],
        game: null,
        play: function () {
            var self = this;
            setTimeout(function () {
                self.game.fire(this, 0, 0, function (hasSucced) {
                    self.tries[0][0] = hasSucced;
                });
            }, 2000);
        },
        //Step 1 - creation de la proprité isShipOK retournant pour le moment true
        isShipOK: function (params) {
          return true  
        },
        areShipsOk: function (callback) {
            
            var bateau1 = false;
            var bateau2 = false;
            var bateau3 = false;
            var bateau4 = false;

            while (bateau1 == false)
                bateau1 = this.isShipOK(5);
            while (bateau2 == false)
                bateau2 = this.isShipOK(6);
            while (bateau3 == false)
                bateau3 = this.isShipOK(7);
            while (bateau4 == false)
                bateau4 = this.isShipOK(8);

            setTimeout(function () {
                callback();
            }, 500);
        }
    });

    global.computer = computer;

}(this));