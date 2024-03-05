import { Card, CardContent, Grid, Typography } from "@mui/material";
import "./cardComp.css";

const CardComp = ({ usersData }) => {
  console.log("usersData?.", usersData);
  return (
    <>
      <Card className="optionCard">
        <CardContent>
          <Grid container>
            <Grid item xs={4} md={4}>
              <img className="imgInfo" src={usersData?.img} alt="dp"></img>
            </Grid>
            <Grid item xs={8} md={8}>
              <Typography>{`${usersData?.first_name} ${usersData?.last_name}`}</Typography>
              <Typography variant="subtitle2" style={{ color: "gray" }}>
                {usersData?.email}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComp;
