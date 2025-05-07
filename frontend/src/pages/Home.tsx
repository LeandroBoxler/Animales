import { ImagesCards } from "../components/imagesCards";
import { PageCard } from "../components/pageCard";

export const Home = () => {
  interface Product {
    id: number;
    name: string;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Dona Glaseada",
    },
    {
      id: 2,
      name: "Dona Chocolate",
    },
    {
      id: 3,
      name: "Dona Fresa",
    },
    {
      id: 1,
      name: "Dona Glaseada",
    },
    {
      id: 2,
      name: "Dona Chocolate",
    },
    {
      id: 3,
      name: "Dona Fresa",
    },
  ];
  return (
    <PageCard>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ImagesCards name={product.name} />
        ))}
      </div>
    </PageCard>
  );
};
