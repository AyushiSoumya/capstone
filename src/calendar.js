import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [note, setNote] = useState("");
  const [data, setData] = useState({ content: [] });

  useEffect(() => {
    // Fetch data from your backend when the component mounts
    // Replace the URL with your actual backend endpoint
    fetch("http://localhost:8080/v1/legalcases")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDateClick = (date) => {
    const isDateSelected = selectedDates.find(
      (selectedDate) => selectedDate.getTime() === date.getTime()
    );

    if (isDateSelected) {
      const updatedDates = selectedDates.filter(
        (selectedDate) => selectedDate.getTime() !== date.getTime()
      );
      setSelectedDates(updatedDates);
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSave = () => {
    const matchingCase = data.content.find(
      (legalCase) => legalCase.legalCaseTitle === note
    );

    if (matchingCase) {
      const legalCaseId = matchingCase.legalCaseId;

      fetch(`http://localhost:8080/v1/legalcases/${legalCaseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          legalCaseDate: selectedDates[0]?.toISOString(), // Assuming only one court date is needed
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data posted successfully:", data);

          setNote("");
          setSelectedDates([]);
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    } else {
      console.error("No matching legal case found for the entered note.");
    }
  };

  return (
    <div>
      <Calendar onClickDay={handleDateClick} value={selectedDates} />
      <div>
        <label>Note:</label>
        <textarea
          rows="4"
          cols="50"
          value={note}
          onChange={handleNoteChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CalendarComponent;
