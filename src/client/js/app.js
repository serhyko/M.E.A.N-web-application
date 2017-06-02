'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular',
    'ui.tinymce',
    'ngSanitize'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'main'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'main'
      })
      .when('/create/article', {
        templateUrl: 'views/article-add.html',
        controller: 'ArticleAddCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'views/article-view.html',
        
        controller: 'ArticleViewCtrl'
      })
      .when('/article/:id/edit', {
        templateUrl: 'views/article-edit.html',
        controller: 'ArticleEditCtrl'
      })
      .when('/article/:id/delete', {
        templateUrl: 'views/article-delete.html',
        controller: 'ArticleDeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ArticleRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Article', function(ArticleRestangular) {
    return ArticleRestangular.service('article');
  });


