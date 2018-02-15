function UnlimitedInstructorStudentsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_instructor_students', {
    url: '/unlimited-students',
    controller: 'UnlimitedInstructorStudentsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited-instructor/students/students.html',
    title: 'Unlimited students'
  });
}

export default UnlimitedInstructorStudentsConfig;
