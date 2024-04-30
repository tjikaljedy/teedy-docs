'use strict';

/**
 * Settings modal Enable Crypto controller.
 */
angular.module('docs').controller('SettingsCryptoModalEnableCrypto', function ($scope, $uibModalInstance) {
    $scope.wallets = $scope.$parent.wallets;

    $scope.close = function(wallet) {
        $uibModalInstance.close(wallet);
    }

    $scope.onSelect = function(wallet) {
        $uibModalInstance.close(wallet);
    };
});