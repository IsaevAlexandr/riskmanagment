import { Grid, Button } from "@mui/material";
import { Cell, Column } from "react-table";
import { Table } from "../Table";
import { data, Risk } from "./data";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { RiskModalForm } from "./RiskModalForm";
import { getData, setData } from "../../utils/dataManagment";
import { RiskMatrix } from "../RiskMatrix/RiskMatrix";
import { calculateCoordsForMatrix } from "./matrixFormua";
import { ImageModal } from "../ImageModal";
import { Layout } from "../Layout";

export const getColumns = (
  onDescClick: (v: string) => void
): Column<Risk>[] => {
  return [
    { Header: "N", accessor: (x) => x.id, width: 50 },
    { Header: "Название", accessor: (x) => x.name },
    {
      Header: "Описание",
      accessor: (x) => x.description,
      Cell: (v: Cell<Risk, string>) => {
        return v.value ? (
          <Button onClick={() => onDescClick(v.value)}>Диаграмма</Button>
        ) : null;
      },
    },
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
      width: 200,
    },
    {
      Header: "Время на восстановление после мероприятия",
      accessor: (x) => x.time_recovery_after,
      width: 240,
    },
    { Header: "Бизнес-процесс", accessor: (x) => x.business_process },
    { Header: "Владелец риска", accessor: (x) => x.risk_owner },
  ];
};

export const RiskPage = () => {
  const [riskDescVisibility, setDescVisibility] = React.useState({
    visible: false,
    image: "",
  });
  const columns = React.useMemo(
    () => getColumns((image) => setDescVisibility({ visible: true, image })),
    []
  );
  const [open, setOpen] = React.useState(false);

  const dataFromStorage = getData<Risk[]>("risk", []);

  const [riskState, setRiskState] = React.useState<Risk[]>([
    ...data,
    ...dataFromStorage,
  ]);

  const handleSaveRisk = (v: Risk) => {
    const newRisk = {
      ...v,
      id: riskState[riskState.length - 1].id + 1,
    };

    const dataFromStorage = getData<Risk[]>("risk", []);

    const da = [...dataFromStorage, newRisk];

    setData("risk", da);

    setRiskState([...riskState, newRisk]);
  };

  return (
    <Layout title="Управление рисками">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RiskMatrix
            cellWidth={60}
            risks={riskState.map((r) => {
              const { x, y } = calculateCoordsForMatrix(r);

              return {
                number: y,
                risk: x,
                rowIndex: Number(r.id),
              };
            })}
          />
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <AddIcon />
            Новый риск
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Table<Risk> data={riskState} columns={columns} />
        </Grid>
      </Grid>

      <RiskModalForm
        visible={open}
        onSave={handleSaveRisk}
        onClose={() => setOpen(false)}
      />
      <ImageModal
        visible={riskDescVisibility.visible}
        onClose={() => setDescVisibility({ visible: false, image: "" })}
        image={riskDescVisibility.image}
      />
    </Layout>
  );
};
