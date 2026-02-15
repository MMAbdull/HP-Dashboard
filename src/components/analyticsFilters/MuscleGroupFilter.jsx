export default function MuscleGroupFilter({value,onChange}){
  const groups = ["Chest","Back","Legs","Shoulders","Arms","Core"];

  function toggle(group){
    if (value.includes(group)){
      onChange(value.filter(item => item!==group));
    }
    else {
      onChange([...value,group]);
    }
  }
  return(
    <div className="flex flex-wrap gap-1">
      {groups.map(group => {
        const active = value.includes(group);
        return(
          <button
          key={group}
          onClick={() => toggle(group)}
          className={`
            px-4 py-2 rounded-xl text-lg font-medium
            transition-all duration-200
            ${
              active
              ?"bg-[#aadd00] text-gray-950"
              :"bg-gray-950 text-white hover:text-[#aadd00]"
            }
          `}
          >
            {group}
          </button>
        );
      })}

    </div>
  );
}