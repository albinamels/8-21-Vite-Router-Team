import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavComponent } from "./components/NavComponent";
import { Contacts } from "./components/Contacts";
import { Homepage } from "./components/Homepage";
import { Team } from "./components/Team";
import { SingleMember } from "./components/SingleMember";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team data={data} />} />

        <Route path="/team/:id" element={<SingleMember data={data} />} />
        {/* url with dynamic :name passed from <Team/> renders <SingleMember /> */}
        {/* /team/:id is a parameter */}
        {/* /team/${person.id} is an argument lifted up from <Team/> */}
      </Routes>
    </div>
  );
}

export default App;
