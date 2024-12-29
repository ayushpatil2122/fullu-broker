
import Link from 'next/link'
import { Receipt, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <span className="text-sm font-bold">NB</span>
            </div>
            <span className="hidden text-xl font-bold sm:inline-block">
              <span className="text-red-500">NO</span>
              BROKER
            </span>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            href="/pay-rent"
            className="hidden items-center gap-2 text-sm text-gray-600 hover:text-gray-900 sm:flex"
          >
            <Receipt className="h-4 w-4" />
            Pay Rent
          </Link>
          
          <Button
            asChild
            className="hidden bg-teal-500 hover:bg-teal-600 sm:inline-flex"
          >
            <Link href="/post-property">Post Your Property</Link>
          </Button>
          
          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/signup"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Log in
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  )
}

