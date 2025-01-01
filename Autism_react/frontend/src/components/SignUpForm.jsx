// import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [name, setName] = useState(""); // [state, setState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    console.log("submit");
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);

    if (name === "" || email === "" || password === "") {
      window.alert("Please fill in all fields."); // alert window
      return;
    }

    axios
      .post("http://localhost:3000/signup", { name, email, password })
      .then((user) => {
        // console.log("users: ",user);
        // console.log("user.config.headers: ",user.config.headers);
        navigate("/signin");
        console.log("success to login");
      })
      .catch((err) => {
        console.log(err);
        navigate("/signup");
        // console.log("fail to registre, err.response: ",err.response);
        window.alert(err.response.data.message);
      });
  };

  return (
    <>
      <div className="h-full">
        <div className="flex min-h-[840px] flex-col">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Link to="/">
                <img
                  className="mx-auto h-24 w-24"
                  src="./images/MicrosoftTeams-image.png"
                  alt="Your Company"
                />
              </Link>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign UP
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                {/* emialbox */}
                {/* <div> 
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div> */}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name*
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      onChange={(event) => setName(event.target.value)}
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address*
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      onChange={(event) => setEmail(event.target.value)}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password*
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      onChange={(event) => setPassword(event.target.value)}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="toggle-password text-indigo-500 hover:text-indigo-600 text-sm p-1 focus:outline-none"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    onClick={submit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500" />
              <p className="font-semibold text-center leading-6 text-indigo-600 hover:text-indigo-500">
                Welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
