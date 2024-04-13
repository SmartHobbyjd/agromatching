import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '/src/store/reduces/authSlice'; 
import InputField from './InputField';
import Button from './Button';
import Spinner from './Spinner';
import Link from 'next/link';
import { useRouter } from 'next/router';
import isEmail from 'validator/lib/isEmail'; 
const Registration: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
    general: '',
  });

  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.auth);
  const router = useRouter();

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.username) errors.username = 'Username is required';
    if (!formValues.email) errors.email = 'Email is required';
    else if (!isEmail(formValues.email)) errors.email = 'Invalid email format';
    if (!formValues.password) errors.password = 'Password is required';
    else if (formValues.password.length < 8) errors.password = 'Password must be at least 8 characters long';

    return errors;
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      await dispatch(register(formValues));
      await dispatch(login({ username: formValues.username, password: formValues.password }));
      if (isLoggedIn) {
        router.push('/Welcome');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setFormErrors({ ...formErrors, general: 'Username or email already exists' });
      } else {
        setFormErrors({ ...formErrors, general: 'An error occurred. Please try again' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign">
        <div className="sign__content">
          <h1 className="logo">Alpha Byte Innovations</h1>
          <div className="form__content">
            <div className="form__title">Sign Up</div>
            <div className="form__name">
            <label htmlFor="name">Name <span className="text-red-500 mt-10">*</span></label>
                <InputField borderTop={false} required={true} name={"name"} value={formValues.name} placeholder="Full Name"  type="text" onChange={handleChange} />
              <p className='text-red-500'>{formErrors.name}</p>
              </div>
              <div className="form__username">
                <label htmlFor="username">Username <span className="text-red-500 mt-10">*</span></label>
                <InputField borderTop={false} required={true} name={"username"} value={formValues.username} placeholder="Username"  type="text" onChange={handleChange} />
              <p className='text-red-500'>{formErrors.username}</p>
              </div>
              <div className="form__email">
                <label htmlFor="email">Email <span className="text-red-500 mt-10">*</span></label>
                <InputField borderTop={false} required={true} name={"email"} value={formValues.email} placeholder="yourmail@example.com"  type="text" onChange={handleChange} />
              <p className='text-red-500'>{formErrors.email}</p>
              </div>
              <div className="form__pass">
                <label htmlFor="user_password">Password <span className="text-red-500 mt-10">*</span></label>
                <InputField borderTop={false} required={true} name={"password"} value={formValues.password} autoComplete="current-password" type="password" onChange={handleChange} />
              <p className='text-red-500'>{formErrors.password}</p>
              </div>
              <div className="form__pass">
              <label htmlFor="userType">Role <span className="text-red-500 mt-10">*</span></label>
              <div className='w-full'>
              <select onChange={handleChange} className='h-[60px] bg-transparent' value={formErrors.role} name="role" id="userType" form="userform">
                <option >Select</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <p className='text-red-500'>{formErrors.role}</p>
              </div>
              <p className='text-red-500'>{formErrors.select}</p>
              </div>
            <Button
              width="full"
              label={isLoading ? <Spinner /> : 'Submit'}
              disabled={isLoading}
              type="submit"
            />
          </div>
          <div className="sign__desc">
            <p>Already have an account? <Link href="/sign-in">Sign In</Link></p>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Registration;
