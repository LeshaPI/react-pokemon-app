import Header from "./components/header/Header";
import "./App.scss";
import Router from "./components/router/Router";


export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Router/>
    </div>
  )
}
