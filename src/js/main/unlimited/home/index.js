import angular from 'angular';

// Create the module where our functionality can attach to
let unlimitedHomeModule = angular.module('app.unlimited_home', []);

// Include our UI-Router config settings
import UnlimitedHomeConfig from './home.config';
unlimitedHomeModule.config(UnlimitedHomeConfig);


// Controllers
import UnlimitedHomeCtrl from './home.controller';
unlimitedHomeModule.controller('UnlimitedHomeCtrl', UnlimitedHomeCtrl);


export default unlimitedHomeModule;
