import { useReducer } from "react";
import { useImmerReducer } from "use-immer";

function ListActivities({state, dispatch}){
    return (
        <>
            <div>
                <ul>
                {state.activities.map((active) => {
                    return (
                        <li key={active.id}>
                            {active.id} <b>{active.name}</b>
                        </li>
                    )
                })}
                </ul>
            </div>
            <div>
                <input value={state.text} onChange={(e) => dispatch({type: "change_text", text: e.target.value})} />
                <button onClick={(e) => dispatch({ type: 'add_activities', id: 1 + state.activities.length })}>Add</button>
            </div>
            <br />
            <div>
                Welcome {state.user.flg_logged ? state.user.name : 'anonymous'}
            </div>
        </>
    ) 
}

function Login({user, dispatch}){
    return (
        <>
            <input value={user} onChange={(e)=> dispatch({type:'change_user', user: e.target.value})}/>
            <button onClick={() => dispatch({type: 'change_flg', value: true})}>login</button>
        </>
    )
}

export default function MyApp(){
    const [state, dispatch] = useImmerReducer(myAppReducer, {
        user: { name: '', flg_logged: false },
        activities: [{ id: 1, name: "prova1" }, { id: 2, name: "prova2" }],
        text: ''
    })

    return (
        <>
            <div>
                <ListActivities state={state} dispatch={dispatch} />
            </div>
            <br />
            <div>
                <Login user={state.user.name} dispatch={dispatch} />
            </div>
        </>
    )
}

function myAppReducer(draft, action){
    switch(action.type){
        case 'add_activities': {
            draft.activities.push({id: action.id, name: draft.text});
            draft.text = "";
            break;
        }

        case 'change_user': {
            if(draft.user.flg_logged){
                draft.user.flg_logged = false;
            }
            draft.user.name = action.user
            break;
        }

        case 'change_flg':{
            draft.user.flg_logged = action.value;
            break;
        }

        case 'change_text': {
            draft.text = action.text;
            break;
        }

        default: {
            throw new Error("Azione non esistente");
        }
    }
}