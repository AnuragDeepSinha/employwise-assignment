import React, { useEffect, useState, useCallback } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    // Memoized function to fetch users (prevents unnecessary re-renders)
    const loadUsers = useCallback(async () => {
        try {
            const data = await fetchUsers(page);
            setUsers(data.data);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }, [page]);

    // Fetch users when page changes
    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    // Delete user and reload the list
    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            loadUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Logout and redirect to login page
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Users List</h2>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>

            <div className="user-grid">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <img src={user.avatar} alt={user.first_name} className="avatar" />
                        <p>{user.first_name} {user.last_name}</p>
                        <button className="edit-btn" onClick={() => navigate(`/edit/${user.id}`, { state: user })}>
                            Edit
                        </button>
                        <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                <span>Page {page} of {totalPages}</span>
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default UsersList;
