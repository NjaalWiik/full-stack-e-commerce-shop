import React, { useState } from 'react';

// Components
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

// Styles
import './SignIn.styles.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    setFormData({
      email: '',
      password: ''
    });
  };

  const { email, password } = formData;

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='email'
          handleChange={onChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='password'
          handleChange={onChange}
          required
        />
        <CustomButton type='submit'> Sign in </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
