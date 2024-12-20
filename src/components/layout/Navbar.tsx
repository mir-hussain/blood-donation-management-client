import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between gap-3 max-w-7xl mx-auto px-2 h-16">
        <Link to="/" className="text-xl font-semibold">
          Blood Link
        </Link>
        <div className="flex gap-3 items-center">
          <Link to="/hospitals">Hospitals</Link>
          <Link to="/requests">Requests</Link>
        </div>
      </nav>
    </header>
  );
}
