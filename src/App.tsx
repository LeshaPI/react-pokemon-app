import Header from "./components/header/Header";
import "./App.scss";
import ItemContainer from "./components/itemContainer/ItemContainer";

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
      <ItemContainer mockList={ mockList } />
    </div>
  )
}
