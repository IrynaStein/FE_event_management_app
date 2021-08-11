function BirthdayCard({ birthday }) {
    const { name } = birthday 

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default BirthdayCard;