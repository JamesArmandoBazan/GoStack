import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { httpClient } from "./api/httpClient";
import { PingResponse } from "./models/PingPong";

const App = () => {
  const [pingResponse, setPingResponse] = useState<String>();

  useEffect(() => {
    httpClient.get("http://localhost:8080/ping").then(
      (res) => {
        res.json().then((data: PingResponse) => {
          setPingResponse(data.message);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        {pingResponse
          ? `Ping has been sent and response is ${pingResponse}`
          : "Ping has failed to respond"}
      </header>
    </div>
  );
};

export default App;
