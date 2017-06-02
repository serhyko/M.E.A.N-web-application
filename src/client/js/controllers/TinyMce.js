'use strict';
/**
 * Created by galim_000 on 11/24/2016.
 */
angular.module('clientApp').controller('TinyMceCtrl', function($scope) {

  $scope.tinymceModel = 'Initial content';

  $scope.getContent = function() {
    console.log('Editor content:', $scope.tinymceModel);
  };

  $scope.setContent = function() {
    $scope.tinymceModel = 'Time: ' + (new Date());
  };

  $scope.tinymceOptions = {
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };
});
