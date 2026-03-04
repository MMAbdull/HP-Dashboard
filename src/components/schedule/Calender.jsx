import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  const [events,setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModel(true);
  };
  const addEvent = (type) => {
    const newEvent = {
      title: type === "workout" ? "Workout 💪 " : "Rest 💤",
      date: selectedDate,
      backgroundColor: type === "workout" ? "#2563eb" : "#6b7280",
      borderColor: type === "workout" ? "#2563eb" : "#6b7280",
    };

    setEvents([...events,newEvent]);
    setShowModel(false);
  };
  return(
    <div style={{padding:"20px"}}>
      <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
      height="80vh"
      headerToolbar={{
        left: "prev,next today",
        center:"title",
        right:"dayGridMonth,timeGridWeek,timeGridDay",
      }}
      />
      {showModel && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>Select Day Type</h3>
            <button onClick={() => addEvent("workout")} style={workoutBtn}>Workout 💪</button>
            <button onClick={() => addEvent("rest")} style={restBtn}>Rest 💤</button>
            <button onClick={() => setShowModel(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

  const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex:"9999"
};

const modalStyle = {
  background: "#030712",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  minWidth: "250px",
  color: "white",
};

const workoutBtn = {
  padding: "8px",
  background: "#aadd00",
  color: "white",
  fontWeight:"bold",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const restBtn = {
  padding: "8px",
  background: "rgba(33,150,243,0.4)",
  color: "white",
  fontWeight:"bold",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
