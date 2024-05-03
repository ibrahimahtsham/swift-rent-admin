import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import Analytics from "./analytics/Analytics";
import AuditLogs from "./audit-logs/AuditLogs";
import ManageCities from "./manage-cities/ManageCities";
import ManageComplains from "./manage-complains/ManageComplains";
import ManageProperties from "./manage-properties/ManageProperties";
import ManageUsers from "./manage-users/ManageUsers";

const MainPageCard = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const screenWidth = window.innerWidth;

  return (
    <Card
      style={{
        width: `${screenWidth - 170}px`,
        padding: "20px",
        backgroundColor: theme === "dark" ? "#424242" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      {children}
    </Card>
  );
};

const MainPage = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <MainPageCard>
          <CardContent>
            <Analytics />
          </CardContent>
        </MainPageCard>
      </Grid>
      <Grid item>
        <MainPageCard>
          <CardContent>
            <AuditLogs />
          </CardContent>
        </MainPageCard>
      </Grid>
      <Grid item>
        <MainPageCard>
          <CardContent>
            <ManageCities />
          </CardContent>
        </MainPageCard>
      </Grid>
      <Grid item>
        <MainPageCard>
          <CardContent>
            <ManageComplains />
          </CardContent>
        </MainPageCard>
      </Grid>
      <Grid item>
        <MainPageCard>
          <CardContent>
            <ManageProperties />
          </CardContent>
        </MainPageCard>
      </Grid>
      <Grid item>
        <MainPageCard>
          <CardContent>
            <ManageUsers />
          </CardContent>
        </MainPageCard>
      </Grid>
    </Grid>
  );
};

export default MainPage;
