import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

const laptop = new PhysicalProduct("P001", "Laptop", 1000, 2.5);

const ebook = new DigitalProduct("D001", "E-Book", 20, 15);

const products = [laptop, ebook];

const app = document.getElementById("app");

if (app) {
  app.innerHTML = "<h1>Inventory Tracker</h1>";

  for (const product of products) {
    app.innerHTML += `
      <p>${product.displayDetails()}</p>
      <p>Final Price: $${calculateTax(product).toFixed(2)}</p>
      <hr>
    `;
  }
}