import Link from "next/link";
import Image from "next/image";
import tornUpNavbar from "../assets/torn-up-navbar.png";

const Navbar = () => {
    return (
        <div className='flex justify-center fixed top-0 w-full text-lg z-30'>
            <nav className='m-2 w-[620px] h-[100px] relative'>
                <Image
                    src={tornUpNavbar}
                    alt='Navbar background'
                    fill
                    className='-z-1 drop-shadow-xl'
                />
                <div className='absolute top-0 left-0 flex items-center px-8 xs:px-12 h-full w-full justify-between'>
                    <Link
                        href='#home'
                        className='font-nacelle-heavy hover:underline'
                    >
                        Juan Miguel Sanchez
                    </Link>
                    <div className='flex gap-2 xs:gap-4'>
                        <Link href='#projects' className='hover:underline'>
                            Projects
                        </Link>
                        <Link href='#contact' className='hover:underline'>
                            Contact
                            <span className='absolute invisible sm:relative sm:visible'>
                                {" "}
                                Me
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
