import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, [page]);

    const loadUsers = async () => {
        const data = await fetchUsers(page);
        setUsers(data.data);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        loadUsers();
    };

    return (
        <div>
            <h2>Users List</h2>
            <button onClick={() => localStorage.removeItem("token") || navigate("/")}>Logout</button>
            {users.map((user) => (
                <div key={user.id}>
                    <img src={user.avatar} alt={user.first_name} width="50" />
                    <p>{user.first_name} {user.last_name}</p>
                    <button onClick={() => navigate(`/edit/${user.id}`, { state: user })}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

export default UsersList;
