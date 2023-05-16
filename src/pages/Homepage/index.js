import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import data from '../../databases/db.json';

// Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Redux actions
import { login } from '../../redux/auth/LoginSlice';

const loginInitialValues = {
  email: '',
  password: '',
};

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setuser] = useState(loginInitialValues);
  const [allUsers, setallUsers] = useState([]);

  useEffect(() => {
    setallUsers(data.users);
  }, []);

  // Redux data stores
  const { user_details } = useSelector((state) => state.loginSlice);

  const handleChange = (e) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // let res = allUsers.find(
    //   (item) => item.email == user.email && item.password == user.password
    // );
    dispatch(login(user));
    console.log('api user', user_details);

    if (Object.keys(user_details).length > 0) {
      toast.success('Login successfully');
      setuser(loginInitialValues);
      // navigate('/products')
    } else {
      toast.error('Wrong email or password');
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Homepage;
