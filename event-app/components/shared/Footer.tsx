import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col p-5 gap-4 text-center sm:flex-row">
        <Link href='/'>
          <Image src='/assets/images/logo.svg' alt="logo" width={128} height={38}/>
        </Link>
        <p>2025 EventFusion. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;