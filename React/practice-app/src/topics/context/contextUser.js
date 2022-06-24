import React, {useContext} from 'react'
import  MyContext  from './context';
const User = () => {
    const userDetails = useContext(MyContext);
    return (
        <h1>Hi, {userDetails.name}
        &nbsp; age: {userDetails.age}
        </h1>
    )
}

export default User;