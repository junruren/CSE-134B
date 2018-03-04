import React from 'react'


const DriverFilterBar = () => (
  <div className="filters">
    <div className="area-filter">
      <input type="checkbox" /><label>Area</label>
      <select>
        <option value="San Diego - Los Angeles" selected >San Diego - Los Angeles</option>
      </select>
    </div>
    <div className="capacity-filter">
      <input type="checkbox" id="capacity-checkbox" checked /><label>Capacity: max </label>
      <input type="number" id="capacity-input" oninput="filter_capacity()" />
    </div>
  </div>
);

export default DriverFilterBar;