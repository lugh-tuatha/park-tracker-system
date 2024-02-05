import { ModeToggle } from "@/components/mode-toggle"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-3 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex items-center justify-between">
            <div className="flex items-center gap-8">
                <h1 className='typography-h3'>Logo</h1>
                <ul className="flex items-center gap-4">
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
            </div>
            <ModeToggle></ModeToggle>
        </nav>
    </header>
  )
}

export default Header