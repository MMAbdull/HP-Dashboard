import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";



export default function WorkoutComposedChart({ data }) {
    console.log("workoutComposedChart", data);
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ComposedChart data={data} margin={{top: 25, right: 20, bottom: -10, left:0}}>
        <CartesianGrid strokeDasharray="1 1"/>
        <XAxis dataKey="day"/>
        <YAxis/>
        <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }}/>
        <Legend/>
        <Bar dataKey="workouts" fill="#aadd00"/>
        <Line type="monotone" dataKey="calories" stroke="#aadd00" strokeWidth={2}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
}