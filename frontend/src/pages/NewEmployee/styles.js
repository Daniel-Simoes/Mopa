import styled, { keyframes } from 'styled-components';
import { Form } from '@unform/web';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  text-align: center;

  svg {
    height: 30px;
    width: 30px;
    color: #ddd;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const UnForm = styled(Form)`
  max-width: 900px;
  margin: 0 auto;

  header {
    margin-bottom: 34px;
    display: flex;
    flex-direction: row;

    button {
      &:nth-child(2) {
        margin-left: auto;
      }

      &:nth-child(3) {
        margin-left: 16px;
      }
    }
  }
`;

export const Button = styled.button.attrs((props) => ({
  color: props.color || '#CCCCCC',
}))`
  height: 36px;
  background: ${(props) => props.color};
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 20px;
  border-radius: 4px;
  border: none;
  transition: background 300ms;

  svg {
    margin-right: 6px;
  }

  &:hover {
    background: ${(props) => darken(0.2, props.color)};
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px 22px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div:nth-child(2),
  div:nth-child(3),
  div:nth-child(4),
  div:nth-child(5) {
    align-self: stretch;
  }
`;
