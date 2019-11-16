import React from "react";

import Aux from "../../../hoc/auxiliar";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  
  UNSAFE_componentWillUpdate() {
    console.log('[OrderSummary] UNSAFE_componentWillUpdate');
  }

  render() {
   
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicius burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
    <strong>Total price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
