

async function UserProfile({params}) {

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${await params.id}`,)
    .then((response) => response.json());
    return ( 
    <>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
    </> 
    );
}

export default UserProfile;