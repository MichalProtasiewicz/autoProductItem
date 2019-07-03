import styled from 'styled-components';
import { Colors } from 'assets/Variables.style';

export const Product = styled.div`
  /* Positioning */
  margin-left: 20px;
  margin-top: 20px;
  /* Display & Box Model */
  height: 300px;
  width: 200px;
  padding: 0.1em;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 30px 45px 50px 45px 35px 62px 30px;
  /* Color */
  background: ${Colors.scorpion};
  /* Text */
  font-family: 'Roboto', sans-serif;
  /* Other */
`;

export const OldPrice = styled.div`
  margin-left: 0.9em
  margin-top: 0.3em;
  grid-column: 1;
  grid-row:1;
  color: ${Colors.silverChalice};
  text-decoration: line-through;
  font-size: 1.35em;
`;

export const Discount = styled.div`
  margin-left: 1.5em;
  margin-top: 0.3em;
  grid-column: 2;
  grid-row: 1;
  height: 30px;
  width: 55px;
  padding-top: 1px;
  border-radius: 0.12em;
  background: ${Colors.red};
  color: ${Colors.white};
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  grid-column: 2;
  grid-row: 1;
`;

export const Price = styled.div`
  margin-top: 0.2em;
  margin-left: 0.6em;
  grid-column: 1/3;
  grid-row: 2;
  color: ${Colors.white};
  font-weight: bold;
  font-size: 1.7em;
`;

export const Name = styled.div`
  margin-left: 1.2em;
  grid-column: 1/3;
  grid-row: 2;
  color: ${Colors.white};
  font-size: 1em;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 0.05em;
  grid-column: 1/3;
  grid-row: 3;
`;

export const Description = styled.div`
  margin-left: 1.25em;
  grid-column: 1/3;
  grid-row: 4;
  color: ${Colors.silverChalice};
  font-size: 0.9em;
  line-height: 1.1;
  letter-spacing: 0.03em;
`;

export const More = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  height: 285px;
  width: 200px;
  padding: 0.1em;
  background: ${Colors.scorpion};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.03em;
  color: ${Colors.silverChalice};
  font-size: 1em;
  line-height: 1.43;
`;

export const MoreButton = styled.a`
  margin-left: 0.5em;
  margin-top: 0.5em;
  height: 30px;
  width: 185px;
  padding-top: 0.35em;
  grid-column: 1/3;
  grid-row: 5;
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
  height: 50px;
  width: 185px;
  padding-top: 1em;
  grid-column: 1/3;
  grid-row: 6;
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
  height: 50px;
  width: 185px;
  padding-top: 1em;
  grid-column: 1/3;
  grid-row: 6;
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
  height: 25px;
  width: 185px;
  padding-top: 0.4em;
  grid-column: 1/3;
  grid-row: 7;
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
  height: 25px;
  width: 185px;
  padding-top: 0.4em;
  grid-column: 1/3;
  grid-row: 7;
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

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px;
  grid-gap: 10px;
`;

export const Empty = styled.div``;

export const Subname = styled.div``;

export const Value = styled.div``;
