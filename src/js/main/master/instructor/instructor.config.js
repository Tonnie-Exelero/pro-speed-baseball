function MasterInstructorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.master_instructor', {
    url: '/master-instructor',
    controller: 'MasterInstructorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/master/instructor/instructor.html',
    title: 'Master instructor'
  });

};

export default MasterInstructorConfig;
