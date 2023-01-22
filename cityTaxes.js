function cityTaxes(name, population, treasury) {
  const result = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      result.treasury += result.taxRate * result.population;
    },
    applyGrowth(percentage) {
      result.population += Math.floor(result.population * percentage / 100);
    },
    applyRecession(percentage) {
      result.treasury -= Math.ceil(result.treasury * percentage / 100);
    },
  };

  return result;
}

const city = cityTaxes("Tortuga", 7000, 15000);

const myFn = city.collectTaxes;
myFn();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(15);
console.log(city.treasury);