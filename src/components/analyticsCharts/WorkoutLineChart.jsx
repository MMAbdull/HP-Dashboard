import { LineChart, Line, XAxis,YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

const data = [
  {day:"Mon",workouts:2},
  {day:"Tue",workouts:1},
  {day:"Wed",workouts:2},
  {day:"Thu",workouts:3},
  {day:"Fri",workouts:4},
  {day:"Sat",workouts:1},
  {day:"Sun",workouts:2},
]

export default function WorkoutLineChart() {
  return(
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{top: 25,right: 20,bottom: 5,left: 0 }}>
        <CartesianGrid strokeDasharray="1 1"/>
        <XAxis dataKey="day"/>
        <YAxis/>
        <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }}/>
        <Line type="monotone" dataKey="workouts" stroke="#aadd00" strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
}
