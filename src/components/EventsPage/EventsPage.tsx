import { Grid, Button } from "@mui/material";
import { Column } from "react-table";
import { Table } from "../Table";
import { Layout } from "../Layout";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { data, Event } from "./data";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React from "react";
import { DateRangePicker } from "@mui/lab";
import { Box } from "@mui/system";
import { EventModalForm } from "./EventModalForm";
import { getData, setData } from "../../utils/dataManagment";

const getColumns = (): Column<Event>[] => {
  return [
    { Header: "N", accessor: (x) => x.id, width: 50 },
    { Header: "Мероприятие", accessor: (x) => x.event },
    {
      Header: "Описание мероприятия",
      accessor: (x) => x.description,
      width: 200,
    },
    { Header: "Адресуемый риск", accessor: (x) => x.risk },
    { Header: "N риска", accessor: (x) => x.riskNum },
    { Header: "Вероятность до", accessor: (x) => x.probabilityBefore },
    { Header: "Вероятность после", accessor: (x) => x.probabilityAfter },
    {
      Header: "Потери до, тыс. руб",
      accessor: (x) => x.lossesBefore,
      width: 200,
    },
    {
      Header: "Потери после, тыс. руб",
      accessor: (x) => x.lossesAfter,
      width: 200,
    },
    {
      Header: "Оценка риска до, тыс. руб",
      accessor: (x) => x.riskAssessmentBefore,
      width: 200,
    },
    {
      Header: "Оценка риска после, тыс. руб",
      accessor: (x) => x.riskAssessmentAfter,
      width: 200,
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
  const [open, setOpen] = React.useState(false);
  const dataFromStorage = getData<Event[]>("event", []);
  const [value, setValue] = React.useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [eventState, setEventState] = React.useState<Event[]>([
    ...data,
    ...dataFromStorage,
  ]);

  const handleSaveEvent = (v: Event) => {
    const newEvent = {
      ...v,
      id: eventState[eventState.length - 1].id + 1,
    };

    const dataFromStorage = getData<Event[]>("event", []);

    const da = [...dataFromStorage, newEvent];

    setData("event", da);

    setEventState([...eventState, newEvent]);
  };

  return (
    <Layout title="Планирование мероприятий по снижению рисков">
      <Grid container spacing={2}>
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
          <Button variant="contained" onClick={() => setOpen(true)}>
            <AddIcon />
            Мероприятие
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Table<Event> data={eventState} columns={columns} />
        </Grid>
      </Grid>

      <EventModalForm
        visible={open}
        onSave={handleSaveEvent}
        onClose={() => setOpen(false)}
      />
    </Layout>
  );
};
