var annos =["2009","2010","2011","2012","2013","2014","2015"];
var chart = AmCharts.makeChart( "chartdiv2", {
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
        "valueLine": '7.4',
        "valuecolum": 0.10},
        {
            "anno": annos[1],
            "valueLine": '6.0',
            "valuecolum": 0.16
        }, {
            "anno": annos[2],
            "valueLine": '6.2',
            "valuecolum": 0.19
        }, {
            "anno": annos[3],
            "valueLine": '7.9',
            "valuecolum": 0.29
        }, {
            "anno": annos[4],
            "valueLine": '19.0',
            "valuecolum": 0.76
        }, {
            "anno": annos[5],
            "valueLine": '25.0',
            "valuecolum": 1.15
        }, {
            "anno": annos[6],
            "valueLine": '50.0',
            "valuecolum": 3.41
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
        "balloonText":"[[category]]<br><b><span style='font-size:12px;'>[[valuecolum]]</span></b>",
        "fillAlphas": 1,
        "type": "column",
        "fillColors":"#FCC813",
        "lineAlpha":0,
        "fontSize":8,
        "labelText": "[[valuecolum]]",
        "title": "Dividendo por acción (Ps.)",
        "valueField": "valuecolum",
        "dashLengthField": "dashLengthColumn"
    }, {
        "id": "graph2",
        "balloonText": "[[category]]<br><b><span style='font-size:12px;'>[[valueLine]]%</span></b>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#40454e",
        "lineColors":"#40454e",
        "labelText": "[[valueLine]]%",
        "fontSize":8,
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Dividendos / Unidad Neta",
        "valueField": "valueLine",
        "dashLengthField": "dashLengthLine"
    } ],
    "categoryField": "anno",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 5
    },
    "export": {
        "enabled": true
    }
} );