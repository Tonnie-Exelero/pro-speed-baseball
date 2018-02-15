import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedInstructorHomeModule = angular.module('app.unlimited_instructor_home', []);

// Include our UI-Router config settings
import UnlimitedInstructorHomeConfig from './home.config';
unlimitedInstructorHomeModule.config(UnlimitedInstructorHomeConfig);

// Controllers
import UnlimitedInstructorHomeCtrl from './home.controller';
unlimitedInstructorHomeModule.controller('UnlimitedInstructorHomeCtrl', UnlimitedInstructorHomeCtrl);


export default unlimitedInstructorHomeModule;
