import { useImmerReducer } from "use-immer";

function ListActivities({activities, text, user, dispatch}){
    return (
        <>
            <div>
                <ul>
                {activities.map((active) => {
                    return (
                        <li key={active.id} style={{listStyleType: "none"}}>
                            {active.id}.  <b>{active.name}</b>
                        </li>
                    )
                })}
                </ul>
            </div>
            <div>
                <p>Activity: &nbsp;&nbsp; 
                    <input value={text} onChange={(e) => dispatch({ type: "change_text", text: e.target.value })} />
                    <button onClick={() => dispatch({ type: 'add_activities', id: 1 + activities[activities.length-1].id })}>Add</button>
                </p>
            </div>
            <br />
            <div>
                Welcome {user.flg_logged ? <b>{user.name}</b> : 'anonymous'}
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
                <ListActivities activities={state.activities} text={state.text} user={state.user} dispatch={dispatch} />
            </div>
            <br />
            <div>
                <p>username: &nbsp;&nbsp;
                    <Login user={state.user.name} dispatch={dispatch} />
                </p>
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