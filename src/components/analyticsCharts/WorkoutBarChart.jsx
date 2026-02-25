import { BarChart, Bar, XAxis,YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";



export default function WorkoutBarChart({ data }){
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{top: 25, right: 20, bottom:-10, left:0}}>
        <CartesianGrid strokeDasharray="1 1"/>
        <XAxis dataKey="type"/>
        <YAxis/>
        <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }} cursor={{ fill: "rgba(170, 221, 0, 0.05)" }}/>
        <Bar dataKey="count" fill="#aadd00"/>
      </BarChart>
    </ResponsiveContainer>
  );
}