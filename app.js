var app = angular.module('myApp', []);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        template:
                    '<div class="row main-row">' +
                        '<div class="row text-left name-row">\n' +
                            'ACME INC.\n' +
                        '</div>\n' +
                        '<div class="row">' +
                            '<div class="col-md-4 img-col text-center" ng-transclude>' +
                            '</div>' +
                            '<div class="col-md-8 form-col">' +
                                '<div class="row row1">' +
                                    '<div class="col-md-6"><input type="text" placeholder="First Name" class="name"></div> ' +
                                    '<div class="col-md-6"><input type="text" placeholder="Last Name" class="name"></div> ' +
                                '</div> ' +
                                '<div class="row row2">' +
                                    '<div class="col-md-12"><input type="email" placeholder="Email" class="email"></div>' +
                                '</div> ' +
                                '<div class="row text-center row3">' +
                                    '<div class="col-md-12">' +
                                        '<button type="submit" id="btn-sign-in" class="btn btn-primary">Give us your infoz!</button> ' +
                                    '</div> ' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>',
        replace: true
    }
});
