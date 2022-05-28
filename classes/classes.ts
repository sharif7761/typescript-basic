class Pizza2 {
    name: string;
    toppings: string[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }
  
  const pizza2 = new Pizza2('Pepperoni');
  
  pizza.addTopping('pepperoni');
  
  console.log(pizza2);
  