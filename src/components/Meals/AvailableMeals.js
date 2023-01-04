import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

//static database
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Spaghetti Bolognese",
    description: "Italian",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Beef stir-fry with vegetables",
    description: "Chinese",
    price: 9.99,
  },
  {
    id: "m3",
    name: "Chicken curry with rice",
    description: "Indian",
    price: 11.99,
  },
  {
    id: "m4",
    name: "Beef burritos with black beans and salsa",
    description: "Mexican",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  //mapping meal names to <li> elements in MealItem component js file
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
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
