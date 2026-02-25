export function filterWorkouts(workouts, filters) {
  const { trainingType, muscleGroup, equipment } = filters;
  return workouts.filter((workout) => {

    const matchesTraining = trainingType === "All" || workout.type === trainingType;
    const matchesMuscle = muscleGroup.length === 0 || workout.muscle?.some((m) => muscleGroup.includes(m));
    const matchesEquipment = equipment.length === 0 || workout.equipment?.some((e) => equipment.includes(e));

    return matchesTraining && matchesMuscle && matchesEquipment ;

  });
}

export function filterByDateRange(workouts,range){
  if(!range || range =="All") return workouts;

  const today = new Date();
  let startDate = new Date();

  switch(range){
    case "Today":
      startDate.setHours(0,0,0,0);
      break;
    
    case "Last 7 Days":
      startDate.setDate(today.getDate()-6);
      break;
    
    case "Last 30 Days":
      startDate.setDate(today.getDate()-29);
      break;
    
    case "Last Month" :
      startDate = new Date(today.getFullYear(),today.getMonth()-1,1);
      break;

    case "Last Year" :
      startDate = new Date(today.getFullYear()-1,today.getMonth(),today.getDate());
      break;
    
    default :
    return workouts;
    }
    return workouts.filter((w) => {
      const workoutDate = new Date(w.date);
      return workoutDate >= startDate && workoutDate <= today;
    });
}