import React from 'react';
import ReactDOM from 'react-dom';

export class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [
        {id:1,name:"Vivek",email:"vivek@abc.com",phone:'9724232344',address:'Gujarat, India'},
        {id:2,name:"Speeka",email:"sipeeks@abc.com",phone:'7878787837',address:'Gujarat, India'}
    ], id:0, name: '',email:'',phone:'', address:'' , buttonLabel:'Add' };
    //Another approach to handle this 
   // this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  //id
  //name
  //email
  //phone
  //address
  render() {
    return (
      <div style={{width:"96%", textAlign:"left", marginLeft:"2%"}}>
        <h3>CustomersApp</h3>
        <form>
        <input name='id' placeholder="id"
            onChange={this.handleChange}
            value={this.state.id}
          /> <br/><br/>
          <input name='name' placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          /> <br/><br/>
          <input name='email' placeholder="email"
            onChange={this.handleChange}
            value={this.state.email}
          /> <br/><br/>
          <input name='phone' placeholder="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          /> <br/><br/>
          <input name='address' placeholder="address"
            onChange={this.handleChange}
            value={this.state.address}
          /> <br/><br/>
          <button onClick={this.handleSubmit}> 
            {this.state.buttonLabel}
          </button>
        </form>
        <TodoList items={this.state.items} editItem={this.editItem} deleteItem={this.deleteItem}/>
      </div>
    );
  }
  deleteItem = (id) =>{
    console.log('delete record '+id);
    var customers = this.state.items.filter((item)=>(item.id != id))
    this.setState({items:customers});
  }
  editItem = (id) =>{
    console.log('edit record '+id);
    var customers = this.state.items.filter((item)=>(item.id == id))
    if(customers.length > 0){
      let customer = customers[0];
      this.setState({
        id:customer.id,
        name:customer.name,
        email:customer.email,
        address:customer.address,
        phone:customer.phone,
        buttonLabel:'Update'
      });
    }
    //this.setState({items:customers});
  }
  handleChange = (e) => {
    //this.setState({ name: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) =>  {
    var tempItems;
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        id:Date.now()
    };
    if(this.state.id != 0){
      newItem.id = this.state.id;
      var customers = this.state.items.filter((item)=>(item.id == this.state.id))
      if(customers.length > 0){
        let customer = customers[0];
        customer.name =  this.state.name;
        customer.email =  this.state.email;
        customer.phone =  this.state.phone;
        customer.address =  this.state.address;
        tempItems = this.state.items;
      }
    }else{
      tempItems = this.state.items.concat(newItem);
    }
    this.setState(prevState => ({
      items: tempItems,
      name: '',
      id:0,
      email:'',
      address:'',
      phone:'',
      buttonLabel:'Add'
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <table style={{width:"100%"}}>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th></th>
            <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td><button onClick={()=>this.props.editItem(item.id)} >Edit</button></td>
              <td><button onClick={()=>this.props.deleteItem(item.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
