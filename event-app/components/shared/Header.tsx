import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileItems from "./MobileNav"

const Header = () => {
return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href='assets/images/logo.svg' className="w-36">
                <Image src='/assets/images/logo.svg' width={128} height={38} alt="Evently logo" />
            </Link>

            <div>
                <SignedIn>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                    </nav>    
                </SignedIn>
            </div>

            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <MobileItems />
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size='lg'>
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
)
}

export default Header