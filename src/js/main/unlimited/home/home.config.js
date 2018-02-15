function UnlimitedHomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_home', {
    url: '/unlimited_home',
    controller: 'UnlimitedHomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited/home/home.html',
    title: 'Unlimited'
  });

}

export default UnlimitedHomeConfig;
