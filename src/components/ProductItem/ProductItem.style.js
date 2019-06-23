import styled from 'styled-components';
import { Colors } from 'assets/Variables.style';

export const Product = styled.div`
  /* Positioning */
  margin-left: 20px;
  margin-top: 20px;
  /* Display & Box Model */
  height: 285px;
  width: 200px;
  padding: 0.1em;
  /* Color */
  background: ${Colors.scorpion};
  /* Text */
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  /* Other */
`;

export const Price = styled.div`
  margin-left: 0.7em;
  color: ${Colors.white};
  font-weight: bold;
  font-size: 1.7em;
`;

export const OldPrice = styled.div`
  margin-left: 0.9em;
  margin-top: 0.3em;
  position: absolute;
  color: ${Colors.silverChalice};
  text-decoration: line-through;
  font-size: 1.3em;
`;

export const Discount = styled.div`
  margin-left: 7em;
  margin-top: 0.4em;
  position: static;
  height: 30px;
  width: 55px;
  padding-top: 1px;
  border-radius: 0.12em;
  background: ${Colors.red};
  color: ${Colors.white};
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
`;

export const Name = styled.div`
  margin-left: 1.4em;
  color: ${Colors.white};
  font-size: 1em;
  font-weight: bold;
  line-height: 1.3;
`;

export const Subname = styled.div`
  margin-left: 1.4em;
  color: ${Colors.white};
  font-size: 1em;
  font-weight: bold;
  line-height: 1.3;
`;

export const Description = styled.div`
  margin-left: 1em;
  padding: 5px;
  color: ${Colors.silverChalice};
  font-size: 1em;
  line-height: 1;
`;

export const Value = styled.div`
  margin-left: 1.3em;
  color: ${Colors.silverChalice};
  font-size: 1em;
  line-height: 1;
`;

export const Wrong = styled.div`
  color: ${Colors.red};
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1;
`;

export const More = styled.div`
  margin: 0.5em;
  padding: 5px;
  color: ${Colors.silverChalice};
  font-size: 1em;
  line-height: 1.43;
`;

export const Empty = styled.div`
  padding: 1.39em;
`;

export const MoreButton = styled.a`
  margin-left: 0.5em;
  margin-top: 0.5em;
  display: inline-block;
  padding: 0.4em 5em;
  border-radius: 0.12em;
  background: ${Colors.silverChalice};
  color: black;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 1em;
  transition: 0.5s;
  &:hover {
    background: ${Colors.white};
  }
`;

export const AddToCart = styled.a`
  margin: 0.5em;
  display: inline-block;
  padding: 1em 2.5em;
  border-radius: 0.12em;
  background: ${Colors.apple};
  color: ${Colors.white};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background: ${Colors.darkApple};
  }
`;

export const NotAddToCart = styled.a`
  margin: 0.5em;
  display: inline-block;
  padding: 1em 2.95em;
  border-radius: 0.12em;
  background: ${Colors.darkApple};
  color: ${Colors.white};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background: ${Colors.apple};
  }
`;

export const Follow = styled.a`
  margin-left: 0.5em;
  display: inline-block;
  padding: 0.4em 4.1em;
  border: 0.1em solid ${Colors.silverChalice};
  border-radius: 0.12em;
  color: ${Colors.silverChalice};
  background: ${Colors.scorpion};
  text-decoration: none;
  text-align: center;
  font-size: 0.8em;
  transition: 0.5s;
  &:hover {
    border: 0.1em solid ${Colors.white};
    color: ${Colors.white};
  }
`;

export const NotFollow = styled.a`
  margin-left: 0.5em;
  display: inline-block;
  padding: 0.4em 3em;
  border: 0.1em solid ${Colors.white};
  border-radius: 0.12em;
  color: ${Colors.white};
  background: ${Colors.scorpion};
  text-decoration: none;
  text-align: center;
  font-size: 0.8em;
  transition: 0.5s;
  &:hover {
    border: 0.1em solid ${Colors.silverChalice};
    color: ${Colors.silverChalice};
  }
`;

export const Cross = styled.a`
  margin: 0.2em;
  margin-right: 0.5em;
  float: right;
  display: inline-block;
  color: ${Colors.white};
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  &:hover {
    color: ${Colors.silverChalice};
  }
`;
