import {Container} from "react-bootstrap";
import "../src/index.css";
import {person} from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
function App() {
  const [personData, setPersonData] = useState([])
  const onDelete = () => {
    setPersonData([])
  };
  const onView = () => {
    setPersonData(person)
  };
  return (
    <div className="font color-body py-5">
      <Container>
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} viewData={onView} />
      </Container>
      
    </div>
  );
}

export default App;
