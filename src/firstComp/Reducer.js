import { useReducer, useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { tasksReducer } from './tasksReducer.js';
import { useImmerReducer } from 'use-immer';

/*
    Benefits in using useReducer
        Code size
        Readability
        Testing
        debugging
        Personal preference
*/

// Reducer must be pure
// Each action describe a single user interaction

export default function TaskApp() {
    // const [tasks, setTasks] = useState(initialTasks);

    // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    // Con immer
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({type:'added', id:nextId++, text: text})
    }

    function handleChangeTask(task) {
        dispatch({type:'changed', task: task})
    }

    function handleDeleteTask(taskId) {
        dispatch({type:'deleted', id:taskId})
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];