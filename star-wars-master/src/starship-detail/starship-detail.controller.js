(function () {
    'use strict';

    angular
        .module('app')
        .controller('StarshipDetailController', StarshipDetailController);
    
    StarshipDetailController.$inject = ['$location', '$window'];
    function StarshipDetailController($location, $window) {
        var _this = this;
        var params = JSON.parse($window.localStorage.getItem('data'));

        _this.goBack = function ()  {
            console.log('PARAMS: ', params);
            $location.path('/ships');
        }
        _this.error = undefined;
        _this.starship = {};
        
    }
})();