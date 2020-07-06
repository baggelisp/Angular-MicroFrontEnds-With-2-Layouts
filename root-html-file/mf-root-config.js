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

    regApplication('app1', '/app1');
    regApplication('app2', '/app2');

    singleSpa.start();
  })