export default function ProfileInfo() {

  const info = [
    { label: "Name", value: "Mohammad Abdullah" },
    { label: "Email", value: "momo@gmail.com" },
    { label: "Phone Number", value: "+962 786611833" },
    { label: "Age", value: "25" },
    { label: "Weight", value: "80 kg" },
    { label: "Height", value: "176 cm" },
    { label: "Physique Transformation Type", value: "Lean Muscle Gain" }
  ];

  return (
    <div className="flex flex-col gap-4">

      {info.map((item) => (
        <div
          key={item.label}
          className="border border-[#aadd00]/50 rounded-xl px-4 py-3 bg-gray-900"
        >
          <p className="text-gray-400 text-sm mb-1">
            {item.label}
          </p>

          <div className="flex justify-between items-center">
            <p className="text-white font-medium">
              {item.value}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}