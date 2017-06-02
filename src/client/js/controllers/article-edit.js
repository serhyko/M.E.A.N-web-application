'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ArticleEditCtrl
 * @description
 * # ArticleEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ArticleEditCtrl', function ($scope, $routeParams, Article, $location) {
    $scope.editArticle = true;
    $scope.article = {};
    Article.one($routeParams.id).get().then(function(article) {
      $scope.article = article;
      $scope.saveArticle = function() {
        $scope.article.save().then(function() {
          $location.path('/article/' + $routeParams.id);
        });
      };
    });
  });
