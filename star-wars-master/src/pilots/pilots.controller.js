(function () {
    'use strict';

    angular
        .module('app')
        .controller('PilotsController', PilotsController);
    
    PilotsController.$inject = ['ShipsService', '$scope', '$location', '$rootScope'];
    function PilotsController(ShipsService,$scope,$location,$rootScope) {
        var _this = this;
        
        _this.goToShips = function ()  {
            $location.path('/ships');
        }
        _this.goToPlanets = function ()  {
            $location.path('/planets');
        }
        _this.goToPilots = function ()  {
            $location.path('/pilots');
        }
    }
})();