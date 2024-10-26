// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic 

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Stawberry','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: "Items of fruit that were eaten last week in Diego and Mila's house"
      }
    },
    series: [{
      name: 'Diego',
      data: [6, 1, 0, 4]
    }, {
      name: 'Mila',
      data: [6, 5, 7, 3]
    }]
  });
