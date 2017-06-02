'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ArticleAddCtrl
 * @description
 * # ArticleAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ArticleAddCtrl', function ($scope, Article, $location) {
    $scope.article = {};
    $scope.saveArticle = function() {
      var date = new Date();
      $scope.article.cdate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ' / ' + date.getHours() + ':' +('0' + date.getMinutes()).slice(-2) + ':' +('0' + date.getSeconds()).slice(-2);
      Article.post($scope.article).then(function(){
        $location.path('/articles');
      });
    };
  });

