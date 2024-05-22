import React from "react";
import { useState } from "react";

import EventList from "./EventList";
import EventInputForm from "./EventInputForm";

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
        <EventInputForm selectedDate={selectedDate} onAddEvent={onAddEvent} />
        <EventList events={events} onDeleteEvent={onDeleteEvent} />
        <button onClick={onClose}>onClose</button>
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
}

export default ScheduleModal;
