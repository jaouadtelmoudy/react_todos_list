import React, { Component} from 'react';

export class Todos extends Component {

    constructor(){
        super();
        this.state = {
            nomInput:'',
            prenomInput:'',
            personnes:[]
        };
    }

    /**
     * Permet de mettre a jour la valeur du nom dans le state
     * @param {*} event 
     */
    updateNom(event) {
        this.setState({
            nomInput: event.target.value
        });
    }

    /**
     * Permet de mettre a jour la valeur du prenom dans le state
     * @param {*} event 
     */
    updatePrenom(event) {
        this.setState({
            prenomInput: event.target.value
        });
    }

    /**
     * Permet d'ajouter une nouvelle personne dans le state
     * @param {*} event 
     */
    addPerson(event) {        
        event.preventDefault();
        const newPerson = {nom: this.state.nomInput, prenom: this.state.prenomInput};          
        this.setState({
            personnes : [...this.state.personnes, newPerson]
        });
        
    }

    /**
     * Permet de supprimer l'element passer en parametre
     * @param {*} personne 
     */
    deletePerson(personne) {
        const personIndex = this.state.personnes
                                .findIndex((p) => p.nom === personne.nom);       
        
        if(personIndex !== -1) {
            const array = this.state.personnes;
            array.splice(personIndex,1);                
            this.setState({
                personnes: array
            });
        }
    }
    /**
     * Permet d'afficher la liste des personnes
     */
    showPersonnes() {
        let i = 0;
        return this.state.personnes.map((p)=>{
            i = i +1;
            return (
                <li className="list-group-item" key={i}>
                {p.nom} | {p.prenom}  
                <button onClick={() => this.deletePerson(p)}>X</button>
                </li>
            );
        })
    }


    
    render() {
        return (
        <div className="App">     
            <h2>Listes des personnes</h2>        
            <form className="form-inline">
                <label className="sr-only" htmlFor="inlineFormInputName2">Nom</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Nom..."
                value={this.state.nomInput} onChange={this.updateNom.bind(this)}/>
                <label className="sr-only" htmlFor="inlineFormInputName2">Prénom</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Prénom..."
                value={this.state.prenomInput} onChange={this.updatePrenom.bind(this)}/>
                <button type="submit" className="btn btn-primary mb-2" onClick={this.addPerson.bind(this)}>Ajouter</button>
            </form>
            <ul className="list-group">
                {this.showPersonnes()}               
            </ul>
            <hr/>
            <span>{this.state.personnes.length}</span>
        </div>                 
        );
    }
}