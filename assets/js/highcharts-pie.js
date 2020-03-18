

area_chart = Highcharts.chart('temperature-area-chart', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: '',
        
    },
    legend: {
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'top',
        x:50,
        // y:-10,
        floating: false,
        borderWidth: 0,
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
    // tooltip: {
    //     shared: true,
    //     valueSuffix: ' units'
    // },
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
        id: 't1', 
        data: [5.1, 5, 5, 5.1, 5.2, 5.1, 5]
    }, {
        name: 'T2',
        id: 't2',
        data: [20, 19.9, 20.1, 21, 18, 19, 20]
    },
    {
        name: 'T3',
        id: 't3',
        data: [19, 20, 21, 19, 20, 18, 19]
    },
    {
        name: 'T4',
        id: 't4',
        data: [21, 21,19, 21, 20, 21, 21]
    },
    {
        name: 'Dew Poin Temp',
        id: 'dpt',
        data: [6.7, 6.7, 6.8, 6.8, 6.7, 6.5, 6.5]
    },
    {
        name: 'Sec Flow',
        id: 'sf',
        data: [21, 20, 20, 20, 21, 22, 21]
    },
    {
        name: 'Pump Avg Speed',
        id: 'pas',
        data: [54, 55, 54, 55, 55, 55, 55]
    },
    {
        name: 'Valve Demand',
        id: 'vd',
        data: [28, 25, 23, 22, 25, 26, 22]
    }]
});

// area_chart.get('t1').remove();
// area_chart.get('t2').remove();
// area_chart.get('t3').remove();
// area_chart.get('t4').remove();
// area_chart.get('dpt').remove();
// area_chart.get('sf').remove();


data_speed = [['100', 24.2],
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
['2000', 9.3]];

speed_bar = Highcharts.chart('speed', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Pump1 Speed distribution'
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'RPM'
        },
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
            text: 'Time'
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
        data: data_speed,
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

speed_bar.series[0].addPoint(['600', 50], true, false);

semipie=Highcharts.chart('speed-pie', {
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
            ['300', 10],
            ['400', 3.78],
            ['500', 3.43],
            
        ]
    }]
});

semipie.series[0].addPoint(['600', 3], true, false);




