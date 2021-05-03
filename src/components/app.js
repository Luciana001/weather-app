import { react } from "babel-types";
import { doc } from "prettier";
import React from "react";
import { render } from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        ville: "",
       
    }

    handleVille = () => {
        let { ville } = this.state;
        
        
        ville = document.querySelector("#ville").value;

        console.log(ville)
        



        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    


    render() {
        return (
            <div>
                <h2>Météo par ville</h2>
                <input type="text" id="ville" placeholder="Entrez une ville"></input>
                <button type="submit" id="send" onClick={this.handleVille}>Send</button>
                <p></p>
            </div >

        )

    }

}
export default App