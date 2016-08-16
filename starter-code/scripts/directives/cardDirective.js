angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

  function wdiCard(){
  var directive = {
  	restrict: 'E',
  	repalce: true,
  	templateUrl:  "templates/cardDirective.html"
  };
  return directive;
}