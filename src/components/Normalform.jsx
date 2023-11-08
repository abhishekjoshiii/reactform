import React, { useState } from 'react';

const Normalform = () => {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>Normal React Form</div>
            <div className=" loginform">
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" name="name" value={formdata.name} onChange={handlechange} required />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" name="email" value={formdata.email} onChange={handlechange} required />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" name="password" value={formdata.password} onChange={handlechange} required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Normalform;
