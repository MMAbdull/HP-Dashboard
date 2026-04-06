import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [message, setMessage] = useState("");

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModel(true);
  };

  const addEvent = (type) => {
    const selectedDayEvents = events.filter(
      (event) => event.date === selectedDate
    );

    const workoutsToday = selectedDayEvents.filter(
      (event) => event.title.includes("Workout")
    );

    if (type === "workout" && workoutsToday.length >= 6) {
      setMessage("Maximum 6 Workouts per day");
      return;
    }

    const restToday = selectedDayEvents.find(
      (event) => event.title.includes("Rest")
    );

    if (type === "workout" && restToday) {
      setMessage("You already scheduled a Rest day.");
      return;
    }

    if (type === "rest" && selectedDayEvents.length > 0) {
      setMessage("You already scheduled workouts this day. NO REST");
      return;
    }

    const newEvent = {
      title: type === "workout" ? "Workout 💪" : "Rest 💤",
      date: selectedDate,
      backgroundColor: type === "workout" ? "#2563eb" : "#6b7280",
      borderColor: type === "workout" ? "#2563eb" : "#6b7280",
    };

    setEvents([...events, newEvent]);
    setMessage("");
    setShowModel(false);
  };

  return (
    <div className="p-4 md:p-6">

      <div className="bg-white rounded-2xl shadow p-3 md:p-5">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          height="auto"
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          }}
        />
      </div>

      {showModel && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-950 text-white p-6 rounded-2xl w-[90%] max-w-sm flex flex-col gap-4 shadow-xl">

            <h3 className="text-lg font-semibold text-center">
              Select Day Type
            </h3>

            {message && (
              <p className="text-red-400 text-sm text-center">
                {message}
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => addEvent("workout")}
                className="flex-1 py-2 rounded-lg bg-[#aadd00] text-black font-bold hover:scale-105 transition"
              >
                Workout 💪
              </button>

              <button
                onClick={() => addEvent("rest")}
                className="flex-1 py-2 rounded-lg bg-gray-700 text-white font-bold hover:scale-105 transition"
              >
                Rest 💤
              </button>
            </div>

            <button
              onClick={() => setShowModel(false)}
              className="text-sm text-white/50 hover:text-white transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}