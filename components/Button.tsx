import { Button as RNButton } from "react-native";

import { ComponentProps } from "react";

const Button = (props: ComponentProps<typeof RNButton>) => {
  return <RNButton {...props} color="blue" />;
};

export default Button;
