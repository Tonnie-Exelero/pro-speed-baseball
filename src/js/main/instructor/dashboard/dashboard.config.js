function InstructorDashboardConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.instructor_dashboard', {
    url: '/instructor-dashboard',
    controller: 'InstructorDashboardCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/dashboard/dashboard.html',
    title: 'Instructor dashboard'
  });

}

export default InstructorDashboardConfig;
