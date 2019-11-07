import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'

class Admin extends Component {
  state = {
    pseudo: this.props.pseudo,
    recettes : {}
  }
// après avoir insérer notre fonction addRecette dans notre fchier App.js
// il faut insérer cette fonction dans le render Admin
// créer un nouveau component qui permettra d'ajouter toutes les nouvelles recettes AjouterRecette
  render () {
    return (
      <div className ="cards">
        <AjouterRecette addRecette = {this.props.addRecette}/>
      <footer>
          <button onClick={this.props.chargerExemple}> choose your Rov'Recipe  </button>
      </footer>
      </div>
    )
  }
}

export default Admin;