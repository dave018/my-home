import React from "react";
import { useState } from "react";

import "./ScheduleModal.css";

function ScheduleModal({
  isOpen,
  onClose,
  onAddEvent,
  onDeleteEvent,
  events,
  position,
  selectedDate,
}) {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    start: selectedDate.dateStr,
    end: selectedDate.dateStr,
    allDay: true,
  });

  if (!isOpen) return null;

  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddEvent = () => {
    onAddEvent(eventDetails);
    setEventDetails({
      title: "",
      start: selectedDate.dateStr,
      end: selectedDate.dateStr,
      allDay: true,
    });
  };

  return (
    <div className="modal" style={{ position: "absolute" }}>
      <div className="modal-content" style={style}>
        <h2>Add Event</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Start:
          <input
            type="date"
            name="start"
            value={eventDetails.start}
            onChange={handleChange}
          />
        </label>
        <label>
          End:
          <input
            type="date"
            name="end"
            value={eventDetails.end}
            onChange={handleChange}
          />
        </label>
        <label>
          All Day:
          <input
            type="checkbox"
            name="allDay"
            checked={eventDetails.allDay}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleAddEvent}>Add event</button>
        {events.map((event) => (
          <div key={event.id}>
            <span>
              {event.title} - {event.start}
            </span>
            <button onClick={() => onDeleteEvent(event.id)}>
              Delete event
            </button>
          </div>
        ))}
        <button onClick={onClose}>onClose</button>
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
}

export default ScheduleModal;
