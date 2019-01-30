import React, { Component } from 'react';
import Emp from './Details';
import AddEmployee from './AddEmp';

const Employees = [{
  ID: 1,
  FirstName: "vanitha",
  LastName: "kumar",
  Position: "Itsoftwaredeveloper",
  Empcode: 610,
  office: "ssgprivatelimiter"
  
},
{
  ID: 2,
  FirstName: "gayu",
  LastName: "Rajkumar",
  Position: "Itsoftwaredeveloper",
  Empcode: 608,
  office: "ssgprivatelimiter"

}];

localStorage.setItem('Employees',JSON.stringify(Employees));

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      Employees: JSON.parse(localStorage.getItem('Employees'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    console.log("willmount", this.setState)
    const Employees = this.getEmployees();
    this.setState({Employees});
  }

  getEmployees(){
    console.log("get",this.state.Employees)
    return this.state.Employees;
   
  }

  onAdd(ID,FirstName,LastName,Position,Empcode,office){
    const Employees = this.getEmployees();

    Employees.push({
      ID,FirstName,LastName,Position,Empcode,office

    });
    this.setState({Employees});

  }

  onDelete(ID){
   const getEmployees = this.getEmployees();

   const filteredemployees = Employees.filter(Employee => {
      return Employee.ID !== ID;
   });
    this.setState({Employees: filteredemployees});
  }

  onEditSubmit(ID,FirstName,LastName,Position,Empcode,office,OriginalId){
    let Employees = this.getEmployees();

    Employees = Employees.map(Employee => {
      if( Employee.ID === OriginalId){
        Employee.ID = ID;
        Employee.FirstName = FirstName;
        Employee.LastName = LastName;
        Employee.Position = Position;
        Employee.Empcode = Empcode;
        Employee.office = office;
      }
      return Employee;
    });

    this.setState({Employees});
  }
 
  render(){
   console.log('Emp', this.state.Employees)
    return (
      <div className="App">
      <h1>Employee Details</h1>
      <AddEmployee
        onAdd = {this.onAdd}
      />
      {
        this.state.Employees.map(Employee => {
          return(
            <Emp
            key={Employee.ID}
           {...Employee}
            onDelete = {this.onDelete}
            onEditSubmit ={this.onEditSubmit}
            />
          );
        })
      }
     </div>
    );
  }
}


export default App;
