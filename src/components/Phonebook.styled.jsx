import styled from "styled-components";

export const FormTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: relative;
  display: flex;
  color: #2defdc;
  font-size: 26px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: #2defdc;
  }
`;

export const FormSubtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #2defdc;
  font-size: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-items: center;
  flex-direction: column;
  padding: 30px;
`;

export const FormLabel = styled.label`
  margin-bottom: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #ffff;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-bottom-color: #ddd;
  }
`;

export const FormBtn = styled.button`
  background: none;
  border: 1px solid #2defdc;
  font-family: "Montserrat", sans-serif;
  color: #2defdc;
  font-size: 14px;
  height: 30px;
  padding: 5px 20px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #0ec7b5;
    border: 1px solid #0ec7b5;
  }
`;

export const FormText = styled.p`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #ffff;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 15px;
`;

export const FormList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FormListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 50px;
`;
