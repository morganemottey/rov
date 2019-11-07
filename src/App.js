import React, { Component } from 'react'
import './App.css'

import recettes from './recettes'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

//FireBase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes : {}
  }
//synchronisation de notre base de donnée firebase grace au componentdidimount 
//on synchronise d'abord avec context : this et on ajoute ensuite notre state
  componentDidMount () {
    this.ref = base.syncState (`/${this.state.pseudo}/recettes`, {
      context : this,
      state : 'recettes'
    })
  }

  componentWillMount () {
    base.removeBinding (this.ref)
  }

  chargerExemple = () => this.setState({recettes})

  //ajouter une recette avec un timestenp (DateNow ) 
  //insérer la fonction dans l'Admin
  // retourner dans notre fichier Admin.js pour récuppérer notre props addRecipe

addRecipe = recette => {
  const recettes = {...this.state.recettes}
  recettes[`recette -${Date.now()}`] = recette
  this.setState ({recette})
}
  
  
  render () {
    const cards = Object.keys(this.state.recettes)
      .map (key => <Card key={key} details ={this.state.recettes[key]}/>)

    return (
      <div className='box'>
        <Header pseudo = {this.state.pseudo}/>
        <div className='cards'>
          <div className='card'>
           {cards}
          </div>
        </div>
        <Admin
          addRecette = {this.addRecette}
          chargerExemple = {this.chargerExemple}></Admin>
      </div>
    )
  }
}

export default App
