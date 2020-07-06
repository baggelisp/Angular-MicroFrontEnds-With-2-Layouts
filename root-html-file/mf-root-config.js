import {microApps} from './micro-apps.js';

System.import('single-spa').then(function (singleSpa) {

    function regApplication(appName, appRoute) {
      singleSpa.registerApplication(
          appName,
          function() {
              return System.import(appName);
          },
          function(location) {
              return location.pathname.startsWith(appRoute);
          }
      );
    }

    singleSpa.registerApplication(
      'navbar',
      function () {
        return System.import('navbar');
      },
      function (location) {
        return true;
      }
    )

    for (const microApp in microApps){
      regApplication(microApp.appName, microApp.appRoute);
    }

    singleSpa.start();
  })