$('.area-chart-toggle').click(function(){
    
    if(!$(this).hasClass('active'))
    {
        $('.area-chart-toggle').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('month'))
        {
            area_chart.get('t2').setData([2, 3, 4, 51, 5.2, 3, 2, 2, 3, 4, 51, 5.2, 3, 2, 21, 2, 3, 4, 51, 5.2, 3, 2, 2, 3, 4, 51, 5.2, 3, 2, 21]);
            area_chart.get('t3').setData([14, 13, 14, 51, 15.2, 13, 12, 12, 33, 44, 51, 25.2, 23, 42, 21, 25, 36, 48, 51, 35.2, 33, 25, 62, 53, 44, 51, 5.2, 35, 25, 21]);
            area_chart.get('t1').setData([24, 23, 54, 5, 35.2, 53, 72, 62, 53, 48, 51, 85.2, 73, 32, 81, 45, 66, 88, 21, 75.2, 43, 65, 42, 53, 84, 41, 55.2, 35, 25, 21]);
            area_chart.get('t4').setData([54, 33, 44, 25, 55.2, 43, 32, 52, 23, 18, 11, 25.2, 43, 62, 41, 55, 36, 58, 41, 25.2, 53, 25, 12, 23, 54, 21, 35.2, 65, 55, 41]);
            area_chart.get('dpt').setData([64, 23, 14, 65, 15.2, 63, 32, 62, 83, 98, 61, 65.2, 23, 12, 61, 55, 66, 98, 31, 25.2, 53, 75, 32, 53, 64, 91, 35.2, 85, 55, 51]);
            area_chart.get('sf').setData([34, 53, 44, 35, 65.2, 53, 52, 42, 23, 78, 61, 55.2, 13, 32, 11, 25, 46, 38, 61, 45.2, 23, 75, 62, 43, 34, 91, 15.2, 25, 65, 71]);
            area_chart.get('pas').setData([14, 59, 124, 15, 65.2, 23, 52, 62, 23, 48, 61, 55.2, 63, 42, 51, 95, 36, 28, 41, 25.2, 63, 25, 62, 83, 24, 51, 85.2, 85, 15, 51]);
            area_chart.get('vd').setData([4, 13, 24, 55, 85.2, 103, 92, 82, 73, 68, 51, 45.2, 33, 22, 11, 25, 36, 48, 51, 65.2, 63, 75, 82, 73, 64, 51, 45.2, 45, 25, 21]);
            area_chart.xAxis[0].setCategories(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']);
        }
        else if($(this).hasClass('year'))
        {
            area_chart.get('t2').setData([2, 3, 4, 51, 5.2, 3, 2, 2, 3, 4, 51, 5.2]);
            area_chart.get('t3').setData([14, 13, 14, 51, 15.2, 13, 12, 12, 33, 44, 51, 25.2]);
            area_chart.get('t1').setData([24, 23, 54, 5, 35.2, 53, 72, 62, 53, 48, 51, 85.2]);
            area_chart.get('t4').setData([54, 33, 44, 25, 55.2, 43, 32, 52, 23, 18, 11, 25.2]);
            area_chart.get('dpt').setData([64, 23, 14, 65, 15.2, 63, 32, 62, 83, 98, 61, 65.2]);
            area_chart.get('sf').setData([34, 53, 44, 35, 65.2, 53, 52, 42, 23, 78, 61, 55.2]);
            area_chart.get('pas').setData([14, 59, 124, 15, 65.2, 23, 52, 62, 23, 48, 61, 58]);
            area_chart.get('vd').setData([4, 13, 24, 55, 85.2, 103, 92, 82, 73, 68, 51, 22]);
            area_chart.xAxis[0].setCategories(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
        }
        else if($(this).hasClass('today'))
        {
            area_chart.get('t2').setData([2, 3, 4, 51, 5.2, 3, 2, 2, 3, 4, 51, 5.2, 2, 3, 4, 51, 5.2, 3, 2, 2, 3, 4, 51, 5.2]);
            area_chart.get('t3').setData([14, 13, 14, 51, 15.2, 13, 12, 12, 33, 44, 51, 25.2, 24, 23, 54, 5, 35.2, 53, 72, 62, 53, 48, 51, 85.2]);
            area_chart.get('t1').setData([24, 23, 54, 5, 35.2, 53, 72, 62, 53, 48, 51, 85.2], 64, 23, 14, 65, 15.2, 63, 32, 62, 83, 98, 61, 65.2);
            area_chart.get('t4').setData([54, 33, 44, 25, 55.2, 43, 32, 52, 23, 18, 11, 25.2, 14, 59, 124, 15, 65.2, 23, 52, 62, 23, 48, 61, 58]);
            area_chart.get('dpt').setData([64, 23, 14, 65, 15.2, 63, 32, 62, 83, 98, 61, 65.2, 34, 53, 44, 35, 65.2, 53, 52, 42, 23, 78, 61, 55.2]);
            area_chart.get('sf').setData([34, 53, 44, 35, 65.2, 53, 52, 42, 23, 78, 61, 55.2, 34, 53, 44, 35, 65.2, 53, 52, 42, 23, 78, 61, 55.2]);
            area_chart.get('pas').setData([14, 59, 124, 15, 65.2, 23, 52, 62, 23, 48, 61, 58, 2, 3, 4, 51, 5.2, 3, 2, 2, 3, 4, 51, 5.2]);
            area_chart.get('vd').setData([4, 13, 24, 55, 85.2, 103, 92, 82, 73, 68, 51, 22, 14, 13, 14, 51, 15.2, 13, 12, 12, 33, 44, 51, 25.2]);
            area_chart.xAxis[0].setCategories(['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']);
        }
        else if($(this).hasClass('week'))
        {
            area_chart.get('t2').setData([2, 3, 4, 51, 5.2, 3, 2]);
            area_chart.get('t3').setData([14, 13, 14, 51, 15.2, 13, 12]);
            area_chart.get('t1').setData([24, 23, 54, 5, 35.2, 53, 72]);
            area_chart.get('t4').setData([54, 33, 44, 25, 55.2, 43, 32]);
            area_chart.get('dpt').setData([64, 23, 14, 65, 15.2, 63, 32]);
            area_chart.get('sf').setData([34, 53, 44, 35, 65.2, 53, 52]);
            area_chart.get('pas').setData([14, 59, 124, 15, 65.2, 23, 52]);
            area_chart.get('vd').setData([4, 13, 24, 55, 85.2, 103, 92]);
            area_chart.xAxis[0].setCategories([
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ]);
        }
    }
    

    
});