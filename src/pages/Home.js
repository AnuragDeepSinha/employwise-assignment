import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    return (
        <div>
            <h1>Welcome to EmployWise User Management</h1>
            {token ? (
                <button onClick={() => navigate("/users")}>Go to Users List</button>
            ) : (
                <button onClick={() => navigate("/login")}>Login</button>
            )}
        </div>
    );
};

export default Home;
