function UnlimitedReviewsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.unlimited_reviews', {
    url: '/unlimited-reviews',
    controller: 'UnlimitedReviewsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/unlimited/reviews/reviews.html',
    title: 'Unlimited reviews'
  });

};

export default UnlimitedReviewsConfig;
