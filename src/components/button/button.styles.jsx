import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: "Open Sans Condensed";
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  width: auto;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

// 相当于继承 BaseButton 的 style
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
