import styled from 'styled-components';
import { Colors } from 'assets/Variables.style';

export const AlertSuccess = styled.div`
  /* Positioning */
  margin-left: 20px;
  margin-top: 20px;
  /* Display & Box Model */
  height: 105px;
  width: 370px;
  padding: 0.1em;
  display: grid;
  grid-template-columns: 45px 240px 70px 15px;
  grid-template-rows: 70px 25px;
  /* Color */
  background: ${Colors.mercury};
  /* Text */
  font-family: 'Roboto', sans-serif;
  /* Other */
`;

export const Cross = styled.a`
  grid-column: 4;
  grid-row:1;
  color: ${Colors.blackAlfa8};;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
`;

export const Icon = styled.div`
  margin: 0.1em;
  margin-bottom: 0.9em;
  border-radius: 0.2em;
  grid-column: 1;
  grid-row:1;
  color: ${Colors.white};
  background: ${Colors.blackAlfa8};
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
`;

export const Statement = styled.div`
  margin-top: 0.4em;
  margin-left: 0.4em;
  grid-column: 2/4;
  grid-row:1;
  line-height: 1.3;
  font-size: 0.9em;
`;

export const Car = styled.div`
  line-height: 1.3;
  font-weight: bold;
  font-size: 1em;
`;

export const Change = styled.a`
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  grid-column: 3;
  grid-row:2;
  color: ${Colors.white};
  background: ${Colors.scorpionLight};
  text-align: center;
  font-size: 1em;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: ${Colors.scorpion};
  }
`;

export const AlertWarning = styled.div`
  /* Positioning */
  margin-left: 20px;
  margin-top: 20px;
  /* Display & Box Model */
  height: 190px;
  width: 370px;
  padding: 0.1em;
  display: grid;
  grid-template-columns: 45px 250px 60px 15px;
  grid-template-rows: 70px 40px 70px;
  /* Color */
  background: ${Colors.mercury};
  /* Text */
  font-family: 'Roboto', sans-serif;
  /* Other */
`;

export const StatementWar = styled.div`
  margin-top: 0.4em;
  margin-left: 0.4em;
  grid-column: 2/4;
  grid-row:1;
  line-height: 1.3;
  font-size: 1.2em;
  font-weight: bold;
`;

export const CarWar = styled.div`
  font-size: 0.8em;
`;

export const ChangeCarButton = styled.a`
  margin-left: 3.5em;
  height: 30px;
  width: 200px;
  padding-top: 0.35em;
  grid-column: 2/3;
  grid-row: 2;
  border-radius: 0.12em;
  background: ${Colors.blue};
  color: ${Colors.white};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 1em;
  transition: 0.5s;
  &:hover {
    background: ${Colors.darkBlue};
  }
`;

export const Offer = styled.div`
  margin-left: 1em;
  grid-column: 1/4;
  grid-row: 3;
  font-size: 0.9em;
`;

export const StatementWrong = styled.div`
  margin-top: 0.4em;
  margin-left: 0.4em;
  grid-column: 2/4;
  grid-row:1;
  line-height: 1.3;
  font-size: 1.1em;
  font-weight: bold;
`;

export const CarWrong = styled.div`
  margin-top: 0.5em;
  font-size: 0.8em;
`;

export const IconRed = styled.div`
  margin: 0.1em;
  margin-bottom: 0.9em;
  border-radius: 0.2em;
  grid-column: 1;
  grid-row:1;
  color: ${Colors.white};
  background: ${Colors.red};
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
`;
