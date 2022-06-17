import { useContext } from 'react';
import {MyContext} from './xonntext';

const Dashboard = () => {
    const user = useContext(MyContext)
    console.log(user);
    return (
        <h1>Hi {user.name}</h1>
    )
}
export default Dashboard