import Link from 'next/link'
import style from './styles.module.css'
export default async function Users({color}) {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json());
    return (
        <div>
            <h1 className="text-sky-900 font-bold">
            Users
            </h1>
            <ul>
                {users.map(u => 
                <li key={u.id}>
                    <Link href={`/dashboard/users/${u.id}`}>{u.name}</Link>
                </li>)}
            </ul>
        </div>
    );
}

