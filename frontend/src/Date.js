import { Form } from 'semantic-ui-react'

const date = () => {
  const showDate = new Date();
  const displayTodaysDate =
    showDate.getMonth()+1 +
    " " +
    showDate.getDate() +
    " " +
    showDate.getFullYear();
  return (
    <div>
      <Form.Input type="text" value={displayTodaysDate} readOnly/>
    </div>
  );
}

export default date;
