'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ArticleDeleteCtrl
 * @description
 * # ArticleDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ArticleDeleteCtrl', function ($scope, $routeParams, Article, $location) {
    $scope.article = Article.one($routeParams.id).get().$object;
    $scope.deleteArticle = function() {
      $scope.article.remove().then(function() {
        $location.path('/articles');
      });
    };
    $scope.back = function() {
      $location.path('/article/' + $routeParams.id);
    };
  });
