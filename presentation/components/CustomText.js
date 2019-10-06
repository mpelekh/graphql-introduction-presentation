import React from 'react';
import { Text } from 'spectacle';

export const CustomText = (props) => (
  <Text textColor="textColorDark" textAlign="left" textSize="2.66rem" margin="10px 0 0" style={{ lineHeight: '1.2' }} {...props}>{props.children}</Text>
);
