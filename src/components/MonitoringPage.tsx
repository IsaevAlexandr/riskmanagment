import { Grid, Container, Paper } from "@mui/material";
import { Table } from "./Table";

export const MonitoringPage = () => {
  return (
    <Container>
      <Paper sx={{p: 2, mt: 2}}>
        {/* <Grid container spacing={2}>
          <Grid> */}
            <Table
              data={[{ a: "1", b: "2" }]}
              columns={[
                { accessor: (x: { a: any }) => x.a, id: "a", Header: "a" },
                { accessor: (x: { b: any }) => x.b, id: "b", Header: "b" },
              ]}
            />
          {/* </Grid>
        </Grid> */}
      </Paper>
    </Container>
  );
};
