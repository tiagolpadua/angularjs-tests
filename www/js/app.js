(function () {
    'use strict';
    angular
        .module('app', [])
        .controller('mycontroller', function () {
            var vm = this;
            vm.text = 'Foo';

            vm.add = function (a, b) {
                return a + b;
            };

            vm.sub = function (a, b) {
                return a - b;
            };

            vm.mul = function (a, b) {
                return a * b;
            };
        });
})();