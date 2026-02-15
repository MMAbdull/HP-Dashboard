export default function TrainingTypeFilter({ value, onChange }) {
  const options = ["All", "Strength", "Cardio", "Mobility", "Mixed"];

  const activeIndex = options.indexOf(value);
  const width = 100 / options.length;

  return (
    <div className="relative grid grid-cols-5 rounded-xl bg-gray-950 p-0.5">
        <div
        className="absolute inset-y-0 rounded-xl bg-[#aadd00] transition-all duration-200"
        style={{
          width:`${width}%`,
          left:`${activeIndex * width}%`,
        }}
        />
        {options.map((option) => (
          <button 
          key={option}
          onClick={() => onChange(option)}
          className={`
            relative z-10 
            px-3 py-1.5 
            text-lg font-medium
            transition-all duration-200
            ${
              value === option
              ? "text-gray-950"
              :"text-white/70 hover:text-[#aadd00]"
            }
            `}
          >
            {option}
          </button>
        ))}
    </div>
  );

}

