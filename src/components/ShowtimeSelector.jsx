import React, { useState } from 'react'
import '../styles/ShowtimeSelector.css'

function ShowtimeSelector({ movieId, onSelectShowtime }) {
  const [selectedDate, setSelectedDate] = useState(0)
  const [selectedTime, setSelectedTime] = useState(null)

  // Generate next 7 days
  const getDates = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  // Movie time slots
  const timeSlots = [
    '11:30 AM',
    '12:30 PM',
    '01:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '06:30 PM',
    '07:30 PM',
    '08:30 PM',
    '10:30 PM',
    '11:30 PM'
  ]

  const dates = getDates()
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    const selected = {
      date: dates[selectedDate].toLocaleDateString(),
      time: time,
      dateObj: dates[selectedDate]
    }
    onSelectShowtime(selected)
  }

  return (
    <div className="showtime-selector">
      <h2>Select Date & Time</h2>
      
      {/* Calendar Section */}
      <div className="calendar-section">
        <div className="dates-container">
          {dates.map((date, idx) => (
            <div
              key={idx}
              className={`date-card ${selectedDate === idx ? 'active' : ''}`}
              onClick={() => setSelectedDate(idx)}
            >
              <div className="day-name">
                {dayNames[date.getDay()]}
              </div>
              <div className="date-number">
                {date.getDate()}
              </div>
              <div className="month-name">
                {date.toLocaleString('default', { month: 'short' }).toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots Section */}
      <div className="timeslots-section">
        <h3>Available Show Times</h3>
        <div className="timeslots-container">
          {timeSlots.map((time, idx) => (
            <button
              key={idx}
              className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Info */}
      {selectedTime && (
        <div className="selected-info">
          <p>
            <strong>Selected:</strong> {dates[selectedDate].toLocaleDateString()} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  )
}

export default ShowtimeSelector
