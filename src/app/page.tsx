"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ApiData {
  jobs: { id: number; title: string; url: string }[];
  results: { id: number; title: string; url: string }[];
  admit_cards: { id: number; title: string; url: string }[];
  vimps_links: { id: number; title: string; url: string }[];
  imp_links: { id: number; title: string; url: string }[];
}

export default function Home() {
  const [data, setData] = useState<ApiData>({
    jobs: [],
    results: [],
    admit_cards: [],
    vimps_links: [],
    imp_links: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getAllData`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result: ApiData = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

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
            {['Home', 'Latest Jobs', 'Results', 'Admit Card', 'Answer Key', 'Syllabus', 'Search', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-6 py-4 hover:bg-blue-800 transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Sarkari Result : SarkariResultGov.live Sarkari Naukri Latest Jobs Online Form at Sarkari Results {new Date().getFullYear()}
          </h1>
          <h2 className="text-lg font-semibold">
            <span className="text-red-600">Welcome to No. 1 Education Portal Sarkari Result {new Date().getFullYear()}</span>
          </h2>
        </div>

        {/* App Links */}
        <div className="text-center mb-4 text-sm">
          <Link href="https://www.instagram.com/sarkariresultgov.live/" className="text-blue-600 hover:underline mx-2" target="_blank">Sarkari Result Instagram</Link> ||
          <Link href="https://t.me/sarkariresultpath" className="text-blue-600 hover:underline mx-2" target="_blank">Sarkari Result Telegram</Link>
        </div>

        {/* Marquee Announcements from vimps_links */}
        <div className="bg-yellow-100 border border-yellow-300 rounded p-2 mb-6">
          <div className="animate-pulse text-center text-sm">
            {data.vimps_links.map((item, idx) => (
              <React.Fragment key={item.id}>
                <Link href={item.url} target="_blank" className="text-blue-600 hover:underline mx-2">{item.title}</Link>
                {idx !== data.vimps_links.length - 1 && " || "}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Quick Links Grid from imp_links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {data.imp_links.map((item, index) => {
            const colors = [
              'bg-red-500',
              'bg-green-500',
              'bg-blue-500',
              'bg-purple-500',
              'bg-orange-500',
              'bg-pink-500',
              'bg-indigo-500',
              'bg-teal-500'
            ];
            const color = colors[index % colors.length];
            return <Link key={item.id} href={item.url} target="_blank">
              <div className={`${color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity cursor-pointer`}>
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
            </Link>
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Results */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-red-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">Result</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {loading ? (
                <p className="text-center text-sm text-gray-600">Loading...</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {data.results.map((result) => (
                    <li key={result.id} className="border-b border-gray-200 pb-1">
                      <Link href={result.url} target="_blank" className="text-blue-600 hover:underline">
                        {result.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Admit Cards */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">Admit Card</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {loading ? (
                <p className="text-center text-sm text-gray-600">Loading...</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {data.admit_cards.map((admit) => (
                    <li key={admit.id} className="border-b border-gray-200 pb-1">
                      <Link href={admit.url} target="_blank" className="text-blue-600 hover:underline">
                        {admit.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Latest Jobs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">Latest Jobs</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {loading ? (
                <p className="text-center text-sm text-gray-600">Loading...</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {data.jobs.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={job.url} target="_blank" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SarkariResultGov.live All Rights Reserved.
          </p>
          <p className="text-xs mt-1">Made with ❤️ for students and job seekers in India.</p>
        </div>
      </footer>
    </div>
  );
}
