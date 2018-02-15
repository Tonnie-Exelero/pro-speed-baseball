function PastReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.past_reviews', {
    url: '/past-reviews',
    controller: 'PastReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/past-reviews/past-reviews.html',
    title: 'Past reviews'
  });

};

export default PastReviewsConfig;
