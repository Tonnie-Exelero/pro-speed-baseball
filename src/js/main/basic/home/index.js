import angular from 'angular';

// Create the module where our functionality can attach to
let basicHomeModule = angular.module('app.basic_home', ['ngFileUpload']);

// Include our UI-Router config settings
import BasicHomeConfig from './home.config';
basicHomeModule.config(BasicHomeConfig);

// Controllers
import BasicHomeCtrl from './home.controller';
basicHomeModule.controller('BasicHomeCtrl', BasicHomeCtrl, ['Upload']);

export default basicHomeModule;
