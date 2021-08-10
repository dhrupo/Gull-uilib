import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Image from "next/image";
import AllCardData from "../AllCard";

const CustomCard = styled(Card)({
  backgroundColor: "#fff",
  borderRadius: "25px",
  boxShadow: "none",
});

const CustomTypography = styled(Typography)({
  margin: "0",
  fontWeight: 700,
  fontSize: "1.8rem",
});

const IconDiv = styled("div")({
  padding: "1.2rem 0.6rem",
  marginRight: "0.6rem",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
});
const CardItem = styled("div")({
  display: "flex",
  padding: "25px 18px",
});

const Dashboard = () => {
  return AllCardData.map((cardData) => (
    <Grid key={cardData.Title} item xs>
      <CustomCard>
        <CardItem>
          <IconDiv style={{ background: cardData.bgColor }}>
            <Image src={cardData.Icon}></Image>
          </IconDiv>
          <div>
            <Typography color="secondary" sx={{ marginTop: "3px" }}>
              <small>{cardData.Title}</small>
            </Typography>
            <CustomTypography style={{ color: cardData.color }}>
              {cardData.count}
            </CustomTypography>
          </div>
        </CardItem>
      </CustomCard>
    </Grid>
  ));
};

export default Dashboard;
