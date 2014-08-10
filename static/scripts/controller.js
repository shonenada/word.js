var randomInt = function(upper, lower) {
    return parseInt(Math.random() * (upper - lower + 1) + lower); 
}

var wordController = angular.module('wordController', []);

wordController.factory('Statistics', function() {
    return {
        'total': 0,
        'right': 0,
        'wrong': 0,
    }
});

wordController.controller('WordShowController',
    ['$scope', '$http', 'Statistics',
        function($scope, $http, Statistics) {
            $scope.init = function () {
                $scope.statistics = Statistics;
                $scope.current = 0;
                $scope.words = $http.get('words.json').success(function(data) {
                    $scope.words = data;
                    $scope.word = $scope.words[$scope.current];
                });
            }

            $scope.randomWord = function () {
                $scope.current = randomInt(0, 4);
                $scope.word = $scope.words[$scope.current];
            }

            $scope.nextWord = function () {
                $scope.current += 1;
                if ($scope.current >= $scope.words.length) {
                    location.href = "#/finished"
                }
                $scope.word = $scope.words[$scope.current];
            }

            $scope.check = function (index) {
                $scope.statistics.total += 1;
                if (index == $scope.word.answer) {
                    $scope.statistics.right += 1;
                    $scope.nextWord();
                }else {
                    $scope.statistics.wrong += 1;
                }
            }
            $scope.init();
        }
    ]
);

wordController.controller('FinishedController',
    ['$scope', 'Statistics',
        function($scope, Statistics) {
            $scope.init = function() {
                $scope.statistics = Statistics;
            }

            $scope.again = function() {
                $scope.statistics.total = 0;
                $scope.statistics.right = 0;
                $scope.statistics.wrong = 0;
                location.href = "#/";
            }

            $scope.init();
        }
    ]
);
