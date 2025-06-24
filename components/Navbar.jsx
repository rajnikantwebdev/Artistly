import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between py-3 px-4 md:px-6">
      {/* Logo - always visible */}
      <Link href="/" className="flex items-center gap-1" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold">Artistly</span>
      </Link>

      {/* Mobile menu button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white px-4 py-6" side="left">
          <SheetTitle className="sr-only">menu</SheetTitle>
          <div className="grid gap-2 py-2">
            <Link
              href="/artists"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Explore Artists
            </Link>
            <Link
              href="/artist-onboarding"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Artist Onboarding
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 ml-auto">
        <Link
          href="/artists"
          className="group inline-flex h-9 items-center justify-center"
          prefetch={false}
        >
          Explore Artists
        </Link>
        <Link
          href="/artist-onboarding"
          className="group inline-flex h-9 items-center justify-center"
          prefetch={false}
        >
          Artist-Onboarding
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
