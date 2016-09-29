'use strict';

angular.module('mev.session.dir.login', [])

    .directive('mevSessionLogin', [
        '$auth',
        '$uibModal',
        function(
            $auth,
            $uibModal
        ){
            return {
                restrict: 'A',
                scope: {
                    title: '@'
                },
                controller: function($scope){
                    $scope.isAuthenticated = function() {
                        return $auth.isAuthenticated();
                    };

                    $scope.showLoginDialog = function(){
                        $uibModal.open({
                            controller: 'MevSessionModalLoginCtrl',
                            templateUrl: 'tpl/session/login/dialog.html'
                        });
                    };
                },
                templateUrl: function(elem, attr){
                    return attr.tpl || 'tpl/session/login.html';
                }
            };
        }
    ]);
