    
    var chartRelevantes;    
    var chartPie6;
    var chartPie7;
    var chart;

    if (locale =="es")
     {  
      var tasa1 ="Tasa Fija";
      var tasa2 ="Tasa Variable";
    }
    else{
      var tasa1 ="Fixed Rate";
      var tasa2 ="Variable Rate";      
    }

  

    var chartPieData6 = [
        {
            tasa: tasa1,
            valor: 100
        }, {
            tasa: tasa2,
            valor: 0
        }
    ];
    var chartPieData7 = [
        {
            mon: "USD",
            valor: 100
        }, {
            mon: "MXN",
            valor: 0
        }
    ];

    var chartDataR = [
        {
            ano: "2016",
            valor: 0
        }, {
            ano: "2017",
            valor: 0
        }, {
            ano: "2018",
            valor: 22548
        } ,{
            ano: "2019",
            valor: 23584
        }, {
            ano: "2020",
            valor: 668236
        }
    ];


    AmCharts.ready(function () {
      AmCharts.theme = AmCharts.themes.light;
        // Create Pie       
        chartPie6 = new AmCharts.AmPieChart();
        chartPie7 = new AmCharts.AmPieChart();

        //Create Serial        
        chartRelevantes = new AmCharts.AmSerialChart();
        chart = new AmCharts.AmSerialChart();

      

        chartRelevantes.dataProvider = chartDataR;        
        chartRelevantes.categoryField = "ano";
        chartRelevantes.startDuration = 1;     
        //chartRelevantes.rotate = true; 
        chartRelevantes.labelRadius = -25;
        chartRelevantes.labelText = "[[percents]]%";
        
        
        // AXES
        // Category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridPosition = "start";
        // Value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.axisAlpha = 0;
        valueAxis.gridAlpha = 0.1;        
        chartRelevantes.addValueAxis(valueAxis);

        // GRAPHS
        // first graph
        var graph1 = new AmCharts.AmGraph();
        graph1.type = "column";
        graph1.title = "Giro Economico";
        graph1.valueField = "valor";
        graph1.fillAlphas =  1,
        graph1.balloonText = "[[value]]";
        graph1.labelText = "[[value]]";     
        chartRelevantes.addGraph(graph1);      

        chartRelevantes.creditsPosition = "top-right";


        // PIE CHART
        
       

        chartPie6.dataProvider = chartPieData6;
        chartPie6.titleField = "tasa";
        chartPie6.innerRadius = "50%";
        chartPie6.valueField = "valor";
        chartPie6.outlineColor = "#FFFFFF";
        chartPie6.outlineAlpha = 0.8;
        chartPie6.outlineThickness = 2;
        chartPie6.labelRadius = -25;
        chartPie6.labelText = "[[percents]]%";
        var legend6 = new AmCharts.AmLegend();
        legend6.align = "center";
        legend6.borderAlpha = 0.2;
        legend6.markerType = "circle";
        chartPie6.balloonText = "[[title]]<br>([[percents]]%)</span>";
        chartPie6.addLegend(legend6);

        chartPie7.dataProvider = chartPieData7;
        chartPie7.titleField = "mon";
        chartPie7.innerRadius = "50%";
        chartPie7.valueField = "valor";
        chartPie7.outlineColor = "#FFFFFF";
        chartPie7.outlineAlpha = 0.8;
        chartPie7.outlineThickness = 2;
        chartPie7.labelRadius = -25;
        chartPie7.labelText = "[[percents]]%";

        var legend4 = new AmCharts.AmLegend();
        legend4.align = "center";
        legend4.borderAlpha = 0.2;
        legend4.markerType = "circle";
        chartPie7.balloonText = "[[title]]<br>([[percents]]%)</span>";
        chartPie7.addLegend(legend4);

        // WRITE
        
        chartRelevantes.write("chartRelevantes");
        chartPie6.write("chartPieTasa");
        chartPie7.write("chartPieComp");
    });

