import Header from "./components/header/Header";
import "./App.scss";
import ItemContent from "./components/itemContent/ItemContent";

interface IStats {
  name: string;
  value: number
}

export interface IMock { 
  name: string; 
  id: number;
  height: number;
  weight: number;
  image: string;
  stats: IStats[];
}


export const App = () => {

  const mockList: IMock[] = [
    {
      name: "Pickachu",
      id: 1,
      height: 100,
      weight: 100,
      image: "https://i.pinimg.com/736x/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.jpg",
      stats: [{name: 'speed', value: 1,}],
    },
    {
      name: "Pickachu",
      id: 1,
      height: 100,
      weight: 100,
      image: "https://i.pinimg.com/736x/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.jpg",
      stats: [{name: 'speed', value: 1,}],
    },
    {
      name: "Pickachu",
      id: 1,
      height: 100,
      weight: 100,
      image: "https://i.pinimg.com/736x/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.jpg",
      stats: [{name: 'speed', value: 1,}],
    },

  ];


  return (
    <div className="app">
      <Header/>
      <ItemContent {...mockList[0]} />
    </div>
  )
}
