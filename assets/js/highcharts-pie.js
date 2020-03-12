

Highcharts.chart('temperature-area-chart', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Pump temperature over the week'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        // plotBands: [{ // visualize the weekend
        //     from: 4.5,
        //     to: 6.5,
        //     color: 'rgba(68, 170, 213, .2)'
        // }]
    },
    yAxis: {
        title: {
            text: 'Temperature Celcius'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'T1',
        data: [5.1, 5, 5, 5.1, 5.2, 5.1, 5]
    }, {
        name: 'T2',
        data: [20, 19.9, 20.1, 21, 18, 19, 20]
    },
    {
        name: 'T3',
        data: [19, 20, 21, 19, 20, 18, 19]
    },
    {
        name: 'T4',
        data: [21, 21,19, 21, 20, 21, 21]
    },
    {
        name: 'Dew Poin Temp',
        data: [6.7, 6.7, 6.8, 6.8, 6.7, 6.5, 6.5]
    },
    {
        name: 'Sec Flow',
        data: [21, 20, 20, 20, 21, 22, 21]
    },
    {
        name: 'Pump Avg Speed',
        data: [54, 55, 54, 55, 55, 55, 55]
    },
    {
        name: 'Valve Demand',
        data: [28, 25, 23, 22, 25, 26, 22]
    }]
});


Highcharts.chart('speed', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Pump1 Speed distribution'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'RPM'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{point.y:.1f} %</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['100', 24.2],
            ['200', 20.8],
            ['300', 14.9],
            ['400', 13.7],
            ['500', 13.1],
            ['600', 12.7],
            ['700', 12.4],
            ['800', 12.2],
            ['900', 12.0],
            ['1000', 11.7],
            ['1100', 11.5],
            ['1200', 11.2],
            ['1300', 11.1],
            ['1400', 10.6],
            ['1500', 10.6],
            ['1600', 10.6],
            ['1700', 10.3],
            ['1800', 9.8],
            ['1900', 9.3],
            ['2000', 9.3]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});


Highcharts.chart('speed-pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Pump 2 %',
        
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['100', 58.9],
            ['200', 13.29],
            ['300', 13],
            ['400', 3.78],
            ['500', 3.43],
            
        ]
    }]
});
