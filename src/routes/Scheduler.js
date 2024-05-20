import React from "react";
import { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./Scheduler.css";
import ScheduleModal from "./ScheduleModal";
import EventModal from "./EventModal";

function Scheduler() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);

  const handleDateClick = (arg) => {
    setSelectedDate(arg);
    setModalPosition({ x: arg.jsEvent.clientX, y: arg.jsEvent.clientY });
    console.log(`x: ${modalPosition.x}`);
    console.log(`y: ${modalPosition.y}`);
    setModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setEventModalOpen(true);
    console.log(clickInfo);
  };

  const handleEventClose = () => {
    setEventModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleAddEvent = (eventDetails) => {
    console.log(selectedDate);

    const newEvent = {
      id: String(Date.now()),
      title: eventDetails.title,
      start: eventDetails.start,
      end: eventDetails.end,
      allDay: eventDetails.allDay,
    };

    setEvents([...events, newEvent]);
    setSelectedEvent({});
    console.log(events);
    setModalOpen(false);
  };

  const handleDeleteEvent = (eventId) => {
    console.log("Deleting event...");
    setEvents(events.filter((event) => event.id !== eventId));
    setSelectedEvent(null);
    setModalOpen(false);
  };

  const handleDeleteEventAll = () => {
    console.log("Deleting event all needs to be developed");
    setModalOpen(false);
  };

  return (
    <div>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        events={events}
        eventClick={handleEventClick}
      />
      <ScheduleModal
        isOpen={modalOpen}
        onClose={handleClose}
        onAddEvent={handleAddEvent}
        events={events}
        onDeleteEvent={handleDeleteEventAll}
        position={modalPosition}
        selectedDate={selectedDate}
      />
      <EventModal
        isOpen={eventModalOpen}
        onClose={handleEventClose}
        onDeleteEvent={handleDeleteEvent}
        selectedEvent={selectedEvent}
        position={modalPosition}
      />
    </div>
  );
}

export default Scheduler;
