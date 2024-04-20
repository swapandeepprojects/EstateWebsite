
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

{Link}

export default function Header() {
  return (
    <header className="shadow-md bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <h1 className="flex flex-wrap text-sm font-bold fl sm:text-xl">
          <span className="text-slate-500"> Find</span>
          <span className="text-slate-700"> Estate</span>
        </h1>

        <form
          className="flex items-center p-3 rounded-lg bg-slate-100"
          action=""
        >
          <input 
            type="text"
            placeholder="Search.."
            className="w-24 bg-transparent focus:outline-none sm:w-64"
          />
          <FaSearch className="tex-slate-600"></FaSearch>
        </form>

        <ul className="flex gap-4">
          <Link to='/'></Link>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Home
          </li>
          <Link to='/about'></Link>
          <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          <Link to='/sign-in'></Link>
          <li className=" text-slate-700 hover:underline">Sign in</li>
        </ul>
      </div>
    </header>
  );
}