export function transformWorkoutsByDay(workouts) {
  const daysMap = {};

  workouts.forEach((workout) => {
    const date = new Date(workout.date);
    const day = date.toLocaleDateString("en-US",{weekday:"short"});
    if(!daysMap[day]) {
      daysMap[day] = 0;
    }
    daysMap[day] +=1;
  });

  return Object.keys(daysMap).map((day) => ({
    day,
    workouts:daysMap[day],
  }));
}

export function transformTrainingType(workouts){
  const map = {};

  workouts.forEach(w => {
    if(!map[w.type]) {
      map[w.type] = 0;
    }
    map[w.type] +=1;
  });

  return Object.keys(map).map(type => ({
    type,
    count:map[type],
  }));

}

export function transformCaloriesByDay(workouts) {
  const map = {};

  workouts.forEach(w => {
    if(!map[w.date]) {
      map[w.date] = 0;
    }
    map[w.date] += w.calories;
  });

  return Object.keys(map).sort((a,b) => new Date(a) - new Date(b))
  .map(date => ({
    day: new Date(date).toLocaleDateString("en-US", {
      weekday:"short",
    }),
    calories : map[date],
  }));
}

export function transformMuscleEngagment(workouts) {
  const map = {};

  workouts.forEach(w => {
    w.muscle.forEach(m =>{
      if(!map[m]) {
        map[m] = 0;
      }
      map[m] +=1;
    });
  });
  return Object.keys(map).map(muscle => ({
    muscle, workouts: map[muscle],
  }));
}

export function transformWorkoutsCalories(workouts) {
  const map = {};

  workouts.forEach(w => {
    if(!map[w.date]) {
      map[w.date] = { workouts:0 , calories:0};
    }
    map[w.date].workouts +=1;
    map[w.date].calories += w.calories;
  });
  return Object.keys(map)
  .sort((a,b) => new Date(a) - new Date(b))
  .map(date => ({
    day: new Date(date).toLocaleDateString("en-US", {
      weekday:"short",
    }),
    workouts : map[date].workouts,
    calories : map[date].calories,
  }));
}