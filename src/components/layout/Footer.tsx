import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#fdfdfd] text-[#555] py-20 px-6 text-sm">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
                {/* About */}
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <Link href="/" className="block">
                        <img
                            src="https://i.ibb.co/C5nZ9JF8/Untitled-design-8.png"
                            alt="ZNSO Architects Logo"
                            className="h-64 object-contain"
                        />
                    </Link>
                    <p className="leading-relaxed max-w-sm text-center md:text-left">
                        Crafting timeless spaces where bold vision meets meticulous craftsmanship. We believe architecture is the silent poetry of space.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-[#0a0a0a] font-medium tracking-[0.1em] uppercase">Quick Links</h4>
                    <ul className="flex flex-col gap-3">
                        {[
                            { name: 'About', href: '/about' },
                            { name: 'Portfolio', href: '/portfolio' },
                            { name: 'Services', href: '/services' },
                            { name: 'Contact', href: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="hover:text-[#0a0a0a] transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-[#0a0a0a] font-medium tracking-[0.1em] uppercase">Contact Us</h4>
                    <div className="flex flex-col gap-3">
                        <p>Info@znsoarchitects.com</p>
                        <p>+965 9555 9313</p>
                        <p>Building 18A, Salhiya Street, Jibla, Kuwait City, Kuwait</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16 pt-8 border-t border-[#e0e0e0] text-center text-[#888] text-xs">
                <p>&copy; {new Date().getFullYear()} ZNSO Architects. All Rights Reserved. Developed & Designed by <a href="https://qualiasolutions.net" target="_blank" rel="noopener noreferrer" className="text-[#007bff] hover:text-[#0056b3] transition-colors font-medium">Qualia Solutions</a></p>
            </div>
        </footer>
    );
}
