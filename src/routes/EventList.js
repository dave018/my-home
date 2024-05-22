function EventList({ events, onDeleteEvent }) {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <span>
            {event.title} - {event.start}
          </span>
          <button onClick={() => onDeleteEvent(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
