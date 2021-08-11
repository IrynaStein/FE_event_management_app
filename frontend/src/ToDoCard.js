function ToDoCard({ todo }) {
    const { id, name, priority, completed } = todo

    return (
        <div>{name}</div>
    )
}

export default ToDoCard;