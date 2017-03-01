/**
 * Created by Tania on 1/25/2017.
 */


var chart = AmCharts.makeChart( "estructura_accionaria", {
    "type": "pie",
    "theme": "light",
    "legend":{
        "divId":"legendDiv",
        "marginRight":100,

        "valueText": "[[cant]]%",
        "autoMargins":false,
        "useGraphSettings":false
    },
    "dataProvider": [{
        "accionistas": "Directivos",
        "cant": 71
    }, {
        "accionistas": "Público Inversionsta",
        "cant": 24
    },
    {
        "accionistas": "Corporación Interamericana de Inversiones",
        "cant":4
    }
  ],
    "numberFormatter": {
        "precision": 1,
        "decimalSeparator": ",",
        "thousandsSeparator": ""
    },
    "valueField": "cant",
    "titleField": "accionistas",
    "labelText": "[[cant]]%",
    "balloonText": "[[accionistas]]<br><b><span style='font-size:12px;'>[[cant]]%</span></b>",
    "balloon":{
        "fixedPosition":true
    },

    "export": {
        "enabled": true
    }
} );
