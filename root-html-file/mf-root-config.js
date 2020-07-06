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
        // We load the layout first and after the Microfront Ends
        // We want to find the id of the div that the Microfront End will be placed
        layout =  System.import('navbar');
        layout.then(()=> {

          // Adding here the Microfront Ends
          regApplication('app1', '/app1');
          regApplication('app2', '/app2');

        })
        return layout
      },
      function (location) {
        return true;
      }
    )




    singleSpa.start();
  })