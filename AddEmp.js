import React, { Component } from 'react';


class AddEmployee extends Component {
 constructor(props){
   super(props);

  this.onSubmit = this.onSubmit.bind(this);

 }

 onSubmit(event){
  event.preventDefault();
console.log( this.props.onAdd);
  this.props.onAdd(this.IDInput.value, this.FirstNameInput.value,this.LastNameInput.value,this.PositionInput.value,this.EmpcodeInput.value,this.officeInput.value);
  
  this.IDInput.value ="";
  this.FirstNameInput.value = "";
  this.LastNameInput.value="";
  this.PositionInput.value = "";
  this.EmpcodeInput.value="";
  this.officeInput.value = "";


 }
  render(){  
           
          return(
                      <form onSubmit = {this.onSubmit}>
                <h2>Add Employee</h2>
                <input placeholder="ID" ref = {IDInput => this.IDInput = IDInput}/>
                <input placeholder="FirstName" ref = {FirstNameInput => this.FirstNameInput = FirstNameInput} />

                  <input placeholder="LastName" ref = {LastNameInput => this.LastNameInput = LastNameInput}/>
                <input placeholder="Position" ref = {positionInput =>  this.PositionInput = positionInput} />


                  <input placeholder="Empcode" ref = {empcodeInput =>  this.EmpcodeInput = empcodeInput}/>
                <input placeholder="office" ref = {officeInput =>  this.officeInput = officeInput} />
                <button>Add it</button>
                <hr/>
            </form>
          );
     }    
  }

  export default AddEmployee ;
