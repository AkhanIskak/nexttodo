import {ITodo} from "@/types/todo.types";

export async function getTodos(name?: string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/todo`
    if (name)
        url = url + `?name=${name}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    return response.json();
}

export async function postTodo(todo: ITodo) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(todo)
    })
    return response.json();
}

export function removeTodo(id: string): Promise<Response> {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
}

export function changeTodoStatus(id: string, status: string) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            status
        })
    })
}
