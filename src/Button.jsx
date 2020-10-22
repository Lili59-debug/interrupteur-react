import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            icone: <FontAwesomeIcon icon={faToggleOff} />,
            classe: "eteint"
        };        
        
        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.Appuyer = this.Appuyer.bind(this);
      }

     Appuyer() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));

        const isToggleOn = this.state.isToggleOn;
        
        if (isToggleOn) {
            this.state.icone = <FontAwesomeIcon icon={faToggleOn} />;
            this.state.classe = "allume"
        } else {
            this.state.icone = <FontAwesomeIcon icon={faToggleOff} />;
            this.state.classe = "eteint"
        }  
      }

    render() {
        return (
            <button onClick={this.Appuyer} className={this.state.classe}> {this.state.icone} {this.state.isToggleOn ? 'Allumer' : 'Éteindre'}</button>
        )
    }
}

export default Button