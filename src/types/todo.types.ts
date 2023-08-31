export interface ITodo {
    status?: string;
    id?: string;
    name?: string;
    description?: string;
    createdAt?: number;
    finishedAt?: number;
    //mongodb id of user
    user?: string
}

type deleteTodo = (id: string) => void

export interface ITodoListProps {
    todos: ITodo[],
    deleteTodo: deleteTodo
}

type addTodo = (todo: ITodo) => void

export interface ITodoFrom {
    addTodo: addTodo
}
