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
            {displayBirthdays}
        </div>
    )
}

export default Birthdays;