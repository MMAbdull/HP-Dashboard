import { useState } from "react";
import TimeRangeFilter from "../components/analyticsFilters/TimeRangeFilter";
import TrainingTypeFilter from "../components/analyticsFilters/TrainingTypeFilter";
import MuscleGroupFilter from "../components/analyticsFilters/MuscleGroupFilter";
export default function Analytics() {
  const [dataRange, setDataRange] = useState("Today");
  const [trainingType, setTrainingType] = useState("All");
  const [muscleGroup,setMuscleGroup] = useState([]);

  return (
    <main className="min-h-screen p-6">
      <section className="flex items-center gap-4">
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
      </section>
    </main>
  );
}


