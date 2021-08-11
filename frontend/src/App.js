import { useState, useEffect } from "react";

import Header from "./Header";
import Display from "./Display";

function App() {
  const [events, setEvents] = useState([])
  const [categories, setCategories] = useState([])
  console.log(events)

  useEffect(() => {
    fetch('http://localhost:9393/events/')
    .then(res => res.json())
    .then(data => {
      setEvents(data.events)
      setCategories(data.categories)
    })
  }, []);


  return (
    <div className="App">
      <Header 
        events={events} 
        categories={categories}
      />
      <Display 
        events={events} 
        categories={categories}
      />
    </div>
  );
}

export default App;
