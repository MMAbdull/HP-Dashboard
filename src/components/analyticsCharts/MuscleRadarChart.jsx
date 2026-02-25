import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer, Radar } from "recharts";



export default function MuscleRadarChart({ data }) {
  return(
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart cx="50%" cy="50%" outerRadius="100" data={data}>
        <PolarGrid/>
        <PolarAngleAxis dataKey="muscle" tick={{fontSize:18}}/>
        <PolarRadiusAxis angle={90} tick={{ fill: "#ffffff", fontSize: 12 }}/>
        <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }}/>
        <Radar dataKey="workouts" stroke="#aadd00" fill="#aadd00" fillOpacity={0.2}/>
      </RadarChart>
    </ResponsiveContainer>
  );
}