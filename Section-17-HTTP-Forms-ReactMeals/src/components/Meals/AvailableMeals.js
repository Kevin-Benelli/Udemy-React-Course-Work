import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Axios from "axios";
import useHttp from "../../hooks/use-htttp";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  // const { isLoading, error, sendRequest: sendMealsGetRequest } = useHttp();

  // useEffect(() => {
  //   sendMealsGetRequest({
  //     url: "https://react-http-ea327-default-rtdb.firebaseio.com/meals.json",
  //     headers: { "content-type": "text/json" },
  //   });
  // }, []);

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    const mealResponse = await Axios.get(
      "https://react-http-ea327-default-rtdb.firebaseio.com/meals.json",
      {
        headers: {
          "content-type": "text/json",
        },
      }
    );
    // if (!mealResponse.ok) { // this will reject promise
    //   throw new Error("Somthing went wrong!");
    // }

    console.log("MEALS!: ", mealResponse.data);
    const mealResponseData = mealResponse.data;
    const loadedMeals = [];

    for (const key in mealResponseData) {
      loadedMeals.push({
        id: key,
        name: mealResponseData[key].name,
        description: mealResponseData[key].description,
        price: mealResponseData[key].price,
      });
    }

    console.log(loadedMeals);
    setMeals(loadedMeals);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    // setIsLoading(true);
    // setHttpError(error.message);
  }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}...</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
