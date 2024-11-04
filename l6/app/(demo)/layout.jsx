"use client";
import Link from "next/link";
import { useAuth } from "../lib/firebase/AuthContext";

function DemoLayout({ children }) {
  const { user } = useAuth();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">Home</div>
        <div className="navbar-center">
          <div className="dropdown">
            <ul className="mb-3 menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
              <li>
                <Link href="/users/login">Login</Link>
              </li>
              <li>
                <Link href="/users/logout">Logout</Link>
              </li>
              <li>
                <Link href="/users/register">Register</Link>
              </li>
              <li>
                <Link href="/grid">Grid</Link>
              </li>
              <li>
                <Link href="/flex">Flex</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <p className="btn">{user ? <>{user.email}</> : <>not logged</>}</p>
        </div>
      </div>
      <div className="container m-auto content-center">{children}</div>
    </>
  );
}

export default DemoLayout;
