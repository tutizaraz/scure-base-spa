import styled from "styled-components";

const EncoderContainer = styled.div`
  font-family: "Tahoma", sans-serif;
  background-color: #f5f5f5;
  border: 1px solid #b0b0b0;
  padding: 10px;
  width: 300px;
`;

const XPButton = styled.button`
  background-color: #b6bdd2;
  border: 1px solid #7b849e;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #a5aec5;
  }
`;

const Title = styled.h1`
  font-size: 12px;
`;

const XPTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border: 1px solid #b0b0b0;
  background-color: #ffffff;
  font-family: "Tahoma", sans-serif;
`;

export { EncoderContainer, XPButton, Title, XPTextArea };
