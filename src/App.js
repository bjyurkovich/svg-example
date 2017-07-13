import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputLines: null };
  }

  componentWillMount() {
    //This would be built from your JSON object
    let nIputs = 3;
    let nOutputs = 4;

    this.determineCoordinates(nIputs, nOutputs);
  }

  determineCoordinates(numberOfInputs, numberOfOutputs) {
    let inputLines = [];
    let outputLines = [];
    for (let i = 0; i < numberOfInputs; i++) {
      inputLines.push({
        x1: 70,
        x2: 170,
        y1: 100 + i * 20,
        y2: 100 + i * 20,
        label: "RXN-ID"
      });
    }

    for (let i = 0; i < numberOfOutputs; i++) {
      outputLines.push({
        x1: 225,
        x2: 325,
        y1: 100 + i * 20,
        y2: 100 + i * 20,
        label: "RXN-ID"
      });
    }

    this.setState({ inputLines, outputLines });
  }

  render() {
    const { inputLines, outputLines } = this.state;
    return (
      <div className="App">
        <svg width="500" height="200">
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="0"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L5,3 z" fill="black" />
            </marker>
          </defs>

          {inputLines.map(line => {
            return (
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                strokeWidth="2"
                stroke="black"
                markerEnd="url(#arrow)"
              />
            );
          })}

          <circle cx="200" cy="110" r="20" style={{ fill: "steelblue" }} />

          {outputLines.map(line => {
            return (
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                strokeWidth="2"
                stroke="black"
                markerEnd="url(#arrow)"
              />
            );
          })}

          {outputLines.map(line => {
            return (
              <text x={line.x1 + 125} y={line.y1 + 5} fill="black">
                RXN-ID
              </text>
            );
          })}
        </svg>
      </div>
    );
  }
}

export default App;
