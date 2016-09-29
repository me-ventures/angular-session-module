'use strict';

angular.module('mev.session', [
    'satellizer',

    'mev.session.ctrl.modal-login',

    'mev.session.dir.login'
])
    .config([
        '$authProvider',
        function($authProvider){
            $authProvider.loginUrl = (
                'http://shopping-api.me-ventures.com/auth/login'
            );
        }
    ])
;

