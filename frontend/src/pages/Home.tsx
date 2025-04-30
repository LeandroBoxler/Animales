import { CardHome } from "../components/card";

export interface Product {
  name: string;
  id: string;
  ages: number;
}

export const Home = () => {
  interface Product {
    id: number;
    name: string;
    ages: number;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Dona Glaseada",
      ages: 199,
    },
    {
      id: 2,
      name: "Dona Chocolate",
      ages: 249,
    },
    {
      id: 3,
      name: "Dona Fresa",
      ages: 299,
    },
    {
      id: 1,
      name: "Dona Glaseada",
      ages: 199,
    },
    {
      id: 2,
      name: "Dona Chocolate",
      ages: 249,
    },
    {
      id: 3,
      name: "Dona Fresa",
      ages: 299,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <CardHome name={product.name} ages={product.ages} />
      ))}
    </div>
  );
};
