import Link from 'next/link';

export default function NavBar() {
    return(
        <nav className="bg-blue-500 p-4 shadow-lg relative">
        <ul className="flex space-x-4 justify-center">
            <li>
                <Link href="/">
                    <p className="text-white text-lg font-semibold hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white">Home</p>
                </Link>
            </li>
            <li>
                <Link href="/reviewbiz">
                    <p className="text-white text-lg font-semibold hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white">Leave A Review</p>
                </Link>
            </li>
            <li>
                <Link href="/locations">
                    <p className="text-white text-lg font-semibold hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white">Locations</p>
                </Link>
            </li>
            <li>
                <Link href="/ourmission">
                    <p className="text-white text-lg font-semibold hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white">Our Mission</p>
                </Link>
            </li>
        </ul>
        </nav>
    )
}