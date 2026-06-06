import React, { useState, useMemo } from 'react'
import '../styles/ShowtimeSelector.css'

function SeatSelector({ open, onClose, onConfirm, occupiedSeats = [] }) {
  const [selectedSeats, setSelectedSeats] = useState([])

  const rows = useMemo(() => ['A','B','C','D','E'], [])
  const cols = useMemo(() => [1,2,3,4,5,6,7,8], [])

  const occupiedSet = useMemo(() => new Set(occupiedSeats || []), [occupiedSeats])

  const toggleSeat = (seatId) => {
    if (occupiedSet.has(seatId)) return
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) return prev.filter(s => s !== seatId)
      return [...prev, seatId]
    })
  }

  const handleConfirm = () => {
    onConfirm && onConfirm(selectedSeats)
  }

  if (!open) return null

  return (
    <div className="seat-modal-overlay" onClick={onClose}>
      <div className="seat-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Select Seats</h3>

        <div className="seat-grid">
          {rows.map((r) => (
            <div key={r} className="seat-row">
              <div className="row-label">{r}</div>
              {cols.map((c) => {
                const id = `${r}${c}`
                const isOccupied = occupiedSet.has(id)
                const isSelected = selectedSeats.includes(id)
                return (
                  <button
                    key={id}
                    className={`seat ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleSeat(id)}
                    disabled={isOccupied}
                    aria-pressed={isSelected}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="seat-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={handleConfirm}>Confirm Seats ({selectedSeats.length})</button>
        </div>
      </div>
    </div>
  )
}

export default SeatSelector
