import React from 'react';

// Components
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

// Style
import { SignInAndSignUpContainer } from './SignInSignUpPage.styles';

const SignInSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInSignUpPage;
