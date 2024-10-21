function List(props) {
    const items = [];
    for(let i = 0; i < props.data.length; i++){
        items.push(<li>{props.data[i].name}</li>)
    }
    const limit = props.limit;
    console.log("List is rendered");
    return ( 

       <>
       <h3>Lista osób</h3>
       <h3>Suma wieku: {props.data.reduce((a, i) => a + i.age, 0)}</h3>
         <ul>
             {
             props.data
             .filter(person => person.age < limit)
             .map((person) => <li key={person.id}>{person.name}, {person.age}</li>)}
         </ul>
       </>
     );
}

export default List;