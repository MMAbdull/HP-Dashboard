import { useState } from "react";
import TimeRangeFilter from "../components/analyticsFilters/TimeRangeFilter";
import TrainingTypeFilter from "../components/analyticsFilters/TrainingTypeFilter";
import MuscleGroupFilter from "../components/analyticsFilters/MuscleGroupFilter";
import EquipmentFilter from "../components/analyticsFilters/EquipmentsFilter";
export default function Analytics() {
  const [dataRange, setDataRange] = useState("Today");
  const [trainingType, setTrainingType] = useState("All");
  const [muscleGroup,setMuscleGroup] = useState([]);
  const [equipment,setEquipment] = useState([]);
  return (
    <main className="min-h-screen p-5">
      <h1 className="text-gray-950 text-xl">Filters</h1>
      <section className="flex items-start gap-5">
        <TimeRangeFilter 
        value ={dataRange}
        onChange={setDataRange}
        /> 
        <TrainingTypeFilter
        value = {trainingType}
        onChange={setTrainingType}
        />
        <MuscleGroupFilter
        value={muscleGroup}
        onChange={setMuscleGroup}
        />
        <EquipmentFilter
        value={equipment}
        onChange={setEquipment}
        />
        
      </section>
    </main>
  );
}


