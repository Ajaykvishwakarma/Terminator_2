import axios from "axios";
import { useState, useEffect } from "react"
import "./DataShow.css";
import { Input,Select,RadioGroup,Radio,HStack } from '@chakra-ui/react';
export const Form  = () => {

    const [formData, setFormData] = useState({
        name:"",
        age:"",
        address:"",
        department:"",
        isMarried:""
    })

    const handleChange = (e) => {
        let {id, value, checked, type} = e.target;
        value = type === "checkbox" ? checked : value;
        setFormData({...formData, [id]:value})

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/users', formData).then(() =>{
            alert("welcome !")
            setFormData({
                name:"",
                age:"",
                address:"",
                department:"",
                isMarried:""
            })
        })

    }

    const [ userdata, setUserdata] = useState([]);

    //  console.log(userdata)
    //  const [page, setPage ] = useState(1);
    
     useEffect(() => {
      getData()
      // console.log("Hii")
     },[])    //ek baar
     
     const getData = () => {
       axios.get(`http://localhost:8080/users`).then(res => {
         setUserdata(res.data)
       })
     }

    return (
        <div id="formDiv">
            <div style={{width:"40%", margin:"auto"}}>
            <form onSubmit={handleSubmit}>
                <label className="labelName">Name: </label>
                <Input className="all" id='name' type="text" value={formData.name} onChange = {handleChange} placeholder="Enter Name..."/><br></br>
                <label>Age: </label>
                <Input className="all" id="age" value={formData.age} onChange = {handleChange} placeholder="Enter Name..."/><br></br>
                <label>Address: </label>
                <Input className="all" id="address" value={formData.address} onChange = {handleChange} placeholder="Enter Address..."/><br></br>

                <label>Departmant: </label>
                <Select id="department" value={formData.department} onChange = {handleChange} className="all" placeholder='Select Department'>
                    
                    <option value='developer'>Develper</option>
                    <option value='ceo'>Ceo</option>
                    <option value='Hr'>Hr</option>
                </Select><br></br>
                <label>Mariad</label>
                <input type="checkbox" id="isMarried" onChange = {handleChange} checked={formData.isMarried}/><br></br><br></br>
                {/* <RadioGroup >
                <HStack spacing='24px'>
                <Radio value='Sasuke'>Sasuke</Radio>
                <Radio value='Nagato'>Nagato</Radio>
                <Radio value='Itachi'>Itachi</Radio>
                <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
                </HStack>
              </RadioGroup> */}
                <Input type="submit" value="submit" id="button"/>
            </form>
            </div>
            <div id = "Showdata">
        <table id="tabledata">
        <thead>
           <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          
          <th>Marrital Status</th>
          </tr>
          </thead>
          
      <tbody>
          {userdata.map((elem) => {
             if(elem.isMarried === true){
              elem.isMarried = "Married"
            }
            if (elem.isMarried === false) {
              elem.isMarried = "UnMarried"
            } 
        
            return(

             <tr key={elem.id}>
              
            <td >{elem.name}</td>
            <td  > {elem.age}</td>
            <td >{elem.address}</td>
            <td >{elem.department}</td>
           
            <td>{elem.isMarried}</td>
            </tr>
           
            )
           
            })}
   
           </tbody>

      
            </table>
    </div>
            
        </div>

    )
}




