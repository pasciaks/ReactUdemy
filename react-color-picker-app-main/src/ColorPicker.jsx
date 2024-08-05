import React, { useState } from "react"

const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF")
  const [savedColors, setSavedColors] = useState([])

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  const handleSavedColor = () => {
    setSavedColors([...savedColors, color])
  }

  return (
    <div className="page-container">
      <div className="grid-container">
        <div className="color-picker-container">
          <h1 style={{ color: color, textShadow: "1px 1px 2px black" }}>Color Picker</h1>
          <div className="color-display"
            style={{ backgroundColor: color }}
          >
            <p>Color: {color}</p>
          </div>
          <label>Choose a Color:</label>
          <br />
          <input type="color" value={color} onChange={handleColorChange}></input>
          <br />
          <button onClick={handleSavedColor}>Save Your Color</button>
        </div>

        <div className="saved-color-container">
          <h2>Saved Colors:</h2>
          <ul>
            {savedColors.map((savedColor, index) => (
              <li key={index}>
                <div className="saved-color" style={{ backgroundColor: savedColor }}>Color: {savedColor}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker