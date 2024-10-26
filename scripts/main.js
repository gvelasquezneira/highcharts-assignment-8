// Create the first chart (line chart)
Highcharts.chart('container', {
    title: {
        text: 'Retail Theft in Gainesville',
        align: 'left'
    },
    subtitle: {
        text: 'Under Florida Statute 812.015. Source: <a href="https://data.cityofgainesville.org/Public-Safety/Crime-Responses/gvua-xt9q/about_data" target="_blank">DataGNV</a>.',
        align: 'left'
    },
    yAxis: {
        title: {
            text: 'Number of Retail Thefts'
        },
        min: 0,
        accessibility: {
            rangeDescription: 'Range: 0 to 1455'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2011 to 2023'
        }
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2011
        }
    },
    series: [{
        name: 'Retail Thefts',
        data: [
            1066, 1159, 1329, 1101, 1199, 1238, 1210, 1455, 1256, 983, 792, 887, 948
        ]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
        }]
    }
});

// Fetch map data and create the map chart
(async () => {
    const topology = await fetch('https://code.highcharts.com/mapdata/custom/world.topo.json')
        .then(response => response.json());
    const data = await fetch('https://www.highcharts.com/samples/data/world-population.json')
        .then(response => response.json());

    Highcharts.mapChart('container2', {
        chart: {
            map: topology
        },
        title: {
            text: 'World population 2016 by country'
        },
        subtitle: {
            text: 'Demo of Highcharts map with bubbles'
        },
        accessibility: {
            description: 'We see how China and India by far are the countries with the largest population.'
        },
        legend: {
            enabled: false
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        mapView: {
            fitToGeometry: {
                type: 'MultiPoint',
                coordinates: [
                    [-164, 54],   // Alaska west
                    [-35, 84],    // Greenland north
                    [179, -38],   // New Zealand east
                    [-68, -55]    // Chile south
                ]
            }
        },
        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Population 2016',
            joinBy: ['iso-a3', 'code3'],
            data: data,
            minSize: 4,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
            }
        }]
    });
})();
