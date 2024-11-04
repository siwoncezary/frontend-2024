'use client'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged } from "firebase/auth";
import { getAuth } from 'firebase/auth'
import { useSearchParams, useRouter } from "next/navigation";
export default function SignupForm() {
  const auth = getAuth();
  const params = useSearchParams();
  const router = useRouter();
  const returnUrl = params.get("returnUrl");
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target["name"].value;
    const password = e.target["password"].value;
    setPersistence(auth, browserSessionPersistence)
    .then( () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         router.push(returnUrl);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="flex align-middle rounded-2xl bg-secondary w-1/2 m-auto">
      <div className="flex flex-row w-[48rem]">
        <div className="flex text-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-48 w-48 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
        </div>
        <div className="rounded-e-2xl form-control bg-slate-400 flex basis-3/4 p-6">
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label className="label mb-3" htmlFor="name">
                Login
              </label>
              <input
                className="input input-bordered w-full"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label className="label mb-3" htmlFor="password">
                Password
              </label>
              <input
                className="input input-bordered w-full"
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
              />
            </div>
            <button className="btn btn-secondary my-6 w-full" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
