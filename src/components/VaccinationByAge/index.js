// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)
  return (
    <div className="graph-cont">
      <h1 className="main-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={400}>
        <Pie
          cx="50%"
          cy="30%"
          data={data}
          startAngle={0}
          endAngle={360}
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="44-60" fill="#2cc6c6" />
          <Cell name="Above 60" fill="#a3df9f" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
