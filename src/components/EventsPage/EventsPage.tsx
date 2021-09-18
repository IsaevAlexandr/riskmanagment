import { Container, Paper, Grid, Button } from "@mui/material";
import { Column } from "react-table";
import { Table } from "../Table";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { data, Event } from "./data";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React from "react";
import { DateRangePicker } from "@mui/lab";
import { Box } from "@mui/system";

const getColumns = (): Column<Event>[] => {
  return [
    { Header: "N", accessor: (x) => x.id },
    { Header: "Мероприятие", accessor: (x) => x.event },
    { Header: "Описание мероприятия", accessor: (x) => x.description },
    { Header: "Адресуемый риск", accessor: (x) => x.risk },
    { Header: "N риска", accessor: (x) => x.riskNum },
    { Header: "Вероятность до", accessor: (x) => x.probabilityBefore },
    { Header: "Вероятность после", accessor: (x) => x.probabilityAfter },
    { Header: "Потери до, тыс. руб", accessor: (x) => x.lossesBefore },
    { Header: "Потери после, тыс. руб", accessor: (x) => x.lossesAfter },
    {
      Header: "Оценка риска до, тыс. руб",
      accessor: (x) => x.riskAssessmentBefore,
    },
    {
      Header: "Оценка риска после, тыс. руб",
      accessor: (x) => x.riskAssessmentAfter,
    },
    { Header: "Дата начала", accessor: (x) => x.startDate },
    { Header: "Дата завершения", accessor: (x) => x.endDate },
    { Header: "Стоимость мероприятия", accessor: (x) => x.totalCost },
    { Header: "Ответственный", accessor: (x) => x.responsible },
    { Header: "Статус", accessor: (x) => x.status },
  ];
};

export const EventsPage = () => {
  const columns = React.useMemo(() => getColumns(), []);
  const [value, setValue] = React.useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: "80px" }}>
        <Grid item sx={{ mr: "auto" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Дата с"
              endText="Дата по"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> - </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <Button variant="contained">
            <AddIcon />
            Мероприятие
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ overflow: "scroll" }}>
          <Paper>
            <Table<Event> data={data} columns={columns} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
