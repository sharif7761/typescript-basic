class Pizza3 {
    public toppings: string[] = [];
  
    constructor(private name: string) {}
  
    public addToppingPizza(topping: string) {
      this.toppings.push(topping);
    }
  }
  
  const pizza3 = new Pizza3('Pepperoni');
  
  pizza3.addToppingPizza('pepperoni');
  
  console.log(pizza3);
  