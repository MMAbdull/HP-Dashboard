import { PieChart, Pie, Cell,Tooltip,ResponsiveContainer,Legend } from "recharts";


const COLORS = ["#aadd00", "#00c49f", "#0088fe", "#ffbb28"];

export default function WorkoutPieChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }} labelStyle={{ color: "#aadd00" }} itemStyle={{color:"#aadd00"}}/>
        <Legend/>
        <Pie
          data={data}
          dataKey="count"
          nameKey="type"
          cx="50%"
          cy="50%"
          outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
