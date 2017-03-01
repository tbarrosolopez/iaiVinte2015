AmCharts.theme = AmCharts.themes.light;
var chart = new AmCharts.AmSerialChart();
var chart1 = new AmCharts.AmSerialChart();

if (locale == "es") {
    var giroLabel = ['Automotriz','Tecnología','Manufactura','Servicios','Otros *','Comunicaciones','Consumo','Electrónica','Logística'];
    var otrosLabel = ['Otros','Construcción y Desarrollo','Gas Industrial','Servicios Financieros','Comercio','Energía','Agropecuario'];
    var activoLabel = ['Oficina','Industrial','Comercial'];
    var hover2 = ['Oficina: 60%','Industrial: 36%','Comercial: 4%'];
    var last="Indicadores financieros (millones de pesos)";
    var year = ['2T15','3T15','4T15','1T16','2T16','3T16'];

}
else {
    var giroLabel = ['Automotive','Technology','Manufacture','Services','Other *','Communications','Consumer','Electronics','Logistcs'];
    var otrosLabel = ['Other','Construction and Development','Industrial Gas','Financial Services','Commerce','Energy','Agricultural',];
    var activoLabel = ['Offices','Industrial','Commercial'];
    var hover2 = ['Offices: 60%','Industrial: 36%','Commercial: 4%'];
    var last="Selected Financial Indicators (millions of Mexican pesos)";
    var year = ['2Q15','3Q15','4Q15','1Q16','2Q16','3Q16'];

}


var chartData1 = [
        {
            giro: giroLabel[0],
            valor: 21
        }, {
            giro: giroLabel[1],
            valor: 18
        }, {
            giro: giroLabel[2],
            valor: 14
        } ,{
            giro: giroLabel[3],
            valor: 13
        }, {
            giro: giroLabel[4],
            valor: 12
        },{
            giro: giroLabel[5],
            valor: 7
        },{
            giro: giroLabel[6],
            valor: 7
        }, {
            giro: giroLabel[7],
            valor: 5
        },{
            giro: giroLabel[8],
            valor: 3
        }
    ];


chart1.dataProvider = chartData1;
chart1.categoryField = "giro";
chart1.theme = "light";
chart1.startDuration = 2;
chart1.rotate = true;
chart1.labelRadius = -25;
chart1.labelText = "[[percents]]%";
chart1.colors = ["#44789D","#7BA3D7","#A5A5A5","#522424","#45D2A5","#E5A0A5","#8B921E"];

var categoryAxis = chart.categoryAxis;
categoryAxis.gridPosition = "start";

var valueAxis = new AmCharts.ValueAxis();
valueAxis.axisAlpha = 0;
valueAxis.gridAlpha = 0.1;
chart1.addValueAxis(valueAxis);
valueAxis.integersOnly = true;

var graph1 = new AmCharts.AmGraph(AmCharts.themes.light);
graph1.type = "column";
graph1.title = "Ano";
graph1.colors = ["#44789D"];
graph1.valueField = "valor";
graph1.fillAlphas =  1,
graph1.balloonText = "[[value]]%";
graph1.labelText = "[[value]]%";
// chart1.addTitle("Desglose de principales arrendatarios por giro económico (% rentas)", 25, "#4a5158", 1, true);
chart1.addGraph(graph1);
chart1.creditsPosition = "top-right";
chart1.write("chart");




// el nuevo
var chartDataNew = [
        {
            giro: otrosLabel[0],
            valor: 3.8
        }, {
            giro: otrosLabel[1],
            valor: 2.3
        }, {
            giro: otrosLabel[2],
            valor: 1.8
        } ,{
            giro: otrosLabel[3],
            valor: 1.6
        }, {
            giro: otrosLabel[4],
            valor: 1.2
        },{
            giro: otrosLabel[5],
            valor: 0.8
        },{
            giro: otrosLabel[6],
            valor: 0.5
        }
    ];
var chartnew = new AmCharts.AmSerialChart();

chartnew.dataProvider = chartDataNew;
chartnew.categoryField = "giro";
chartnew.theme = "light";
chartnew.startDuration = 2;
chartnew.rotate = true;
chartnew.labelRadius = -25;
chartnew.labelText = "[[percents]]%";
chartnew.colors = ["#44789D"];


