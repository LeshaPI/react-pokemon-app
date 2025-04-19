import Header from "./components/header/Header";
import "./App.scss";
import ItemsContainer from "./components/itemsContainer/ItemsContainer";

export const App = () => {

  const mockList = [
    {
      name: "Pickachu",
      id: 1,
    },
    {
      name: "bulbasaur",
      id: 2,
    },
    {
      name: "squirtle",
      id: 3,
    },
  ];


  return (
    <div className="app">
      <Header/>
      <ItemsContainer mockList={ mockList } />
    </div>
  )
}
