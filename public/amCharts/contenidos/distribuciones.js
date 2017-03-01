// AmCharts.theme = AmCharts.themes.light;
//
  if (locale =="es")
     {
      var periodos =["4T14","1T15","2T15","3T15","4T15","1T16","2T16","3T16"];

    }
    else{
      var periodos =["4Q14","1Q15","2Q15","3Q15","4Q15","1Q16","2Q16","3Q16"];

    }
var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight":80,
    "autoMarginOffset":20,
    "dataProvider": [{
        "perido": periodos[0],
        "value": 0.0393
    }, {
        "perido": periodos[1],
        "value": 0.1884
    }, {
        "perido": periodos[2],
        "value": 0.1787
    }, {
        "perido":periodos[3],
        "value": 0.2175
    }, {
        "perido": periodos[4],
        "value": 0.2325
    }, {
        "perido":periodos[5],
        "value": 0.2365
    }, {
        "perido": periodos[6],
        "value": 0.2292
    }, {
        "perido":periodos[7],
        "value": 0.2393
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "tickLength": 0
    }],
    "graphs": [{
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",

        // "dashLength": 3,
        "colorField":"color",
        "valueField": "value"
    }],
    "categoryField": "perido",
    "categoryAxis": {
        // "parseDates": true,
        "axisAlpha": 0,
        "gridAlpha": 0.1,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
     }
});
