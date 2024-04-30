'use strict';

/**
 * Settings Crypto controller.
 */
angular.module('docs').controller('SettingsCrypto', function($scope, User, $dialog, $uibModal, Restangular, $translate) {
  User.userInfo().then(function(data) {
    $scope.user = data;
  });

  /**
   * Enable Crypto Wallet
   */
  $scope.enableCrypto = function () {
    Web3.requestEIP6963Providers().then(function(wallets) {
        $scope.wallets = Array.from(wallets.entries());

        $uibModal.open({
          templateUrl: 'partial/docs/exts/settings.crypto.enablecrypto.html',
          controller: 'SettingsCryptoModalEnableCrypto',
          scope: $scope
        }).result.then(function (wallet) {
         if (wallet === null) {
            return;
         }

         const provider = wallet[1].provider;
         provider.request({ method: 'eth_requestAccounts' }).then(function(accounts) {
               console.log(accounts);

         });
        });
    });
  };

  /**
   * Disable Crypto
   */
  $scope.disableCrypto = function () {
    $uibModal.open({
      templateUrl: 'partial/docs/exts/settings.crypto.disablecrypto.html',
      controller: 'SettingsCryptoModalDisableCrypto'
    }).result.then(function (password) {
      if (password === null) {
        return;
      }

      // Disable Crypto
      Restangular.one('user/disable_crypto').post('', {
        password: password
      }).then(function() {
        User.userInfo(true).then(function(data) {
          $scope.user = data;
        })
      });
    });
  };

  /**
   * Test Crypto.
   */
  $scope.testValidationCodeSuccess = null;
  $scope.testTotp = function (code) {
    Restangular.one('user/test_totp').post('', {
      code: code
    }).then(function() {
      $scope.testValidationCodeSuccess = true;
    }, function () {
      $scope.testValidationCodeSuccess = false;
    });
  };
});