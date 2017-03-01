var annos =["2008","2009","2010","2011","2012","2013","2014","2015"];
var chart = AmCharts.makeChart( "chartdivline", {
    "type": "serial",
    "addClassNames": true,
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 50,
    "marginRight": 8,
    "marginTop": 10,
    "marginBottom": 26,
    "balloon": {
        "adjustBorderColor": true,
        "horizontalPadding": 8,
        "verticalPadding": 6,
        "color": "#000000"
    },"legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 8
    },

    "dataProvider": [
      {
        "anno": annos[0],
        "valueLine": 542,
        "valuecolum": 650
      },
        {
            "anno": annos[1],
            "valueLine": 548,
            "valuecolum": 988
        }, {
            "anno": annos[2],
            "valueLine": 525,
            "valuecolum": 1107
        }, {
            "anno": annos[3],
            "valueLine": 554,
            "valuecolum": 1331
        }, {
            "anno": annos[4],
            "valueLine": 563,
            "valuecolum": 1560
        }, {
            "anno": annos[5],
            "valueLine": 587,
            "valuecolum": 1881
        }, {
            "anno": annos[6],
            "valueLine": 593,
            "valuecolum": 2307
        }, {
            "anno": annos[7],
            "valueLine": 596,
            "valuecolum": 2569
        }],

    "valueAxes": [ {
        "axisAlpha": 0,
        "position": "left",
        "tickLength": 0,
        "labelsEnabled":false,
        "autoGridCount":false,
        "gridCount":10
    } ],
    "startDuration": 1,
    "graphs": [ 
//       {
//        "alphaField": "alpha",
//         "balloonText":"[[category]]<br><b><span style='font-size:12px;'>[[valuecolum]]</span></b>",
//         "fillAlphas": 1,
//         "type": "column",
//         "fillColors":"#353739",
//         "lineAlpha":0,
//         "fontSize":8,
//         "labelText": "[[valuecolum]]",
//         "title": "Ingresos (Ps. millones)",
//         "valueField": "valuecolum",
//         "dashLengthField": "dashLengthColumn"
//     }, 
               {
        
        "balloonText": "[[category]]<br><b><span style='font-size:12px;'>[[valueLine]]</span></b>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#353739",
//         "fillColors":"#353739",
        "lineColor":"#fdd400",
        "labelText": "[[valueLine]]",
        "fontSize":8,
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Precio promedio por vivienda (Ps. miles)",
        "valueField": "valueLine",
        "dashLengthField": "dashLengthLine"
    } ],
    "categoryField": "anno",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0

    },
    "export": {
        "enabled": true
    }
} );