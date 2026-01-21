import { useImmer } from 'use-immer';
import AddTodo from './addtodo';
import TaskList from './tasklist';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, updateTodos] = useImmer(
        initialTodos
    );

    function handleAddTodo(title) {
        updateTodos(draft => {
            draft.push({ id: nextId++, title: title, done: false });
        })
    };


    function handleChangeTodo(nextTodo) {
        updateTodos(draft => {
            const nextDraft = draft.find(t => t.id === nextTodo.id)
            nextDraft.done = nextTodo.done;
            nextDraft.title = nextTodo.title;
        })

    }

    function handleDeleteTodo(todoId) {
        updateTodos(draft => {
            // const nextDraft = draft.filter(t => t.id !== todoId)
            // return nextDraft
            draft.splice(draft.findIndex(a => a.id == todoId), 1)
        })
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}