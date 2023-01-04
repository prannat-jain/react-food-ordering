import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to the best restaurant in town!</h2>
      <p>
        Our menu is filled with delicious options for breakfast, lunch, and
        dinner. Our chefs use only the freshest ingredients to prepare every
        dish, ensuring that every bite is bursting with flavor.
      </p>
      <p>
        Looking for something light? Try our garden salad, made with crisp
        greens and topped with your choice of dressing. Or, if you're in the
        mood for something heartier, our burgers and sandwiches are sure to
        satisfy.
      </p>
    </section>
  );
};

export default MealsSummary;
