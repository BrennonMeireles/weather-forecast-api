window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];

        window.myWidgetParam.push({ 

            id: 11,
            cityid: '3448439',
            appid: '560882b102105eb17a71610a294795fb',
            units: 'metric',
            containerid: 'openweathermap-widget-11',

          });

        (function() {

            var script = document.createElement('script');
            script.async = true;
            script.charset = "utf-8";
            script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";

            var s = document.getElementsByTagName('script')[0];

            s.parentNode.insertBefore(script, s);

        })();