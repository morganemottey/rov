import React, { Component } from 'react'


class AjouterRecette extends Component {
  state = {
   nom: '',
   image:'',
   ingredients: '',
   instructions: '',
  }
//ajout de sboutons onChange et OnClick pour permettre l'ajout ou la suppresion des recette
handleChange = event => {
 const {name, value} = event.target
 this.setState ({[name] : value})
}

handleSubmit = event => {
    event.preventDefault()
    const recette =  {...this.state}
    this.props.addRecette(recette)
}

  render () {
    return (
      <div className ="cards">
       <form className = 'admin-form ajouter-rectte' onSubmit= {this.handleSubmit}>
        <input value = {this.state.nom} onChange = {this.handleChange} name="nom" type ='text' placeholder= "имя"></input>
        <input value = {this.state.image} onChange = {this.handleChange} name="image" type= 'text' placeholder= "фамилия"></input>
        <textarea value = {this.state.ingredients} onChange = {this.handleChange} name="ingredients" rows="3" placeholder="Ингредиенты"></textarea>
        <textarea value = {this.state.instructions} onChange = {this.handleChange} name="instructions" rows="15" placeholder="инструкции"></textarea>
       </form>
      </div>
    )
  }
}

export default AjouterRecette;