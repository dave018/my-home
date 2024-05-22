import { useState } from "react";

function EventInputForm({ selectedDate, onAddEvent }) {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    start: selectedDate.dateStr,
    end: selectedDate.dateStr,
    allDay: true,
  });

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
    <div>
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
    </div>
  );
}

export default EventInputForm;
