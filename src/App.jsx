import { Space } from "antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import PageContent from "./Components/PageContent";
import  SideMenu from "./Components/SideMenu";



function App(){
  return <div className="App">
    <AppHeader />
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </div>
   <AppFooter />
    
  </div>
}

export default App;