import { useState } from "react";
import { workoutsData } from "../components/analyticsData/data";
import { filterWorkouts } from "../components/analyticsData/filters";
import { transformWorkoutsByDay } from "../components/analyticsData/transformer";
import { transformTrainingType } from "../components/analyticsData/transformer";
import { transformCaloriesByDay } from "../components/analyticsData/transformer";
import { transformMuscleEngagment } from "../components/analyticsData/transformer";
import { transformWorkoutsCalories } from "../components/analyticsData/transformer";
import TimeRangeFilter from "../components/analyticsFilters/TimeRangeFilter";
import TrainingTypeFilter from "../components/analyticsFilters/TrainingTypeFilter";
import MuscleGroupFilter from "../components/analyticsFilters/MuscleGroupFilter";
import EquipmentFilter from "../components/analyticsFilters/EquipmentsFilter";
import WorkoutLineChart from "../components/analyticsCharts/WorkoutLineChart";
import WorkoutBarChart from "../components/analyticsCharts/WorkoutBarChart";
import CaloriesAreaChart from "../components/analyticsCharts/CaloriesAreaCharts";
import WorkoutPieChart from "../components/analyticsCharts/WorkoutPieChart";
import MuscleRadarChart from "../components/analyticsCharts/MuscleRadarChart";
import WorkoutComposedChart from "../components/analyticsCharts/WorkoutComposedChart";

export default function Analytics() {
  const [dataRange, setDataRange] = useState("Today");
  const [trainingType, setTrainingType] = useState("All");
  const [muscleGroup, setMuscleGroup] = useState([]);
  const [equipment, setEquipment] = useState([]);
  
  const filteredWorkouts = filterWorkouts(workoutsData, {
    trainingType,
    muscleGroup,
    equipment,
    dataRange,
  });

   const lineChartData = transformWorkoutsByDay(filteredWorkouts);
   const CaloriesData = transformCaloriesByDay(filteredWorkouts);
   const trainingTypeData = transformTrainingType(filteredWorkouts);
   const muscleRadarData = transformMuscleEngagment(filteredWorkouts);
   const workoutsCaloriesData = transformWorkoutsCalories(filteredWorkouts);


  return (
    <main className="min-h-screen p-5">
      <h1 className="text-gray-950 text-xl">Filters</h1>
      <section className="flex items-start gap-5 h-20">
        <TimeRangeFilter
          value={dataRange}
          onChange={setDataRange}
        />
        <TrainingTypeFilter
          value={trainingType}
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="md:col-span-2 bg-gray-950 rounded-2xl p-6 shadow-md text-white">
          <h1 className="text-white text-lg font-semibold mb-4 tracking-wide">Workout Frequency Over Time</h1>
          <WorkoutLineChart data = {lineChartData}/>
        </div>
        <div className="md:col-span-2 bg-gray-950 rounded-2xl p-6 shadow-md text-white">
           <h1 className="text-white text-lg font-semibold mb-4 tracking-wide">Training Type Breakdown</h1>
           <WorkoutBarChart data = {trainingTypeData}/>
        </div>
        <div className="bg-gray-950 rounded-2xl p-6 shadow-md text-white">
           <h1 className="text-white text-lg font-semibold mb-4 tracking-wide">Calories Burned Over Time</h1>
          <CaloriesAreaChart data = {CaloriesData}/>
        </div>
        <div className="bg-gray-950 rounded-2xl p-6 shadow-md text-white">
           <h1 className="text-white text-lg font-semibold mb-4 tracking-wide">Workout Category Share</h1>
          <WorkoutPieChart data = {trainingTypeData}/>
        </div>
        <div className="bg-gray-950 rounded-2xl p-6 shadow-md text-white">
           <h1 className="text-white text-lg font-semibold mb-4 tracking-wide">Muscle Engagement Analysis</h1>
          <MuscleRadarChart data = {muscleRadarData}/>
        </div>
        <div className="bg-gray-950 rounded-2xl p-6 shadow-md text-white">
           <h1 className="text-white text-lg font-semibold mb-4 tracking-wide">Workouts vs Calories Comparison</h1>
          <WorkoutComposedChart data = {workoutsCaloriesData}/>
        </div>
      </section>
    </main>
  );
}


