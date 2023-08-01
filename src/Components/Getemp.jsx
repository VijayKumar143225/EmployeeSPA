import { useState,useEffect } from "react";
import axios from "axios";

const Getemp=()=>{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            let result=await axios.get("http://localhost:2005/getAll");
            console.log(result)
            const{data}=result;
            setArr(data);
        }
        getData();
    },[]);
    console.log("chiru")
    console.log(arr)
    return(
        <>
            <h1>EmployeeForm</h1>
            <nav class="navigation">
            <a href="#">Get</a>
            </nav>
         <table className="table table-border" border={1}
                                               align="center"
                                               >                              
                <thead>
                    <tr>
                        <th>eid</th>
                        <th>ename</th>
                        <th>designation</th>
                        <th>companyname</th>
                        <th>salary</th>
                        <th>ta</th>
                        <th>da</th>
                        <th>pf</th>
                        <th>grosssalary</th>
                        <th>netsalary</th>
                    </tr>
                </thead>
             <tbody>
                    {arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.empId}</td>
                                <td>{element.empName}</td>
                                <td>{element.designation}</td>
                                <td>{element.company_Name}</td>
                                <td>{element.salary}</td>
                                <td>{element.ta}</td>
                                <td>{element.da}</td>
                                <td>{element.pf}</td>
                                <td>{element.gross_salary}</td>
                                <td>{element.net_salary}</td>
                            </tr>
                        )
                    })}
                </tbody> 
                <tfoot></tfoot>
         </table>
        </>    
    )   
}
export default Getemp;