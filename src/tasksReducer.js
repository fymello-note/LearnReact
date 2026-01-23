/* export function tasksReducer(tasks, action){
    console.log("in reducer " + action.type)
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ]            
        };
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            })
        };
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw new Error('Azione non trovata');
        }
    }
} */

// and using immer
export function tasksReducer(draft, action){
    switch (action.type) {
        case 'added': {
            draft.push({id: action.id, text: action.text, done: false});
            break;
        };
        case 'changed': {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index] = action.task;
            break;
        };
        case 'deleted': {
            return draft.filter((t) => t.id !== action.id);
        }
        default: {
            throw new Error('Azione non trovata');
        }
    }
}