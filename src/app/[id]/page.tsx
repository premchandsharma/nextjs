// app/[id]/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getHtml(title: string) {
    const res = await fetch("https://api.sarkariresultgov.live/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch HTML");
    return res.text();
}

interface PageProps {
    params: { id: string };
}

export default async function DynamicPage({ params }: PageProps) {
    const { id } = await params;   // 👈 await first
    const formattedId = id.replace(/-/g, " ");
    const html = await getHtml(formattedId);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/logo.png"
                                alt="Sarkari Result Logo"
                                width={100}
                                height={100}
                                className="h-16 w-16 rounded-full bg-white p-0.5"
                            />
                            <div>
                                <h1 className="text-2xl font-bold">SARKARI RESULT</h1>
                                <p className="text-sm">sarkariresultgov.live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-blue-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <ul className="flex flex-wrap justify-center">
                        {['Home', 'Latest Jobs', 'Results', 'Admit Card', 'Answer Key', 'Syllabus', 'Search', 'Contact Us'].map((item) => {
                            const lower = item.toLowerCase().replace(' ', '-');
                            const href = item === 'Home' ? '/' : `/${lower}`;

                            return (
                                <li key={item}>
                                    <Link
                                        href={href}
                                        className="block px-6 py-4 hover:bg-blue-800 transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                {/* Article Content */}
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Article Header */}
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {formattedId}
                        </h1>
                        <br />

                        {/* Main Content */}
                        {html ? (
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        ) : (
                            <p className="text-gray-500">Loading...</p>
                        )}

                    </div>
                </article>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 mt-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        {/* Left side */}
                        <div className="md:w-1/2">
                            <h3 className="text-lg font-semibold mb-3">SarkariResultGov.live</h3>
                            <p className="text-xs mt-1">Made with ❤️ for students and job seekers in India.</p>
                        </div>

                        {/* Right side */}
                        <div className="flex flex-col md:flex-row gap-18 md:text-right">
                            <div>
                                <h4 className="text-base font-semibold mb-3">Quick Links</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="/about-us" className="text-gray-300 hover:text-white">About Us</Link></li>
                                    <li><Link href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                                    <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-base font-semibold mb-3">Follow Us</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><Link href="/about-us" className="text-gray-300 hover:text-white">Facebook</Link></li>
                                    <li><Link href="/contact-us" className="text-gray-300 hover:text-white">Twitter</Link></li>
                                    <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                        <p className="text-sm text-gray-300">
                            © {new Date().getFullYear()} SarkariResultGov.live | All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}