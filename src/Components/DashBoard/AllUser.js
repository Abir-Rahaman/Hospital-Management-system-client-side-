import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading/Loading';
import RowUser from './RowUser';

const AllUser = () => {
    const { data:users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user', {
       
        method: 'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('token')}`
        }
       
    }).then(res => res.json()));
    console.log(users);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=><RowUser
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></RowUser>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUser;