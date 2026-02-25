import { AreaChart, Area, XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export default function CaloriesAreaChart({ data }) {

  return(
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data} margin={{top: 25, right: 20, bottom: -10, left:0 }}>
      <CartesianGrid strokeDasharray="1 1"/>
      <XAxis dataKey="day"/>
      <YAxis/>
      <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }}/>
      <Area type="monotone" dataKey="calories" stroke="#aadd00" fill="#aadd00" fillOpacity={0.2} strokeWidth={3}/>
      </AreaChart>
    </ResponsiveContainer>
  );
}