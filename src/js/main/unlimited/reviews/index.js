import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedReviewsModule = angular.module('app.unlimited_reviews', []);

// Include our UI-Router config settings
import UnlimitedReviewsConfig from './reviews.config';
unlimitedReviewsModule.config(UnlimitedReviewsConfig);


// Controllers
import UnlimitedReviewsCtrl from './reviews.controller';
unlimitedReviewsModule.controller('UnlimitedReviewsCtrl', UnlimitedReviewsCtrl);


export default unlimitedReviewsModule;
