import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedFinishedReviewsModule = angular.module('app.unlimited_finished_reviews', []);

// Include our UI-Router config settings
import UnlimitedFinishedReviewsConfig from './finished-reviews.config';
unlimitedFinishedReviewsModule.config(UnlimitedFinishedReviewsConfig);


// Controllers
import UnlimitedFinishedReviewsCtrl from './finished-reviews.controller';
unlimitedFinishedReviewsModule.controller('UnlimitedFinishedReviewsCtrl', UnlimitedFinishedReviewsCtrl);


export default unlimitedFinishedReviewsModule;