var categoryAxis = chart.categoryAxis;
categoryAxis.gridPosition = "start";

var valueAxis = new AmCharts.ValueAxis();
valueAxis.axisAlpha = 0;
valueAxis.gridAlpha = 0.1;
chart1.addValueAxis(valueAxis);
valueAxis.integersOnly = true;

var graphnew = new AmCharts.AmGraph(AmCharts.themes.light);
graphnew.type = "column";
graphnew.title = "Ano";
graphnew.colors = ["#44789D","#7BA3D7","#A5A5A5","#522424","#45D2A5","#E5A0A5","#8B921E"];
graphnew.valueField = "valor";
graphnew.fillAlphas =  1,
graphnew.balloonText = "[[value]]%";
graphnew.labelText = "[[value]]%";
chartnew.addGraph(graphnew);
chartnew.creditsPosition = "top-right";
chartnew.write("chartotros");


// chart 2
var chartPie1 = new AmCharts.AmPieChart();
chartPie1.dataProvider = [{
        "activo": hover2[0],
        "valor": 60

    }, {
        "activo": hover2[1],
        "valor": 36

    }, {
        "activo": hover2[2],
         "valor": 4

    }];

chartPie1.titleField = "activo";
chartPie1.accessibleTitle= "Prueba"
//chartPie1.innerRadius = "50%";
chartPie1.valueField = "valor";
chartPie1.outlineColor = "#FFFFFF";
chartPie1.outlineAlpha = 0.8;
chartPie1.outlineThickness = 2;
chartPie1.labelRadius = -25;
chartPie1.labelText = "[[value]]%";
chartPie1.colors=["#44789D","#7BA3D7","#5D606B"];


var legend1 = new AmCharts.AmLegend();
legend1.align = "center";
legend1.markerType = "circle";
legend1.data= [
        {
            title: activoLabel[0],
            color:"#44789D"
        },
        {
            title: activoLabel[1],
           color:"#7BA3D7"
        },
         {
            title: activoLabel[2],
            color:"#5D606B"
         }
        ];

legend1.labelText = "[[title]]";
chartPie1.balloonText = "[[title]]";

chartPie1.addLegend(legend1);
chartPie1.write("chart2");


var chartSettings = {

  "balloonText": "[[title]]",
  "legend":{
    "align" : "center",
    "markerType" : "circle",

    "data": [
        {
            title: "USD",
            color:"#44789D" // azulito
        },
        {
            title: "MX",
           color:"#7BA3D7" //amarillo
        }
        ]
},
  "dataProvider": [
        {
            "mon": "USD: 82%",
            "valor": 82,
        }, {
            "mon": "MXN: 18%",
            "valor": 18
        }
    ],
  "labelText" : "[[value]]% ",
 // "innerRadius" : "50%",
  "colors":["#44789D","#7BA3D7"],
  "labelRadius" : -25,
  "outlineAlpha": 0.8,
  "outlineThickness":2,
  "theme": "light",
  "titleField": "mon",
  "type": "pie",
  "valueField": "valor"
};

var chart = AmCharts.makeChart( "chart4", chartSettings );

// chart 5
var chartPieData4 = [
    {
        ven: "0-1: 8%",
        valor: 8
    }, {
        ven: "1-3: 13%",
        valor: 13
    }, {
        ven: "3-5: 23%",
        valor: 23
    } ,{
        ven: "5-7: 12%",
        valor: 12
    }, {
        ven: "7-10: 18%",
        valor: 18
    },{
        ven: "+10: 26%",
        valor: 26
    }
];
var chartPie4 = new AmCharts.AmPieChart();

chartPie4.dataProvider = chartPieData4;
chartPie4.titleField = "ven";
chartPie4.valueField = "valor";
chartPie4.outlineColor = "#FFFFFF";
// chartPie4.innerRadius = "50%";
chartPie4.outlineAlpha = 0.8;
chartPie4.outlineThickness = 2;
chartPie4.labelRadius = -25;
chartPie4.labelText = "[[value]]%";
chartPie4.colors=["#44789D","#7BA3D7","#5D606B","#19242a","#879FAD","#D1D2DA"];
var legend4 = new AmCharts.AmLegend();
legend4.align = "center";
legend4.markerType = "circle";
legend4.valueText = "[[title]]";

