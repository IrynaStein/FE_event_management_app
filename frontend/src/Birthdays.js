import BirthdayCard from "./BirthdayCard";

function Birthdays ({ birthdays }){

    const displayBirthdays = birthdays.map((birthday) => {
        return (
            <BirthdayCard 
                key={birthday.id}
                birthday={birthday}
            />
        )
    })
    return (
        <div>
            <h1>Today's Birthdays</h1>
            {displayBirthdays}
        </div>
    )
}

export default Birthdays;