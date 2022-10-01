import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <h1 id="PageTitle">Ten Seconds</h1>
    <button id="StartButton">Start your first job</button>
    <div id="JobTitleContainer" className="text-container">
        <div id="JobTitleLabel" className="inline-item">Job Title:</div>
        <div id="JobTitleValue" className="inline-item">Intern</div>
    </div>
    <div id="TotalTasksContainer" className="text-container">
        <div id="TotalTasksLabel" className="inline-item">Total Tasks Completed:</div>
        <div id="TotalTasksCount" className="inline-item">0</div>
    </div>
    <div id="JobTaskList">
        <div id="JobTask0">
            <div id="JobTaskTitle0">Title 0</div>
            <div id="JobTaskDescription0">Description 0</div>
            <div id="FinishedCheckmark0">X</div>
        </div>
        <div id="JobTask1">
            <div id="JobTaskTitle1">Title 1</div>
            <div id="JobTaskDescription1">Description 1</div>
            <div id="FinishedCheckmark1">X</div>
        </div>
        <div id="JobTask2">
            <div id="JobTaskTitle2">Title 2</div>
            <div id="JobTaskDescription2">Description 2</div>
            <div id="FinishedCheckmark2">X</div>
        </div>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script>
        
    </script>
    </body>
  );
}

export default App;
