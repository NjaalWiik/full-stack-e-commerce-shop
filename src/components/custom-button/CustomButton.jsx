import React from 'react';

// Styles
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
