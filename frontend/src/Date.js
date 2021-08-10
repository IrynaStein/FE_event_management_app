function Date() {
  const showDate = new Date();
  const displayTodaysDate =
    showDate.getMonth() +
    " " +
    showDate.getDate() +
    " " +
    showDate.getFullYear();
  return (
    <div>
      <input type="text" value={displayTodaysDate} readOnly="true"></input>
    </div>
  );
}

export default Date;
