function UnlimitedInstructorHomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_instructor_home', {
    url: '/unlimited-instructor-home',
    controller: 'UnlimitedInstructorHomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/home/home.html',
    title: 'Unlimited Instructor'
  });

}

export default UnlimitedInstructorHomeConfig;
