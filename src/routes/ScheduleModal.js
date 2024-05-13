import React from "react";
import "./ScheduleModal.css";

function ScheduleModal({
  isOpen,
  onClose,
  onAddEvent,
  onDeleteEvent,
  events,
  position,
}) {
  if (!isOpen) return null;

  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div className="modal" style={{ position: "absolute" }}>
      <div className="modal-content" style={style}>
        <h2>Event Actions</h2>
        <button onClick={onAddEvent}>Add event</button>
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
        <button onClick={onDeleteEvent}>Delete event</button>
        <button onClick={onClose}>onClose</button>
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
}

export default ScheduleModal;