legend4.data= [
        {
            title: "0-1",
            color:"#44789D" // azulito
        },
        {
            title: "1-3",
           color:"#7BA3D7" //amarillo
        },
         {
            title: "3-5",
            color:"#5D606B" //verde
         }         ,
        {
            title: "5-7",
           color:"#322C44" //rojito
        },
         {
            title: "7-10",
            color:"#879FAD" //violetica
         },
         {
            title: "+10",
            color:"#D1D2DA" //azul oscuro
         }
        ];

chartPie4.addLegend(legend4);
chartPie4.balloonText = "[[title]]";
chartPie4.write("chart5");


//chart 6

if (locale == "es") {
    var ingresostotales = "Ingresos totales";
    var ion = "ION";
    var uafirda = "UAFIRDA";
    var ffo = "FFO";

}
else {
    var ingresostotales = "Total revenues";
    var ion = "NOI";
    var uafirda = "EBITDA";
    var ffo = "FFO";
}
var chart = AmCharts.makeChart("chart7", {
    "type": "serial",
     "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "colors":["#44789D","#7BA3D7","#5D606B","#19242a","#879FAD","#D1D2DA"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "labelText":"$[[value]]",
    "trendLines": [],
    "graphs": [
        {
            "balloonText": ingresostotales+":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": ingresostotales,
            "type": "column",
            "valueField": "ingresostotales",
            "labelText": "[[indicadores]]%",
            "labelPosition":"inside"
        },
        {
            "balloonText": ion+":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": ion,
            "type": "column",
            "valueField": "ion",
            "labelText": "[[indicadores1]]%",
            "labelPosition":"inside"
        },
        {
            "balloonText": uafirda+":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-4",
            "lineAlpha": 0.2,
            "title": uafirda,
            "type": "column",
            "valueField": "uafirda",
            "labelText": "[[indicadores2]]%",
            "labelPosition":"inside"
        },
        {
            "balloonText": ffo+":$[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": ffo,
            "type": "column",
            "valueField": "ffo",
            "labelText": "[[indicadores3]]%",
            "labelPosition":"inside"
        }

    ],
    "guides": [],
    "valueAxes": [
        {
      "unit":"$",
      "unitPosition": "left",
            "id": "ValueAxis-1",
            "position": "left",
            "axisAlpha": 0
        }
    ],"legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,

        "color":"gray",
        "textClickEnabled": true
    },
    "balloon": {},
    "titles": [],
    "dataProvider": [
        {
            "year": year[1],
            "ingresostotales": 93,
            "ion": 81,
            "uafirda": 67,
            "ffo":68,
            "indicadores":100,
            "indicadores1":86.8,
            "indicadores2":71.8,
            "indicadores3":73.6
        },
        {
            "year": year[2],
            "ingresostotales": 102,
            "ion": 87,
            "uafirda": 74,
            "ffo":72,
            "indicadores":100,
            "indicadores1":85.8,
            "indicadores2":72.8,
            "indicadores3":71.3
        },
        {
            "year": year[3],
            "ingresostotales": 118,
            "ion": 105,
            "uafirda": 89,
            "ffo":80,
            "indicadores":100,
            "indicadores1":88.5,
            "indicadores2":75.0,
            "indicadores3":67.8
        },
        {
            "year": year[4],
            "ingresostotales": 134,
            "ion": 119,
            "uafirda": 103,
            "ffo":101,
            "indicadores":100,
            "indicadores1":88.8,
            "indicadores2":76.9,
            "indicadores3":75.1
        },
         {
            "year": year[5],
            "ingresostotales": 158,
            "ion": 140,
            "uafirda": 124,
            "ffo":118,
            "indicadores":100,
            "indicadores1":88.9,
            "indicadores2":78.6,
            "indicadores3":75.0
        }
    ],
    "export": {
        "enabled": true
     }

});

//chart 8
if (locale == "es") {

    var ion = "ION";
    var uafirda = "UAFIRDA";
    var ffo = "FFO";

}
else {

    var ion = "NOI";
    var uafirda = "EBITDA";
    var ffo = "FFO";
}

chart.addTitle(last, 20, "#4a5158", 1, true);
