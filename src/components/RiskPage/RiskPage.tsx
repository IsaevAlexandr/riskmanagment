import { Container, Paper, Grid, Button } from "@mui/material";
import { Column } from "react-table";
import { Table } from "../Table";
import { data, Risk } from "./data";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { RiskModalForm } from "./RiskModalForm";
import { getData, setData } from "../../utils/dataManagment";


export const getColumns = (): Column<Risk>[] => {
  return [
    { Header: "N", accessor: (x) => x.id },
    { Header: "Название", accessor: (x) => x.name },
    { Header: "Описание", accessor: (x) => x.description },
    { Header: "Категория", accessor: (x) => x.category },
    { Header: "Ключевой фактор", accessor: (x) => x.reason },
    { Header: "Вероятность (текущая)", accessor: (x) => x.probability_before },
    { Header: "Среднее НПВ", accessor: (x) => x.time_recovery_before },
    {
      Header: "Затраты на восстановление",
      accessor: (x) => x.costs_recovery_after,
    },
    { Header: "Текущий ущерб", accessor: (x) => x.costs_recovery_before },
    { Header: "Мероприятие", accessor: (x) => x.measure_probability_presence },
    {
      Header: "Вероятность после мероприятия",
      accessor: (x) => x.probability_after,
    },
    {
      Header: "Потери времени на восстановление после мероприятия",
      accessor: (x) => x.time_recovery_after,
    },
    { Header: "Бизнес-процесс", accessor: (x) => x.business_process },
    { Header: "Владелец риска", accessor: (x) => x.risk_owner },
  ];
};

export const RiskPage = () => {
  const columns = React.useMemo(() => getColumns(), []);
  const [open, setOpen] = React.useState(false);
  const dataFromStorage = getData<Risk[]>("risk", []);

  const [riskState, setRiskState] = React.useState<Risk[]>([
    ...data,
    ...dataFromStorage,
  ]);

  const handleSaveRisk = (v: Risk) => {
    const newRisk = {
      ...v,
      id: String(1 + Number(riskState[riskState.length - 1].id)),
    };

    const dataFromStorage = getData<Risk[]>("risk", []);

    const da = [...dataFromStorage, newRisk];

    setData("risk", da);

    setRiskState([...riskState, newRisk]);
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: "80px" }}>
        <Grid item>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <AddIcon />
            Новый риск
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ overflow: "scroll" }}>
          <Paper>
            <Table<Risk> data={riskState} columns={columns} />
          </Paper>
        </Grid>
      </Grid>

      <RiskModalForm
        visible={open}
        onSave={handleSaveRisk}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
};
