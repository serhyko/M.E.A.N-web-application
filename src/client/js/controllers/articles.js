'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ArticlesCtrl', ['Article', function (Article) {
    this.articles = Article.getList().$object;

    Article.getList().then(function(data) {
    this.articles = data;

    console.log(this.articles[0]);

    //trim body string to 
    // for(var i = 0; i < this.articles.length; i++){
    //     if(this.articles[i].body.length > 100){
    //     	this.articles[i].body = this.articles[i].body.slice(0,100) + '...';
    //     } 
    // }

    // this.propertyName = 'title';
    //   this.reverse = false;

    //   this.sortBy = function(propertyName) {
    //     this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    //     this.propertyName = propertyName;
    //   };

	},function (err) {
		console.log(err);
	});
  }]);
