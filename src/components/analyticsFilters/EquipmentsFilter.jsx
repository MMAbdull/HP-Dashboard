import { useState } from "react";

export default function EquipmentFilter({ value, onChange }) {

  const equipment = [
    "Bodyweight",
    "Dumbbells",
    "Barbell",
    "Machines",
    "Reststance Bands",
    "Kettlebells",
    "Medicine Ball",
    "TRX"
  ];
  const [showMore, setShowMore] = useState(false)

  function toggleEquipment(eq) {
    if (value.includes(eq)) {
      onChange(value.filter(item => item !== eq));
    } else {
      onChange([...value, eq]);
    }
  }
  return (
  <div className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-1 items-center">
      {equipment.slice(0, 4).map(eq => (
        <button
          key={eq}
          onClick={() => toggleEquipment(eq)}
          className={`
            px-3 py-1.5
            rounded-xl
            border
            font-medium
            transition-all duration-200
            ${
              value.includes(eq)
                ? "bg-[#aadd00] text-white border-[#aadd00]"
                : "bg-white text-gray-950 border-gray-950"
            }
          `}
        >
          {eq}
        </button>
      ))}

      <button
        onClick={() => setShowMore(!showMore)}
        className="px-3 py-1 text-gray-950 font-medium"
      >
        {showMore ? "- Less" : "+ More"}
      </button>
    </div>

    
    {showMore && (
      <div className="flex flex-wrap gap-1">
        {equipment.slice(4).map(eq => (
          <button
            key={eq}
            onClick={() => toggleEquipment(eq)}
            className={`
              px-3 py-1
              rounded-lg
              border
              font-medium
              transition-all duration-200
              ${
                value.includes(eq)
                  ? "bg-[#aadd00] text-white border-[#aadd00]"
                  : "bg-white text-gray-950 border-gray-950"
              }
            `}
          >
            {eq}
          </button>
        ))}
      </div>
    )}

  </div>
);
}