import styled from "styled-components";
import Button from "../ui/Button/Button";
export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
