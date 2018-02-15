function UnlimitedInstructorDashboardConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_instructor_dashboard', {
    url: '/unlimited-instructor',
    controller: 'UnlimitedInstructorDashboardCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/dashboard/dashboard.html',
    title: 'Unlimited instructor dashboard'
  });

}

export default UnlimitedInstructorDashboardConfig;
