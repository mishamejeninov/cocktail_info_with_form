import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

export default function Coctail() {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.drinks.map((item) => (
        <Paper className="card" elevation={5}>
          <Typography color="primary" variant="h4">
            {item.strDrink}
          </Typography>
          <Grid className="wrapper" key={item.id} container spacing={5}>
            <Grid item>
              <img className="img" alt="complex" src={item.strDrinkThumb} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={0}>
                <Grid item xs>
                  <Typography className="pography" color="primary" variant="h6">
                    Category
                  </Typography>
                  <Typography color="textSecondary" variant="body1">
                    {item.strCategory}
                  </Typography>
                  <Typography className="pography" color="primary" variant="h6">
                    Ingredient
                  </Typography>
                  <ul className="ingredient">
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                    <li>{item.strIngredient5}</li>
                  </ul>
                  <Typography className="pography" color="primary" variant="h6">
                    Measure
                  </Typography>
                  <ul className="ingredient">
                    <li>{item.strMeasure1}</li>
                    <li>{item.strMeasure2}</li>
                    <li>{item.strMeasure3}</li>
                    <li>{item.strMeasure4}</li>
                    <li>{item.strMeasure5}</li>
                  </ul>
                  <Typography className="pography" color="primary" variant="h6">
                    Instructions
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                    gutterBottom
                  >
                    {item.strInstructions}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
