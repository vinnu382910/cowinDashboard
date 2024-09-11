// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  console.log(data)
  return (
    <div className="graph-cont">
      <h1 className="main-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Felmale" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
