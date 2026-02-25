export function filterWorkouts(workouts, filters) {
  const { trainingType, muscleGroup, equipment } = filters;
  return workouts.filter((workout) => {

    const matchesTraining = trainingType === "All" || workout.type === trainingType;
    const matchesMuscle = muscleGroup.length === 0 || workout.muscle?.some((m) => muscleGroup.includes(m));
    const matchesEquipment = equipment.length === 0 || workout.equipment?.some((e) => equipment.includes(e));

    return matchesTraining && matchesMuscle && matchesEquipment ;

  });
}