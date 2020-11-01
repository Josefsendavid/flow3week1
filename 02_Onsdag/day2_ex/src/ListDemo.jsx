import React, { useState } from "react";

function MemberTable({ members }) {
    return (
        <div>
            <h2 id="Members">All Members</h2>
            <table id="Members" key={members.id}>
                <tbody>
                    <MemberDemo members={members} />
                </tbody>
            </table>
        </div>
    );
}

function MemberDemo(props) {
    return props.members.map((members) => {
        const { id, name, age } = members;

        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
            </tr>
        );
    })
}

export default function App() {
    const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberTable members={members} />);
}
