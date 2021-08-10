
import { Container } from 'semantic-ui-react'
import Birthdays from './Birthdays';
import ToDos from './ToDos';
import Calendar from './Calendar';

function Display() {
  return <Container>
      display container
      <Birthdays></Birthdays>
      <ToDos></ToDos>
      <Calendar></Calendar>
      </Container>;
}

export default Display;
