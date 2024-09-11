// Write your code here
// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const DataFormatter = number => {
    if (number >= 1) {
      return `${(number * 1500).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="graph-cont">
      <h1 className="main-heading">Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill=" #f54394"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
