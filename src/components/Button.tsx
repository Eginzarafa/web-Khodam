import { Button as AntButton, Flex } from "antd";


interface ButtonProps  {
    title : string;
    onclick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ title, onclick }) => {
  return (
    <Flex gap="small" wrap>
      <AntButton type="primary" onClick={onclick}>
        {title}
      </AntButton>
    </Flex>
  );
};

export default Button;
