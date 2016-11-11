(function () {
    'use strict';

    angular
            .module('app')
            .factory('Items', ['$http', function ($http) {
                    function getAll() {
                        var items = [];
                        return $http.get('/data/items.json')
                                .success(function (response) {
                                    items = response;
                                    return items;
                                });
                    }

                    function getAllDummy() {
                        return $http.get('/data/items.json');
                    }

                    return  {
                        getAll: getAll,
                        getAllDummy: getAllDummy
                    };
                }]);
})();