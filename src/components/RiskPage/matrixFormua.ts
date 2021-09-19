import { RiskFactor } from "../../interfaces";
import { Risk } from "./data";

interface ReturnData {
  y: number;
  x: RiskFactor;
}

export const calculateCoordsForMatrix = ({
  probability_before,
  time_recovery_before,
  costs_recovery_before,
}: Risk): ReturnData => {
  let y = 0;
  let x: RiskFactor = "e";
  // координата Y - вероятность возникновения, от 1 до 5
  if (+probability_before <= 0.05) y = 1;
  if (+probability_before > 0.05 && +probability_before <= 0.2) y = 2;
  if (+probability_before > 0.2 && +probability_before <= 0.5) y = 3;
  if (+probability_before > 0.5 && +probability_before <= 0.8) y = 4;
  if (+probability_before > 0.8) y = 5;

  // координата Х - степень влияния / ущерб, от е до а
  let losses = +time_recovery_before * 1000 + +costs_recovery_before;
  if (losses <= 0.5) x = "e";
  if (losses > 0.5 && losses <= 3) x = "d";
  if (losses > 3 && losses <= 30) x = "c";
  if (losses > 30 && losses <= 300) x = "b";
  if (losses > 300) x = "a";

  return { y, x };
};
