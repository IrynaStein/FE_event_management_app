import ToDoCard from "./ToDoCard";

function ToDos ({ todos }){

    const displayToDos = todos.map((todo) => {
        return <ToDoCard
                key={todo.id}
                todo={todo}
                />
    })



    return (
        <div>
            <h1>Things to do today:</h1>
            {displayToDos}
        </div>
    )
}

export default ToDos;