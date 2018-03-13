function UnlimitedInstructorDashboardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.unlimited_instructor_dashboard', {
            url: '/unlimited-instructor/:slug',
            controller: 'UnlimitedInstructorDashboardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'main/unlimited-instructor/dashboard/dashboard.html',
            title: 'Unlimited instructor dashboard',
            resolve: {
                review: function(InstructorHome, $state, $stateParams) {
                    return InstructorHome.get($stateParams.slug).then(
                        (review) => review,
                        (err) => $state.go('app.instructor_home')
                    )
                }
            }
        })
}

export default UnlimitedInstructorDashboardConfig;
