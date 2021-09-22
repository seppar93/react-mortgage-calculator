/** @format */

import styled from "styled-components";
import backGroundImg from "./assets/background.jpeg";

export const AppContainer = styled.div`
  background: url(${backGroundImg});
  background-size: cover;
  background-position: center;
  padding: 2rem 0;
  height: 100vh;
  width: 100vw;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  height: 70vh;
  max-width: 900px;
  margin: auto;

  h1 {
    font-size: 35px;
    font-weight: 500;
    color: #2a6279;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-top: 3rem;
    background: #fff;
    padding: 3rem;
    color: #2a6279;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    border-radius: 1rem;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

export const InputSection = styled.div`
  width: 45%;
  min-width: 350px;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  label {
    text-transform: uppercase;
    font-weight: bold;
    color: #2a6279;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }
  input {
    background-color: rgba(255, 255, 255, 0.7);
    height: 35px;
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    margin: 0.2rem 0.5rem;
    color: #2a6279;
    font-weight: 500;
    font-size: 20px;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 16px --1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
        0 16px 16px -1px rgba(8, 11, 14, 0.1);
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #ffdf00;
  color: #fff;
  font-weight: bold;
  border: none;
  width: 150px;
  height: 36px;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.03em;
  line-height: 36px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px --1px rgba(8, 11, 14, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 16px 16px -1px rgba(8, 11, 14, 0.1);
  }
`;

export const WarningMessage = styled.h4`
  color: red;
  font-size: 13px;
`;
