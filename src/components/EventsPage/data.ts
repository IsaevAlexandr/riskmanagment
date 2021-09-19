export interface Event {
  id: number;
  event: string;
  description: string;
  risk: string;
  riskNum: string;
  probabilityBefore: number;
  probabilityAfter: number;
  lossesBefore: number;
  lossesAfter: number;
  riskAssessmentBefore: number;
  riskAssessmentAfter: number;
  startDate: string;
  endDate: string;
  totalCost: string;
  responsible: string;
  status: string;
}

export const data: Event[] = [
  {
    id: 1,
    event: "Ввод резервной линии",
    description: "Закупка и установка резервной линии связи",
    risk: "Обрыв линии связи",
    riskNum: "2",
    probabilityBefore: 0.1,
    probabilityAfter: 0.05,
    lossesBefore: 10000,
    lossesAfter: 6000,
    riskAssessmentBefore: 1000,
    riskAssessmentAfter: 300,
    startDate: "01.06.2021",
    endDate: "15.09.2021",
    totalCost: "1000",
    responsible: "Иванов И.И.",
    status: "Ожидание отчёта",
  },
];
