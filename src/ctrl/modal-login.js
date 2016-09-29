'use strict';

angular.module('mev.session.ctrl.modal-login', [])

    .controller('MevSessionModalLoginCtrl', [
        '$scope',
        '$auth',
        '$localStorage',
        '$state',
        '$uibModalInstance',
        function(
            $scope,
            $auth,
            $localStorage,
            $state,
            $uibModalInstance
        ){
            $scope.email = '';
            $scope.password = '';

            $scope.authenticate = function(provider) {
                $auth.authenticate(provider);
            };

            $scope.login = function(){
                $auth.login({
                    username: $scope.email,
                    password: $scope.password
                }, {
                    url: (
                        'http://shopping-api.me-ventures.com/auth/login'
                    ),
                    method: 'POST',
                    data: {
                        username: $scope.email,
                        password: $scope.password
                    }
                })
                    .then(function(res){
                        console.log(res);

                        if( res.status === 200 ){
                            $auth.setToken(res.data.token);

                            // @todo: set basic user info in $localStorage
                            $localStorage.account = {
                                id: res.data.id,
                                email: res.data.email,
                                name: res.data.name,
                                created: res.data.created
                            };

                            $state.go('account');
                            $uibModalInstance.close();
                        } else {
                            console.error('login error');
                        }

                    })
                    .catch(function(res){
                        console.error(res);
                    });
            };
        }
    ]);
