import { useEffect, useState } from "react";

export default function StatsWidget() {

  const useCountUp = (end, duration = 1200) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = time - startTime;
        const value = Math.min((progress / duration) * end, end);
        setCount(Math.floor(value));
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
  };

  const widgets = [
    {
      title: "Rest Days",
      value: 12,
      suffix: "",
      gradient: "from-blue-500 via-blue-400 to-cyan-400",
      text: "text-blue-500",
    },
    {
      title: "Total Weight Lifted",
      value: 14230,
      suffix: "kg",
      gradient: "from-purple-500 via-pink-500 to-indigo-400",
      text: "text-purple-400",
    },
    {
      title: "Workout Days",
      value: 76,
      suffix: "",
      gradient: "from-emerald-500 via-lime-400 to-green-300",
      text: "text-emerald-400",
    }
  ];

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {widgets.map((widget) => {
        const count = useCountUp(widget.value);

        return (
          <div
            key={widget.title}
            className={`relative overflow-hidden rounded-2xl p-px bg-linear-to-r ${widget.gradient}`}
          >
            <div className="bg-gray-950 rounded-2xl p-4 sm:p-6 h-full flex flex-col justify-between">

              <div className="flex items-center justify-between">
                <div className={`inline-block justify-between p-px rounded-lg bg-linear-to-r ${widget.gradient} mb-2 sm:mb-4 w-fit`}>
                  <p className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-lg bg-gray-950 ${widget.text}`}>
                    {today}
                  </p>
                </div>

                <div className="relative group w-6 h-9">
                  <div className="absolute inset-0 flex items-center justify-center border-2 rounded-4xl cursor-pointer transition-all duration-200 group-hover:bg-[#aadd00]">
                    <img src="/assets/Dotted-Settings.png" alt="Widget Settings" className="w-4 h-6 absolute transition-all duration-200 group-hover:opacity-0" />
                    <img src="/assets/Dotted-Settings-G.png" alt="Widget Settings hover" className="w-4 h-6 absolute opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-1">
                {widget.title}
              </p>

              <div className="relative mt-2">

                <div className="absolute inset-0 blur-xl opacity-30">
                  <p className={`text-4xl sm:text-5xl font-black ${widget.text}`}>
                    {count.toLocaleString()}
                  </p>
                </div>

                <div className="relative flex items-end gap-1">
                  <p className={`text-4xl sm:text-5xl font-black tracking-tight bg-linear-to-r ${widget.gradient} bg-clip-text text-transparent`}>
                    {count.toLocaleString()}
                  </p>

                  {widget.suffix && (
                    <span className="text-xs sm:text-sm text-white/60 mb-1">
                      {widget.suffix}
                    </span>
                  )}
                </div>

              </div>

              <div className={`mt-3 sm:mt-4 h-0.5 w-12 rounded-full bg-linear-to-r ${widget.gradient}`}></div>

            </div>
          </div>
        );
      })}
    </div>
  );
}