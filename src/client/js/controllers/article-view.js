'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ArticleViewCtrl
 * @description
 * # ArticleViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ArticleViewCtrl', function ($scope, $routeParams, Article) {
    $scope.viewArticle = true;
    $scope.article = Article.one($routeParams.id).get().$object;
  });
