describe('app module specs', function () {
    describe('mycontroller specs', function () {
        beforeEach(module('app'));

        var $controller;

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        describe('vm.add', function () {
            it('return the sum of two numbers', function () {
                var vm = $controller('mycontroller', {});
                expect(vm.add(2, 3)).toEqual(5);
            });
        });
    });
});