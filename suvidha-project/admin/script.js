// Donut
new Chart(donutChart, {
  type: 'doughnut',
  data: {
    labels: ['Electricity','Water','Gas','Garbage'],
    datasets: [{
      data: [412,389,156,290],
      backgroundColor: ['#2563eb','#06b6d4','#f97316','#16a34a']
    }]
  }
});

// Line
new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [
      {
        label:'Filed',
        data:[45,52,38,61,54,32,28],
        borderColor:'#2563eb',
        fill:true
      },
      {
        label:'Resolved',
        data:[38,45,35,52,48,28,25],
        borderColor:'#16a34a',
        fill:true
      }
    ]
  }
});

// Bar
new Chart(barChart, {
  type:'bar',
  data:{
    labels:['Aug','Sep','Oct','Nov','Dec','Jan'],
    datasets:[{
      data:[32,35,41,38,42,45],
      backgroundColor:'#2563eb'
    }]
  }
});

// Area
new Chart(areaChart, {
  type:'bar',
  data:{
    labels:['Rohini','Dwarka','Mayur Vihar','Saket','Lajpat Nagar','Karol Bagh','Pitampura','Janakpuri'],
    datasets:[{
      data:[180,155,140,125,128,115,108,98],
      backgroundColor:'#2563eb'
    }]
  },
  options:{ indexAxis:'y' }
});
