import React from 'react';

// Components
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

// Style
import './SignInSignUpPage.styles.scss';

const SignInSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
