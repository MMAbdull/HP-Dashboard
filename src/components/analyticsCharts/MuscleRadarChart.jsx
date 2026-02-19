import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer, Radar } from "recharts";

const data = [
  { muscle: "Chest", value: 8 },
  { muscle: "Back", value: 6 },
  { muscle: "Legs", value: 9 },
  { muscle: "Shoulders", value: 5 },
  { muscle: "Arms", value: 7 },
  { muscle: "Core", value: 4 },
]

export default function MuscleRadarChart() {
  return(
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart cx="50%" cy="50%" outerRadius="100" data={data}>
        <PolarGrid/>
        <PolarAngleAxis dataKey="muscle" tick={{fontSize:18}}/>
        <PolarRadiusAxis angle={90} tick={{ fill: "#ffffff", fontSize: 12 }}/>
        <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)",border:"none",borderRadius:"8px" }}/>
        <Radar dataKey="value" stroke="#aadd00" fill="#aadd00" fillOpacity={0.4}/>
      </RadarChart>
    </ResponsiveContainer>
  );
}