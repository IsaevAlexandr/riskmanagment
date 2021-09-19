import desc1 from "./desc1.png";
import desc2 from "./desc2.png";
import desc3 from "./desc3.png";
import desc4 from "./desc4.png";

export interface Risk {
  id: number;
  name: string;
  description: string;
  category: string;
  reason: string;
  probability_before: number;
  time_recovery_before: number;
  costs_recovery_after: number;
  costs_recovery_before: number;
  measure_probability_presence: string;
  probability_after: number;
  time_recovery_after: number;
  business_process: string;
  risk_owner: string;
}

export const data: Risk[] = [
  {
    id: 1,
    name: "Обрыв линии связи",
    description: desc1,
    category: "Технологические (оборудование)",
    reason: "Пожар",
    probability_before: 0.1,
    time_recovery_before: 7.44,
    costs_recovery_after: 1440,
    costs_recovery_before: 1440,
    measure_probability_presence: "Организация системы пожаротушения",
    probability_after: 0.01,
    time_recovery_after: 7.44,
    business_process: "Мониторинг процесса бурения",
    risk_owner: "Иванов Иван Иванович",
  },
  {
    id: 2,
    name: "Отказ работы сервера",
    description: desc2,
    category: "Технологические (оборудование)",
    reason: "Перегрев",
    probability_before: 0.01,
    time_recovery_before: 720,
    costs_recovery_after: 4.72,
    costs_recovery_before: 4.72,
    measure_probability_presence: "Охлаждение сервера",
    probability_after: 0.005,
    time_recovery_after: 720,
    business_process: "Мониторинг процесса бурения",
    risk_owner: "Петров Петр Петрович ",
  },
  {
    id: 3,
    name: "Прекращение подачи электроэнергии",
    description: desc3,
    category: "Технологические (оборудование)",
    reason: "Короткое замыкание",
    probability_before: 0.06,
    time_recovery_before: 1440,
    costs_recovery_after: 25,
    costs_recovery_before: 31.44,
    measure_probability_presence:
      "Хранение на складе запасной серверной станции",
    probability_after: 0.06,
    time_recovery_after: 0,
    business_process: "Мониторинг процесса бурения",
    risk_owner: "Иванов Иван Иванович",
  },
  {
    id: 4,
    name: "Отказ от предоставления лицензий ввиду санкций",
    description: desc4,
    category: "Политические",
    reason: "Введение новых санкций",
    probability_before: 0.04,
    time_recovery_before: 144000,
    costs_recovery_after: 100,
    costs_recovery_before: 294,
    measure_probability_presence: "",
    probability_after: 0.04,
    time_recovery_after: 0,
    business_process: "Мониторинг процесса бурения",
    risk_owner: "Иванов Иван Иванович",
  },
];
