import { useState } from "react";


const UserInfoWithState = () => {
    const [userInfo, setUserInfo] = useState({ name: "", age: '0', hobbies: [] })
    console.log(userInfo)
    return (
        <div>
            <input
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="input input-border m-10"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
            />
            <input
                onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
                className="input input-border m-10"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
            />
            <input
                onBlur={(e) => setUserInfo({ ...userInfo, hobbies: [...userInfo.hobbies, e.target.value] })}
                className="input input-border m-10"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
            />

            <input type="submit" value="Submit" />
        </div>
    );
};

export default UserInfoWithState;