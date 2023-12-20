import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersonList } from "./components/Lab3/PersonList/PersonList";
import 'bootstrap/dist/css/bootstrap.css';
import { PageWrapper } from "./hoc/PageWrapper";
import { Index } from "./components/Index/Index";
import { Calculator } from "./components/Lab3/Calculator/Calculator";
import { BookStore } from "./components/Lab4 - книжный магазин/BookStore";
import { ToggleGame } from "./components/Lab5 - вместо лабы/ToggleGame";
import { StoreMain } from "./components/Lab6 - интернет-магазин/StoreMain";
import ItemPage from "./components/Lab6 - интернет-магазин/ItemPage/ItemPage";
import Cart from "./components/Lab6 - интернет-магазин/Cart/Cart";
import Clock from "./components/Lab7 - использование массивов в состояниях/Clock/Clock";
import Button from "./components/Lab7 - использование массивов в состояниях/Button/Button";
import Attendance from "./components/Lab7 - использование массивов в состояниях/Attendance/Attendance";
import Lab8Page from "./components/Lab8/Lab8Page";

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<PageWrapper />}>
            <Route index element={<Index />} />
            <Route path="scientists" element={<PersonList />} />
            <Route path="calc" element={<Calculator />} />
            <Route path="books" element={<BookStore />} />
            <Route path="toggle" element={<ToggleGame />} />
            <Route path="store" >
              <Route path="home" index element={<StoreMain />} />
              <Route path="item/:id" element={<ItemPage />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="attendance" element={<Attendance />} />
            <Route path="button" element={<Button />} />
            <Route path="clock" element={<Clock />} />
            <Route path="lab8" element={<Lab8Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
