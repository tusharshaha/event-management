import React, { useState } from "react";
// import axios from "axios";

function LabelGeneratorForm() {
  const [labels, setLabels] = useState([]);
  const [newLabel, setNewLabel] = useState("");
  const [newType, setNewType] = useState("text");





  const addLabel = () => {
    if (newLabel.trim()) {
      setLabels([...labels, { name: newLabel, type: newType }]);
      setNewLabel("");
    }
  };

  const removeLabel = (index) => {
    const newLabels = [...labels];
    newLabels.splice(index, 1);
    setLabels(newLabels);
  };

  const generateFormStructure = () => {
    console.log(labels);
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/eventForm`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(labels),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
  };






  return (

    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Form Generator</h1>
        <div className="mb-4 w-1/2">
          {labels.map((label, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 mb-2 border p-3 rounded-md bg-white shadow-sm"
            >
              <span className="font-medium text-lg">{label.name}</span>
              <span className="bg-gray-200 p-1 rounded text-sm">
                {label.type}
              </span>
              <button
                onClick={() => removeLabel(index)}
                className="ml-auto p-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mb-4 flex space-x-2 w-1/2">
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Enter new label"
            className="p-2 border rounded-md flex-grow bg-white shadow-sm"
          />
          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="p-2 border rounded-md bg-white shadow-sm"
          >
            <option value="text">Text</option>
            <option value="date">Date</option>
            <option value="number">Number</option>
            <option value="currency">Currency</option>
            <option value="email">Email</option>
            <option value="time">Time</option>
            <option value="textarea">Text Area</option>
            <option value="select">Select</option>
          </select>
          <button
            onClick={addLabel}
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Add Label
          </button>
        </div>
        <button
          onClick={generateFormStructure}
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Generate Form Structure
        </button>
      </div>

      <div>
      </div>






    </>


  );
}

export default LabelGeneratorForm;
