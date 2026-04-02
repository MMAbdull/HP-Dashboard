import Units from "./Unit";
import RestTimer from "./RestTimer";
import DefaultSets from "./DefaultSets";
import DefaultReps from "./DefaultReps";
import WorkoutReminder from "./WorkoutReminder";

export default function WorkoutsSettingsCards(){
  return(
    <div>
    <Units/>
    <RestTimer/>
    <DefaultSets/>
    <DefaultReps/>
    <WorkoutReminder/>
    </div>
  
  );
}