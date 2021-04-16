import React, {useState,useEffect} from 'react';
//import Menu from './Menu';
//import {getCustomers,addCustomer,deleteCustomer,updateCustomer, getCustomerById} from '../service/CustomerServiceAPI';

import {getCustomers,addCustomer,deleteCustomer,updateCustomer} from '../../service/CustomerServiceAPI';
// function 
//export default About;
export default function Stude({history,match}) { //p 46

  
   //
   // destructure useState
  //  const [items,setItems] = useState([]);
  const [items,setItem] = useState([
  {id:1,name:"Vivek",email:"vivek@abc.com",phone:'9724232344',address:'Gujarat, India'},
    {id:2,name:"ajazahmed",email:"vivek@abc.com",phone:'9724232344',address:'Gujarat, India'}
  ]);

    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [label,setLabel] = useState("Add");
    

    useEffect(async ()=>{
        if(match.params.id){ //edit
            let customer = await getCustomerById(match.params.id);
            setId(customer.id);
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
            setAddress(customer.address);
            setLabel("Update");
        }
    },[]);
  var handleChange = (e) => {
      if(e.target.name == "name"){
        setName(e.target.value);
      }else if(e.target.name == "email"){
        setEmail(e.target.value);
      }else if(e.target.name == "phone"){
        setPhone(e.target.value);
      }else if(e.target.name == "address"){
        setAddress(e.target.value);
    }
  }
    var handleSubmit = async (e) =>  {
      e.preventDefault();
      if (!name.length) {
        return;
      }
      const newItem = {
          name: name,
          email:email,
          phone:phone,
          address: address,
          id:Date.now()
      };
      if(id != 0){ //edit
        newItem.id = id;
        await updateCustomer(newItem);
      }else{ //new
        await addCustomer(newItem);
        //tempItems = items.concat(newItem);
      }/*
        setId(0);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setLabel("Add");
        setItems(getCustomers());*/
        history.push("/customer");
    }
    return (
      <div>
          {/* <Menu/> */}
        <h3>Students</h3>
        <form>
          <input name='name' placeholder="name"
            onChange={handleChange}
            value={name}
          /> <br/><br/>
          <input name='email' placeholder="email"
            onChange={handleChange}
            value={email}
          /> <br/><br/>
          <input name='phone' placeholder="phone"
            onChange={handleChange}
            value={phone}
          /> <br/><br/>
          <input name='address' placeholder="address"
            onChange={handleChange}
            value={address}
          /> <br/><br/>
          <button onClick={handleSubmit}> 
            {label}
          </button>
        </form>
        {/* <TodoList items={items}/> */}
        {/* <CustomerList items={items} deleteItem={deleteItem} editCustomer={editCustomer}/> */}
        <CustomerList items={items}/>

        </div>
    );
  }
  // class TodoListS extends React.Component {
    // function CustomerList({items,deleteItem,editCustomer}){
      function CustomerList({items}){

    // render() {
      // console.log(items);
      return (
        <div>
          <table style={{width:"100%"}}>
            <thead>
              <tr>
              <th>D</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th></th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                {/* <td><button onClick={()=>this.props.editItem(item.id)} >Edit</button></td>
                <td><button onClick={()=>this.props.deleteItem(item.id)}>Delete</button></td> */}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
    }
  // }
  
