import React, { Component } from 'react';


class Emp extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEdit: false

    };
  this.onDelete = this.onDelete.bind(this);
  this.onEdit = this.onEdit.bind(this);
  this.onEditSubmit = this.onEditSubmit.bind(this);
}

  onDelete(){
    console.log("Delete",this.props)
    const {onDelete, ID} = this.props;  
    onDelete(ID);
  } 

  onEdit(){
    this.setState({isEdit:true});
  }

  onEditSubmit(event){
    event.preventDefault();

    this.props.onEditSubmit( this.IDInput.value, this.FirstNameInput.value,this.LastNameInput.value, this.PositionInput.value, this.EmpcodeInput.value,this.officeInput.value, this.props.ID);

    this.setState({isEdit:false});
  }
   //use defaultValue={whatever} for uncontrolled inputs hack
   // in render() : used ternary with JSX
  render(){  
      const {ID,FirstName,LastName,Position,Empcode,office } = this.props;
      
          return(          
            <div> 
              {
                 this.state.isEdit
                 ? (
                   <form onSubmit = {this.onEditSubmit}>    
                      <input placeholder="ID" ref = {IDInput => this.IDInput = IDInput} defaultValue={ID}/>
                      <input placeholder="FirstName" ref = {FirstNameInput => this.FirstNameInput = FirstNameInput} defaultValue={FirstName} />
                      <input placeholder="LastName" ref = {LastNameInput => this.LastNameInput = LastNameInput} defaultValue={LastName}/>
                      <input placeholder="Position" ref = {positionInput => this.PositionInput = positionInput} defaultValue={Position} />
                      <input placeholder="Empcode" ref = {empcodeInput => this.EmpcodeInput = empcodeInput} defaultValue={Empcode}/>
                      <input placeholder="office" ref = {officeInput => this.officeInput = officeInput} defaultValue={office} />
                      <button>Save</button>
                   </form>
                 )
                 : (
                    <div>
                   
                  <span>{ID}</span> 
                  {`|`}
                  <span>{FirstName}</span>
                  <span>{LastName}</span> 
                  {`|`}
                  <span>{Position}</span>
                  <span>{Empcode}</span> 
                  {`|`}
                  <span>{office}</span>
                  {`|`}
                  <span>
                  <button onClick={this.onEdit}>Edit</button></span>
                  {`|`}
               <span>   <button onClick={this.onDelete}>Delete</button></span>
                  </div>
                 ) 
              }
             </div>           
          );      
      }   
  }

export default Emp ;
