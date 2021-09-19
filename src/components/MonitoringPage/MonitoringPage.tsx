import { Grid } from "@mui/material";
import { Layout } from "../Layout";
import monitoringImage from "./monitoring.jpg";

export const MonitoringPage = () => {
  return (
    <Layout title="Мониторинг рисков и непрерывности работы систем">
      <Grid container spacing={2}>
        <img src={monitoringImage} alt="monitoring" style={{ width: "100%" }} />
      </Grid>
    </Layout>
  );
};
