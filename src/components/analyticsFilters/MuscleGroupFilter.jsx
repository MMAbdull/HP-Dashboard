export default function MuscleGroupFilter({ value, onChange }) {
  const groups = ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core"];

  function toggle(group) {
    if (value.includes(group)) {
      onChange(value.filter(item => item !== group));
    }
    else {
      onChange([...value, group]);
    }
  }
  return (
    <div className="flex flex-wrap gap-1">
      {groups.map(group => {
        const active = value.includes(group);
        return (
          <button
            key={group}
            onClick={() => toggle(group)}
            className={`
            px-3 py-2 rounded-xl text-sm font-medium
            transition-all duration-200
            ${active
                ? "bg-[#aadd00] text-white border border-[#aadd00]"
                : "bg-white text-gray-950 border hover:bg-[#aadd00] hover:text-white"
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