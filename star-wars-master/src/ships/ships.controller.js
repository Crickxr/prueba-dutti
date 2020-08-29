(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = ['ShipsService', '$scope', '$location', '$rootScope'];
    function ShipsController(ShipsService,$scope,$location,$rootScope) {
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
        
        _this.loggedIn = $rootScope.globals.currentUser;

        _this.fetchNext = function ()  {
            var url = _this.lastResponse ? _this.lastResponse.next : null;

            if (url && url.startsWith("http:")) {
                url.toString().replace('http:', 'https:');
            }

            ShipsService.GetStarships(url)
            .then(function (data) {
                data.next = data.next.replace('http:', 'https:');
                _this.starships = _this.starships.concat(data.results);
                _this.lastResponse = data;
                $scope.$digest;
            })
            .catch(function () {
                _this.error = true;
                $scope.$digest();
            })
        }
        
        _this.error = undefined;
        _this.lastResponse = {};
        _this.starships = [];
        
        
        
        _this.fetchNext();
        
    }
})();