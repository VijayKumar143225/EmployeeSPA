import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function Putemp() {
    const [empName , setEmpName] = useState('');
    const [designation , setDesignaton] = useState('');
    const [company_Name , setCompany_Name] = useState('');
    const [salary , setSalary] = useState('');
    
    const handleempNameChange =(e)=>{
      setEmpName(e.target.value);
    }
    
    const handledesignationChange =(e)=>{
      setDesignaton(e.target.value);
    }
     
    const handlecompany_NameChange =(e)=>{
      setCompany_Name(e.target.value);
    }
     
    const handlesalaryChange =(e)=>{
      setSalary(e.target.value);
    }
    
    const  handleSubmit=async (e)=>{
      e.preventDefault();
      console.log(empId,company_Name,designation,salary,empName)
      let res = await axios.post('http://localhost:2005/save',{empId,empName,designation,company_Name,salary})
      console.log(res)
      
      
 
    }
  return (
    <div className="Postemp">
    <header className="Postemp">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     
    <h2>  </h2>
    <h3> Salary Update Form </h3>
    
       
        <label >
          EmpName:
        </label><br/>
        <input type="text" value={empName} required onChange={(e)=> {handleempNameChange(e)}} /><br/>

        <label>
          Desiganation:
        </label><br/>
        <input type="text" value={designation} required onChange={(e)=> {handledesignationChange(e)}} /><br/>
          
        <label>
          Company_Name:
        </label><br/>
        <input type="text" value={company_Name} required onChange={(e)=> {handlecompany_NameChange(e)}} /><br/>
             
        <label>
          Salary:
        </label><br/>
        <input type="text" value={salary} required onChange={(e)=> {handlesalaryChange(e)}} /><br/>
                
        <input type="submit" value="Submit"/>
      </form>
    </header>
    <h1>{empName}</h1>
    <h1>{designation}</h1>
    <h1>{company_Name}</h1>
    <h1>{salary}</h1>
    </div>
  );
}
 
export default Putemp;