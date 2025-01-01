// import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .get("http://localhost:3000/protect", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/protect");
      })
      .catch((err) => {
        console.error(err);
        navigate("/signin");
      });
  }, []);

  const submit = (event) => {
    console.log("submit");
    event.preventDefault();
    console.log(email);
    console.log(password);

    if (email === "" || password === "") {
      window.alert("Please fill in all fields."); // alert window
      return;
    }

    axios
      .post("http://localhost:3000/signin", { email, password })
      .then((user) => {
        // console.log("users: ",user);
        // console.log("user.config.headers: ",user.config.headers);
        localStorage.setItem("token", user.data.token);
        navigate("/protect");
      })
      .catch((err) => {
        console.log(err);
        navigate("/signin");
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
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
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
                      Password
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
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
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
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member yet?
                <a
                  href="./sign_up.html"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Join us!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
