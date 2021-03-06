
import { Container } from 'semantic-ui-react'
import Birthdays from './Birthdays';
import ToDos from './ToDos';
import Calendar from './Calendar';

function Display({ events, categories }) {

  const birthdays = events.filter((event) => event.category === "birthday")
  const todos = events.filter((event) => event.category !== "birthday")

  return (
    <Container>
      <Birthdays birthdays={birthdays}/>
      <ToDos todos={todos}/>
      <Calendar events={events}/>
    </Container>
  )
}

export default Display;
