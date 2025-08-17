import Image from 'next/image';
import Link from 'next/link';

interface ApiData {
  vimps_links: { id: number; title: string;}[];
  imp_links: { id: number; title: string;}[];
  jobs: { id: number; title: string;}[];
  results: { id: number; title: string;}[];
  admit_cards: { id: number; title: string;}[];
  naukri_forms: { id: number; title: string;}[];
  admissions: { id: number; title: string;}[];
  regular_forms: { id: number; title: string;}[];
  offline_forms: { id: number; title: string;}[];
  answer_keys: { id: number; title: string;}[];
  syllabus: { id: number; title: string;}[];
  sarkari_yojna: { id: number; title: string;}[];
  verification: { id: number; title: string;}[];
  upcoming: { id: number; title: string;}[];
}

// ✅ fetch function runs on the server
async function getData(): Promise<ApiData> {
  const res = await fetch("https://api.sarkariresultgov.live/getAllData", {
    cache: "no-store" // or "force-cache" / { next: { revalidate: 60 } }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {

  const data = await getData();

  function slugify(text: string) {
    return text
      .trim()
      .replace(/\s+/g, "-")        // Replace spaces with -
      .replace(/[^\w\-]+/g, "")    // Remove all non-word chars
      .replace(/\-\-+/g, "-");     // Replace multiple - with single -
  }

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
              const internalSections = ['latest-jobs', 'results', 'admit-card', 'answer-key', 'syllabus'];
              const href =
                item === 'Home' ? '#top'
                  : internalSections.includes(lower) ? `#${lower}`
                    : `/${lower}`;

              return (
                <li key={item}>
                  <Link
                    href={href}
                    className="block px-6 py-4 hover:bg-blue-800 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            }
            )}
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
          <Link href="https://www.instagram.com/sarkariresultgov.live/" className="text-blue-600 hover:underline mx-2" target="_blank" rel="noopener noreferrer">Sarkari Result Instagram</Link> ||
          <Link href="https://t.me/sarkariresultpath" className="text-blue-600 hover:underline mx-2" target="_blank">Sarkari Result Telegram</Link>
        </div>

        {/* Marquee Announcements from vimps_links */}
        <div className="bg-yellow-100 border border-yellow-300 rounded p-2 mb-6">
          <div className="animate-pulse text-center text-sm">
            {data.vimps_links.map((item, idx) => (
              <span key={item.id}>
                <Link href={`/${slugify(item.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">{item.title}</Link>
                {idx !== data.vimps_links.length - 1 && " || "}
              </span>
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
            return <Link key={item.id} href={`/${slugify(item.title)}`} target="_blank">
              <div className={`${color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity cursor-pointer`}>
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
            </Link>
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Latest Jobs */}
          <div id="latest-jobs" className="bg-white rounded-lg shadow-md">
            <div className="bg-red-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">LATEST JOBS</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.jobs.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Results */}
          <div id="results" className="bg-white rounded-lg shadow-md">
            <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">RESULT</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.results.map((result) => (
                    <li key={result.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(result.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {result.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Admit Cards */}
          <div id="admit-card" className="bg-white rounded-lg shadow-md">
            <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">ADMIT CARD</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.admit_cards.map((admit) => (
                    <li key={admit.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(admit.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {admit.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Naukri Form */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-red-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">NAUKRI FORM</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.naukri_forms.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Admission */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">ADMISSION</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.admissions.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Regular Form */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">REGULAR FORM</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.regular_forms.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Offline Form */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-red-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">OFFLINE FORM</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.offline_forms.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Answer key */}
          <div id="answer-key" className="bg-white rounded-lg shadow-md">
            <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">ANSWER KEY</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.answer_keys.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Syllabus */}
          <div id="syllabus" className="bg-white rounded-lg shadow-md">
            <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">SYLLABUS</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.syllabus.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Sarkari Yojana */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-red-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">SARKARI YOJANA</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.sarkari_yojna.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Verification */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">VERIFICATION</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.verification.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">UPCOMING</h2>
            </div>
            <div className="p-4">
                <ul className="space-y-2 text-sm">
                  {data.upcoming.map((job) => (
                    <li key={job.id} className="border-b border-gray-200 pb-1">
                      <Link href={`/${slugify(job.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

        </div>
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
