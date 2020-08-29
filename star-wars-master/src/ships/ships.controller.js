(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);
    
    ShipsController.$inject = ['ShipsService', '$scope', '$location'];
    function ShipsController(ShipsService,$scope,$location) {
        var _this = this;
        

        _this.fetchNext = function ()  {
            var url = _this.lastResponse ? _this.lastResponse.next : null;
            console.log('URL BEFORE: ', url);
            if (url && url.startsWith("http:")) {
                url.toString().replace('http:', 'https:');
                console.log((url && url.startsWith("http:")))
            }
            console.log('URL AFTER: ', url);
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
        _this.enterDetail = function (data)  {
            console.log('data2: ',data)
            $location.path('/starship-detail').search({data});
            console.log('enter detail');
        }
        _this.error = undefined;
        _this.lastResponse = {};
        _this.starships = [];
        
        
        
        _this.fetchNext();
        
    }
})();