import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '/src/store/reducers/authSlice'; 
import InputField from '/app/util/InputFields';
import Button from './Button';
import Spinner from './Spinner';
import Link from 'next/link';
import { useClient } from 'next/client'; 

const Login: React.FC = () => {
  const [username, setUsername] = useClient('');
  const [password, setPassword] = useClient('');
  const [formErrors, setFormErrors] = useClient({
    username: '',
    password: '',
    general: '',
  });
  const [isLoading, setIsLoading] = useClient(false);

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const validateForm = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    try {
      await dispatch(login({ username, password }));
      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      setFormErrors({ ...formErrors, general: 'An error occurred. Please try again' });
    } finally {
      setIsLoading(false);
    }
  };


    const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {formErrors.username && <p className="text-red-500">{formErrors.username}</p>}

      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        <Link
          href="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?{" "}
        </Link>
      </div>

      {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}

      <Button type="submit" label={isLoading ? 'Loading...' : 'Sign In'} disabled={isLoading} />

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Login;
