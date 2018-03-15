function UnlimitedInstructorDashboardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.unlimited_instructor_dashboard', {
            url: '/unlimited-instructor-dashboard/:slug',
            controller: 'UnlimitedInstructorDashboardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'main/unlimited-instructor/dashboard/dashboard.html',
            title: 'Unlimited Instructor dashboard',
            resolve: {
                review: function(InstructorHome, $state, $stateParams) {
                    return InstructorHome.get($stateParams.slug).then(
                        (review) => review,
                        (err) => $state.go('app.unlimited_instructor_dashboard')
                    )
                }
            }
        })
}

export default UnlimitedInstructorDashboardConfig;
