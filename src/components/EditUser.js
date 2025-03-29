import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../services/api";

const EditUser = () => {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(user.id, formData);
        navigate("/users");
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input name="first_name" value={formData.first_name} onChange={handleChange} required />
                <input name="last_name" value={formData.last_name} onChange={handleChange} required />
                <input name="email" value={formData.email} onChange={handleChange} required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditUser;
