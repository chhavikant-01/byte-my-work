import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light tracking-widest text-gray-800 dark:text-gray-200 border-b-2 border-gray-800 dark:border-gray-200 pb-1" style={{
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: '0.2em',
            }}>
              CK
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}