var annos =["2008","2009","2010","2011","2012","2013","2014","2015"];
var chart = AmCharts.makeChart( "chartdiv1", {
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


    "dataProvider": [{
        "anno": annos[0],
        "valueLine": 116,
        "valuecolum": 18},
        {
            "anno": annos[1],
            "valueLine": 191,
            "valuecolum": 19
        }, {
            "anno": annos[2],
            "valueLine": 227,
            "valuecolum": 21
        }, {
            "anno": annos[3],
            "valueLine": 268,
            "valuecolum": 20
        }, {
            "anno": annos[4],
            "valueLine": 302,
            "valuecolum": 19
        }, {
            "anno": annos[5],
            "valueLine": 358,
            "valuecolum": 19
        }, {
            "anno": annos[6],
            "valueLine": 480,
            "valuecolum": 21
        }, {
            "anno": annos[7],
            "valueLine": 581,
            "valuecolum": 23
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
    "graphs": [ {
        "alphaField": "alpha",
        "balloonText":"[[category]]<br><b><span style='font-size:12px;'>[[valuecolum]]%</span></b>",
        "fillAlphas": 1,
        "type": "column",
        "fillColors":"#FCC813",
        "lineAlpha":0,
        "fontSize":8,
        "labelText": "[[valuecolum]]%",
        "title": "UAFIDA (Ps. millones)",
        "valueField": "valuecolum",
        "dashLengthField": "dashLengthColumn"
    }, {
        "id": "graph2",
        "balloonText": "[[category]]<br><b><span style='font-size:12px;'>[[valueLine]]</span></b>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#40454e",
        "lineColors":"#40454e",
        "labelText": "[[valueLine]]",
        "fontSize":8,
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Margen (%)",
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