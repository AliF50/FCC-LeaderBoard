app.controller('LeaderBoardController', ['$scope', 'dataFac', function($scope, dataFac) {
    dataFac.getLeaderBoard().then(function(response) {
        $scope.leaders = response.data;
        for (let i = 0; i < $scope.leaders.length; i++) {
            $scope.leaders[i].rank = i + 1;
        }
        console.log($scope.leaders);
    });

    $scope.sortType = 'rank'; //set the default sort type
    $scope.sortReverse = false; // set the default sort order

}]);
