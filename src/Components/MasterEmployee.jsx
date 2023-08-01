import { useState,useEffect } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Getemp from "./Getemp";
import Putemp from "./Putemp";
import Postemp from "./Postemp";
import Loading from "./Loading";
import { Link, BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


const MasterEmployee=()=>{

    return (
        <div className="MasterEmployee">
        <header>
        <h2 class="Logo">Una Solutions</h2>
        <nav class="navigation">
            <a href="#">Get</a>
            <a href="#">Update</a>
            <a href="#">Create</a> 
        </nav>
          {/*  <nav className="MasterEployee">
            <ul>
                <li>
                    <Link to="/getemp" style={{ marginRight: 100 }}>Get</Link>
                </li>
                <li>
                    <Link to="/putemp" style={{ marginRight: 100 }}>Update</Link>
                </li>
                <li>
                    <Link to="/postemp" style={{ marginRight: 100 }}>Create</Link>
                </li>
                
            </ul>
    </nav>*/}
        </header>
            <br></br><br></br>
            <Routes>
                <Route path="/getemp" element={<Getemp></Getemp>}></Route>
                <Route path="/putemp" element={<Putemp></Putemp>}></Route>
                <Route path="/postemp" element={<Postemp></Postemp>}></Route>
                <Route path="/loading" element={<Loading></Loading>} ></Route>
            </Routes>
        </div>


    )
 
}
export default MasterEmployee;