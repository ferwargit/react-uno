import ProductItem from "./components/ProductItem";

const App = () => {
  const products = [
    { title: "🍉", id: 1 },
    { title: "🍔", id: 2 },
    { title: "🍟", id: 3 },
  ];

  return (
    <>
      <h1>Listas</h1>
      <ul>
        {products.map(({ title, id }) => (
          <ProductItem key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  );
};
export default App;
