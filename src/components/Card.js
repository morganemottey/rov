import React from 'react'

//{details} fait appel à la classe insérer dans App.js <Card details= {this.state.recettes[key]}/>

//on vient de creer 2 fonctions ingredients et instructions pour pouvoir metre à la ligne nos
//  lignes et supprimer les points virgules à l'aide de split et map

const Card = ({details}) => {
    const ingredients = details.ingredients
        .split ('-')
        .map (item => <li key={item}>{item}</li>)
    const instructions = details.instructions
        .split ('\n')
        .map (item => <li key={item}>{item}</li>)

// //fonction qui permmettra d'afficher une image par default 
// si la 1ere n'est pas charger

const requireImage = chemin => {
    try {
        return require (`../img/${chemin}`)
    } catch (err){
        return require(`../img/default.png`)
    }
}
    

return (
        <div className="card">
         <div className ="image">
            <img src={requireImage(details.image)} alt={details.nom} />                
        </div>
        <div className="recette">
            <h2>{details.nom}</h2>
            <ul className="liste-ingredients">
                {ingredients}
            </ul>
            <ul className="liste-instructions">
                {instructions}
            </ul>
        </div>
        </div>
    )
}


export default Card;