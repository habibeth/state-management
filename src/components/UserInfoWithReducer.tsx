import { useReducer, useState } from "react";


const initialState = {
    name: '',
    age: '0',
    hobbies: [],
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'addName':
            return { ...currentState, name: action.payload }
        case 'addAge':
            return { ...currentState, age: action.payload }
        case 'addHobbies':
            return { ...currentState, hobbies: [...currentState.hobbies, action.payload] }

        default:
            currentState;
    }
}


const UserInfoWithReducer = () => {
    // const [userInfo, setUserInfo] = useState({ name: "", age: '0', hobbies: [] })
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <div>
            <input
                onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })}
                className="input input-border m-10"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
            />
            <input
                onChange={(e) => dispatch({ type: 'addAge', payload: e.target.value })}
                className="input input-border m-10"
                placeholder="Age"
                type="text"
                name="age"
                id="age"
            />
            <input
                onBlur={(e) => dispatch({ type: 'addHobbies', payload: e.target.value })}
                className="input input-border m-10"
                placeholder="Hobbies"
                type="text"
                name="hobbies"
                id="hobbies"
            />

            <input type="submit" value="Submit" />
        </div>
    );
};

export default UserInfoWithReducer;