import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BinaryTree} from "./BinaryTree";
import {options} from "./config";
import Graph from "react-graph-vis";
import randomInteger from 'random-int';
import {Button} from "react-bootstrap";
import "./App.css"

function App() {

    const [tree, setTree] = useState(new BinaryTree(null));

    const [representation, setRepresentation] = useState(null);

    const [network, setNetwork] = useState(null);

    const handleSpacePress = (e) => {
        if (e.key === " ") {
            const int = randomInteger(-100, 100);
            tree.insert(int.toString());
            setRepresentation(tree.toGraph())
            if (network) {
                network.setData(tree.toGraph());
            }
        }
    }

    const handleClick = () => {
        const int = randomInteger(-100, 100);
        tree.insert(int.toString());
        setRepresentation(tree.toGraph())
        if (network) {
            network.setData(tree.toGraph());
        }
    }

    return (
            <div
                onKeyPress={handleSpacePress}
                onClick={handleClick}
                style={{width: "100%", height: "100%",}}>
                {!representation
                    &&<div className="start">Click to create tree</div>}
                <Graph
                    options={options}
                    updateTrigger={representation}
                    graph={{edges: [], nodes: []}}
                    getNetwork={network => {
                        setNetwork(network)
                    }}
                />
            </div>
    );
}

export default App;
