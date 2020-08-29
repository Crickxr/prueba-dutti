(function () {
    'use strict';

    angular
        .module('app')
        .controller('StarshipDetailController', StarshipDetailController);
    
    StarshipDetailController.$inject = ['$location', '$window'];
    function StarshipDetailController($location, $window) {
        var _this = this;
        var params = JSON.parse($window.localStorage.getItem('data'));
        _this.parsedParams = [];

        _this.parseParams = function ()  {
            var count = 0;
            Object.keys(params).forEach( (k) => { if (count < 13) {_this.parsedParams.push([k.replace('_',' ').replace('_',' '),params[k]]); count++;} });
            getStarshipId();
        }

        _this.goBack = function ()  {
            $location.path('/ships');
        }
        _this.goToShips = function ()  {
            $location.path('/ships');
        }
        _this.goToPlanets = function ()  {
            $location.path('/planets');
        }
        _this.goToPilots = function ()  {
            $location.path('/pilots');
        }

        _this.shipId = "";

        function getStarshipId() {
            var url = params.url;
            _this.shipId = url.split("/").filter(function (item) {
                return item !== "";
            }).slice(-1)[0];
        }

        _this.error = undefined;
        _this.starship = {};
        
        _this.parseParams();
    }
})();