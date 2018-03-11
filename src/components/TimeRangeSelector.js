import React from "react";

let TimeRangeSelector = props => {
  return (
    <select
      name="timeRange"
      placeholder="Select your period of time"
      className="inline-block"
      value={props.timeRange}
      onChange={props.onChange}
      required
    >
      <option value="short_term">Last month</option>
      <option value="medium_term">Half year</option>
      <option value="long_term">All time</option>
    </select>
  );
};

export default TimeRangeSelector;
