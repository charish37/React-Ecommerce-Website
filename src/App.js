import React from "react";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Header'
// BEM - Block Element Modifier (Block which can used individually for eg entire nav block, search block)
// Element - part of block (which can't be used outside of block) for eg nav list
// modifier - entity that defines appearance and behavior of a block or element 
// block__element--modifier or block--modifier eg:- button__icon--primary, card__title


// Switch and Routes --> The Switch component was used in react-router-dom version 5 to render the first child <Route> or <Redirect> that matches the location. However, in react-router-dom version 6, the Switch component was replaced by the Routes component.

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/checkout" element={
                        <>
                         <Header />
                         <Checkout />
                        </>
                    }>
                    </Route>

                    <Route path="/login" element={
                        <>
                         <Login/>
                        </>
                    }></Route>

                    <Route path="/" element={
                        <>
                         <Header/>
                         <Home />
                        </>
                    }>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;