function BirthdayCard({ birthday }) {
    const { name } = birthday 

    //this is just an idea.. we can map over and display in birthday.js if we think that's better 
    return (
        <div>
            <div>{name}</div>
        </div>
    )
}

export default BirthdayCard;