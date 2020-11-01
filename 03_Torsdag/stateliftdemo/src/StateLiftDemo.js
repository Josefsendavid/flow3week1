import React, { useState } from "react";
import "./App.css";

let count = 0;
let idKey = count + 1;

const StateLift = () => {

    let [person, setPerson] = useState("")
    let [persons, setPersons] = useState([]);
    let [personTable, setPersonTable] = useState(getPersons)

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setPerson(value)
        setPersonTable(getPersons)
    };

    function handleSubmit(event) {
        event.preventDefault();
        persons.push(person)
        setPersonTable(getPersons)
        setPerson("");
    }

    function deletePerson(index) {
        persons.splice(index, 1);
        setPersonTable(getPersons);
    }

    function getPersons() {
        return (
            <div>
                <ul>
                    {persons.map((person, index) => (
                        <ul key={index}>
                            <li>{person} {<button type="submit" onClick={() => deletePerson({ index })}>Delete</button>}</li>
                        </ul>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Person:
                <input id="person" type="text" value={person} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h2>All Persons:</h2>
            {personTable}
        </div>
    )
}

export default StateLift;