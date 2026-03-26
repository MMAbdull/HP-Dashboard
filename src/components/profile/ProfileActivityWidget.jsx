import { useState } from "react";

export default function ActivityPanel() {

  const [monthIndex, setMonthIndex] = useState(0);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();

  const completedDays = [2, 5, 9, 14, 18, 22, 27];
  const restDays = [3, 10, 17, 24];

  const messages = [
    { name: "Sarah Johnson", message: "Hey! Are we still on for today’s workout?", avatar: "https://i.pravatar.cc/40?img=5" },
    { name: "Mike Chen", message: "Great progress this week 💪 keep going!", avatar: "https://i.pravatar.cc/40?img=8" },
    { name: "Emma Davis", message: "Don’t forget leg day tomorrow 👀", avatar: "https://i.pravatar.cc/40?img=9" },
    { name: "Alex Morgan", message: "Try increasing your reps next session", avatar: "https://i.pravatar.cc/40?img=12" },
    { name: "Chris Lee", message: "Your form improved a lot 🔥", avatar: "https://i.pravatar.cc/40?img=15" },
    { name: "Liam Carter", message: "Session was tough today 😅 but worth it!", avatar: "https://i.pravatar.cc/40?img=11" }
  ];

  return (
    <div className="grid grid-cols-2 gap-6">


      <div className="bg-gray-950 rounded-2xl p-6 flex flex-col">
        <div className="flex items-center gap-3">
          <p className="text-white font-semibold text-2xl">Calendar</p>
          <div className="w-9 h-9 flex items-center justify-center border border-white rounded-full">
            <img
              className="w-4 h-4"
              src="/assets/calendar-outline-w.png"
              alt="calendar"
            />
          </div>
        </div>


        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setMonthIndex((prev) => (prev - 1 + 12) % 12)}
            className="text-white/50 hover:text-white text-lg"
          >
            {"<"}
          </button>

          <p className="text-white font-semibold">
            {months[(today.getMonth() + monthIndex) % 12]}
          </p>

          <button
            onClick={() => setMonthIndex((prev) => (prev + 1) % 12)}
            className="text-white/50 hover:text-white text-lg"
          >
            {">"}
          </button>
        </div>


        <div className="grid grid-cols-7 text-xs text-white/40 mb-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <p key={day} className="text-center">{day}</p>
          ))}
        </div>


        <div className="grid grid-cols-7 gap-2">

          {[...Array(30)].map((_, i) => {
            const day = i + 1;

            const isCompleted = completedDays.includes(day);
            const isRest = restDays.includes(day);

            return (
              <div
                key={i}
                className={`
                  h-16 rounded-xl relative flex items-center justify-center transition
                  ${isCompleted && "bg-[#aadd00] text-black font-bold"}
                  ${isRest && "bg-blue-500/80 text-white"}
                  ${!isCompleted && !isRest && "bg-white/5 text-white/50 hover:bg-white/10"}
                `}
              >

                {!isCompleted && !isRest && (
                  <span className="absolute bottom-1 left-2 text-xs">
                    {day}
                  </span>
                )}

                {(isCompleted || isRest) && (
                  <span className="text-lg">
                    {day}
                  </span>
                )}

              </div>
            );
          })}

        </div>

      </div>


      <div className="bg-gray-950 rounded-2xl p-6 flex flex-col h-full">


        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
          <p className="text-white font-semibold text-2xl">Inbox</p>
          <div className="w-9 h-9 flex items-center justify-center border border-white rounded-full">
            <img
              className="w-4 h-4"
              src="/assets/speech-bubble-white.png"
              alt="calendar"
            />
          </div>
        </div>
          <span className="text-xs text-white/50">5 new</span>
        </div>


        <div className="space-y-3 overflow-y-auto pr-1">

          {messages.map((msg, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 hover:scale-[1.02] transition cursor-pointer"
            >
              <img
                src={msg.avatar}
                alt=""
                className="w-9 h-9 rounded-full object-cover border border-white/10"
              />

              <div className="flex-1">
                <p className="text-sm text-white font-medium">
                  {msg.name}
                </p>
                <p className="text-xs text-white/60 truncate">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}