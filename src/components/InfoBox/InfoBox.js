import React from "react";
import './InfoBox.css'
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, total, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infobox ${active && "infobox--selected"} ${isRed && "infobox--red"
        }`}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infobox_cases ${!isRed && "infobox_cases--green"}`}>{cases}</h2>
        <Typography className="infobox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
