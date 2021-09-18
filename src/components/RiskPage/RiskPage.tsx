import { Container, Paper, Grid, Button } from "@mui/material";
import { Column } from "react-table";
import { Table } from "../Table";
import { data, Risk } from "./data";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const getColumns = (): Column<Risk>[] => {
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

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: "80px" }}>
        <Grid item>
          <Button variant="contained">
            <AddIcon />
            Новый риск
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ overflow: "scroll" }}>
          <Paper>
            <Table<Risk> data={data} columns={columns} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
