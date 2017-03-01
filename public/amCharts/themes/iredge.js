AmCharts.themes.iredge = {

	themeName: "iredge",

	AmChart: {

		fontSize: 13,
		color: "#788288",

	},
	AmPieChart: {
		fontFamily: "Open Sans",
		fontSize: 13,
		color: "#788288",
		colors: ["#FCC813","#4da7c1","#3993bb","#2e7bad","#23649e"],
		marginTop: 5,
		labelsEnabled: false,


	},

		AmSerialChart: {
		fontFamily: "Open Sans",
		fontSize: 13,
		color: "#788288",
		colors: ["#868686","#4da7c1","#3993bb","#2e7bad","#23649e"],
		marginTop: 11,




	},

	ChartCursor:{
		cursorColor: "#FCC813",
	},

	CategoryAxis:{
		Color: "#FCC813",
		gridColor: "#CFCFCF",
		gridCount: 10,
	},
	AmStockChart:{
		color: "#788288",
		colors: ["#FCC813","#19242a","#3993bb","#2e7bad","#23649e"]

	},
	PeriodSelector:{
		fontFamily: "Open Sans",
		fromText: "Desde:",
		toText: "Hasta:",
		periodsText: "Periodo:",
	},
	AmLegend:{
		color: "#788288",
	},
	DataSetSelector:{

		compareText: "Comparar con:",
		selectText: "Seleccionar:",

	},



};

myexportConfig = {
    menuTop: 'auto',
    menuLeft: 'auto',
    menuRight: '0px',
    menuBottom: '0px',
    menuItems: [{
        textAlign: 'center',
        onclick: function () {},
        icon: '/amcharts/images/export.png',
        iconTitle: 'Save chart as an image',
        items: [{
            title: 'JPG',
            format: 'jpg'
        }, {
            title: 'PNG',
            format: 'png'
        }, {
            title: 'SVG',
            format: 'svg'
        }]
    }],
    menuItemStyle: {
        backgroundColor: 'transparent',
        rollOverBackgroundColor: '#EFEFEF',
        color: '#000000',
        rollOverColor: '#CC0000',
        paddingTop: '6px',
        paddingRight: '6px',
        paddingBottom: '6px',
        paddingLeft: '6px',
        marginTop: '0px',
        marginRight: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
        textAlign: 'left',
        textDecoration: 'none'
    }
};
