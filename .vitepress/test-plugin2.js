import markdownIt from 'markdown-it'
import markdownItChart from './plugins/md-chart'


const mdi = markdownIt()
mdi.use(markdownItChart)

const src = `\`\`\`chart
{
  "type": "pie",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "datasets": [
      {
        "data": [
          300,
          50,
          100
        ],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {}
}
\`\`\``


console.log( mdi.render(src) )

