export default function TrainingTypeFilter({ value, onChange }) {
  const options = ["All", "Strength", "Cardio", "Mobility", "Mixed"];

  const activeIndex = options.indexOf(value);
  const width = 100 / options.length;

  return (
    <>

      <div className="hidden md:block">
        <div className="relative grid grid-cols-5 border border-gray-950 rounded-xl p-0.5">

          <div
            className="absolute inset-y-0 rounded-xl bg-[#aadd00] transition-all duration-200"
            style={{
              width: `${width}%`,
              left: `${activeIndex * width}%`,
            }}
          />

          {options.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`
                relative z-10 
                px-3 py-1.5
                text-sm font-medium
                cursor-pointer
                transition-all duration-200
                ${value === option ? "text-white" : "text-gray-950"}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>


      <div className="md:hidden flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`
              px-3 py-2
              text-sm font-medium
              rounded-lg
              border
              transition-all duration-200
              ${value === option
                ? "bg-[#aadd00] text-black border-[#aadd00]"
                : "bg-white text-gray-950 border-gray-300"}
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}