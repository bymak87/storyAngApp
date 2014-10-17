
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
var app = angular.module('storyAngApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'views/form.html',
            controller: 'formController'
        })

        // nested states
        // each of these sections will have their own view
        //url will be nexted(/form/start)
        .state('form.start', {
            url: '/start',
            templateUrl: 'views/form-start.html'
        })

        // url will be nested (/form/intro)
        .state('form.intro', {
            url: '/intro',
            templateUrl: 'views/form-intro.html'
        })

        // url will be /form/middle
        .state('form.middle', {
            url: '/middle',
            templateUrl: 'views/form-middle.html'
        })

        // url will be /form/climax
        .state('form.climax', {
            url: '/climax',
            templateUrl: 'views/form-climax.html'
        })

        // url will be /form/ending
        .state('form.ending', {
            url: '/ending',
            templateUrl: 'views/form-ending.html'
        })

        // url will be /form/story
        .state('form.story', {
            url: '/story',
            templateUrl: 'views/form-story.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/start');
})

// our controller for the form
// =============================================================================
app.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};


    // function to email the story
    $scope.processForm = function() {
      $scope.formData["story"]=("");
         alert($scope.formData.email);
    };
    //scope and functions to select action
    $scope.intro = function(){
      $scope.formData["intro"]= "Hello "+ $scope.formData.name + " and welcome "+  $scope.formData.friendName +". You see and smell a very smelly ogre in the middle of the road.";
    };

    $scope.sneak = false;
    $scope.sneakf = function(){
      $scope.sneak = true;
      $scope.formData["middle"]= "You try to sneak past him. Uh-oh... he smells you, even though he can't smell himself. He get's angry and starts running towards you and " + $scope.formData.friendName +" .";
    };

    $scope.talk = false;
    $scope.talkf = function(){
      $scope.talk = true;
       $scope.formData["middle"] = "You slowly approach him and talk to him. He is acutally really nice. He just wants some friends. He gives you food for your quest and warns you about the evil elves that will appear in the woods.";
    };
    //middle
    $scope.fight = false;
    $scope.fightf = function(){
      $scope.fight = true;
      $scope.formData["climax"]="You try to fight the ogre but he doesn't want to fight. He runs into the woods but you notice a path in the distance.";
    };
    $scope.run = false;
    $scope.runf = function(){
      $scope.run = true;
      $scope.formData["climax"]="You and "+ $scope.formData.friendName+" run into the woods and some evil elves appear. They shoot arrows at you. One hits "+$scope.formData.friendName + ".";
    };
    $scope.avoid = false;
    $scope.avoidf = function(){
      $scope.avoid = true;
      $scope.formData["climax"]="You stumble upon a winding path that will lead you to a castle that looks abandoned.";
    };
    //climax
    $scope.surrender = false;
    $scope.surrenderf = function(){
      $scope.surrender = true;
      $scope.formData["ending"]="You and " + $scope.formData.friendName + " have been captured and the elves will not let you live... This is the end for you and " + $scope.formData.friendName +".";
    };

    $scope.leave = false;
    $scope.leavef = function(){
      $scope.leave = true;
      $scope.formData["ending"]="You leave " + $scope.formData.friendName + " and stumble out of the woods. You see a castle and decide to go inside. You explore it and you find tons of gold. You become a very wealthy person but you miss "+ $scope.formData.friendName +"!";
    };

    $scope.castle = false;
    $scope.castlef = function(){
      $scope.castle = true;
      $scope.formData["ending"]="You and " + $scope.formData.friendName + " decide to go towards the castle. You reach the castle. You explore it and you find tons of gold. You both become a very wealthy people and live happily ever after!";
    };
    $scope.home = false;
    $scope.homef = function(){
      $scope.home = true;
      $scope.formData["ending"]="You decide to go home. You wasted all this time and you have nothing to show for it. You are sad :( ";
    };


    // function to add story the data
    $scope.compile = function() {
         $scope.formData["story"]= $scope.formData.intro + $scope.formData.middle + $scope.formData.climax + $scope.formData.ending ;
    };
})

//directive for the form
// =============================================================================
//intro
app.directive('intro', function(){
  return {
  restrict: 'E',
  templateUrl: "views/intro.html",
  controller: function($scope){
  }

    };
});

//middle
app.directive('middle', function(){
  return {
  restrict: 'E',
  templateUrl: "views/middle.html",
  controller: function($scope){
  }

    };
});

//climax
app.directive('climax', function(){
  return {
  restrict: 'E',
  templateUrl: "views/climax.html",
  controller: function($scope){
  }

    };
});
//ending
app.directive('ending', function(){
  return {
  restrict: 'E',
  templateUrl: "views/ending.html",
  controller: function($scope){
  }

    };
});
//story
app.directive('story', function(){
  return {
  restrict: 'E',
  templateUrl: "views/story.html",
  controller: function($scope){
  }

    };
});

