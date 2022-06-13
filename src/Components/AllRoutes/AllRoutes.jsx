import { Route, Routes } from "react-router-dom"
import { Todo } from '../Todo/Todo';
import { Grocery } from "../Grocery/Grocery";
import { StopWatch } from "../Stopwatch/Stopwatch";
import { Nav } from "../Navbar/Navbar";
import { Form } from "../Form/Form";
export const AllRoutes = () => {

    return (
        <>
        <Nav />
        <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/grocery' element={<Grocery />} />
            <Route path='/stopwatch' element={<StopWatch />} />
            <Route path='/form' element={<Form />} />
        </Routes>
        </>
    )
}