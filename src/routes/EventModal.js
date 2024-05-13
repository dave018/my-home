import React from "react";
import "./EventModal.css";

function EventModal({
  isOpen,
  onClose,
  onDeleteEvent,
  selectedEvent,
  position,
}) {
  if (!isOpen || !selectedEvent) return null;

  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div className="modal" style={{ position: "absolute" }}>
      <div className="modal-content" style={style}>
        <h2>Event Details</h2>
        <p>Title: {selectedEvent.title}</p>
        <button onClick={onClose}>onClose</button>
        <button onClick={() => onDeleteEvent(selectedEvent.id)}>
          Delete this event
        </button>
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
}

export default EventModal;
