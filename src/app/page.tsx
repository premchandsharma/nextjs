import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
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

      {/* Navigation Bar */}
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online Form at Sarkari Results 2025
          </h1>
          <h2 className="text-lg font-semibold">
            <span className="text-red-600">Welcome to No. 1 Education Portal Sarkari Result 2025</span>
          </h2>
        </div>

        {/* App Links */}
        <div className="text-center mb-4 text-sm">
          <Link href="/android-app" className="text-blue-600 hover:underline mx-2">Sarkari Result Android Apps</Link> ||
          <Link href="/youtube" className="text-blue-600 hover:underline mx-2">Sarkari Result Youtube Channel</Link> ||
          <Link href="/ios-app" className="text-blue-600 hover:underline mx-2">Sarkari Result Apple / IOS Apps</Link> ||
          <Link href="/instagram" className="text-blue-600 hover:underline mx-2">Follow Instagram</Link>
        </div>

        {/* Marquee Announcements */}
        <div className="bg-yellow-100 border border-yellow-300 rounded p-2 mb-6">
          <div className="animate-pulse text-center text-sm">
            <Link href="/nta-csir-net-2025" className="text-blue-600 hover:underline mx-2">NTA CSIR NET Online Form 2025</Link> ||
            <Link href="/neet-ug-admit-card-2025" className="text-blue-600 hover:underline mx-2">NTA NEET UG Admit Card 2025</Link> ||
            <Link href="/up-cnet-2025" className="text-blue-600 hover:underline mx-2">UP CNET Online Form 2025</Link>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'RPF Constable / SI', subtitle: 'Apply Online', color: 'bg-red-500', slug: 'rpf-constable-si' },
            { title: 'UGC NET June 2025', subtitle: 'Apply Online', color: 'bg-green-500', slug: 'ugc-net-june-2025' },
            { title: 'SSC 10+2 CHSL', subtitle: 'Apply Online', color: 'bg-blue-500', slug: 'ssc-chsl' },
            { title: 'UPSC CAPF AC', subtitle: 'Apply Online', color: 'bg-purple-500', slug: 'upsc-capf-ac' },
            { title: 'NEET UG 2025', subtitle: 'Admit Card', color: 'bg-orange-500', slug: 'neet-ug-2025' },
            { title: 'MP Board Result', subtitle: '2025', color: 'bg-pink-500', slug: 'mp-board-result' },
            { title: 'UPSSSC AGTA 2025', subtitle: 'Apply Online', color: 'bg-indigo-500', slug: 'upsssc-agta-2025' },
            { title: 'JEE Advanced 2025', subtitle: 'Apply Online', color: 'bg-teal-500', slug: 'jee-advanced-2025' }
          ].map((item, index) => (
            <Link key={index} href={`/${item.slug}`}>
              <div className={`${item.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity cursor-pointer`}>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs mt-1">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-red-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">Result</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <ul className="space-y-2 text-sm">
                {[
                  { title: 'ISRO Assistant JPA and Other Post 2022 Result', slug: 'isro-assistant-result-2022' },
                  { title: 'RRB All Division Result 2025', slug: 'rrb-all-division-result-2025' },
                  { title: 'West Bengal Board Class 10th Madhyamic Result 2025', slug: 'wb-board-10th-result-2025' },
                  { title: 'PGCIL Diploma Trainee 2023 Result', slug: 'pgcil-diploma-trainee-result-2023' },
                  { title: 'Haryana Board Class 12th Result 2025', slug: 'haryana-board-12th-result-2025' },
                  { title: 'Uttarakhand Board Class 10th, 12th Result 2025', slug: 'uttarakhand-board-result-2025' },
                  { title: 'Jharkhand Board Class 12th Inter Result 2025', slug: 'jharkhand-board-12th-result-2025' },
                  { title: 'NTA JEEMAIN April 2025 Result', slug: 'nta-jeemain-april-2025-result' },
                  { title: 'MPBSE MP Board 10th, 12th Result 2025 Declared', slug: 'mp-board-result-2025' },
                  { title: 'MP Class 5th, 8th Result 2025 Declared', slug: 'mp-class-5th-8th-result-2025' },
                  { title: 'Jharkhand JPSC Pre Result 2025', slug: 'jharkhand-jpsc-pre-result-2025' },
                  { title: 'UPSC CDS II 2023 Final Result', slug: 'upsc-cds-ii-2023-final-result' },
                  { title: 'UP Board Class 10th High School Result 2025 Declared', slug: 'up-board-10th-result-2025' },
                  { title: 'UP Board Class 12th Intermediate Result 2025 Declared', slug: 'up-board-12th-result-2025' },
                  { title: 'UP Board Class 10th, 12th Result 2025', slug: 'up-board-result-2025' },
                  { title: 'UP Board Result 2025 Server II', slug: 'up-board-result-2025-server-ii' },
                  { title: 'AIIMS NORCET 6th Stage I Result 2025', slug: 'aiims-norcet-6th-result-2025' },
                  { title: 'Jharkhand Board JAC Class 10th Matric Result 2025 Declared', slug: 'jharkhand-jac-10th-result-2025' },
                  { title: 'UPSC Civil Services IAS 2023 Final Result with Marks', slug: 'upsc-ias-2023-final-result' },
                  { title: 'NTA Uttarakhand High Court Junior Assistant, Steno Result 2025', slug: 'uttarakhand-hc-junior-assistant-result-2025' }
                ].map((result, index) => (
                  <li key={index} className="border-b border-gray-200 pb-1">
                    <Link href={`/result/${result.slug}`} className="text-blue-600 hover:underline">
                      {result.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <Link href="/results" className="text-blue-600 hover:underline font-semibold">
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* Admit Card Section */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-green-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">Admit Card</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <ul className="space-y-2 text-sm">
                {[
                  { title: 'NTA NEET UG 2025 Admit Card', slug: 'nta-neet-ug-2025-admit-card' },
                  { title: 'NTA NCHMJEE Admit Card 2025', slug: 'nta-nchmjee-admit-card-2025' },
                  { title: 'UP Metro Various Post Admit Card 2025', slug: 'up-metro-admit-card-2025' },
                  { title: 'NTA UGC NET June 2025 New Exam Date', slug: 'nta-ugc-net-june-2025-exam-date' },
                  { title: 'NTA CMAT 2025 Exam Date', slug: 'nta-cmat-2025-exam-date' },
                  { title: 'Chandigarh JBT Teacher Admit Card 2025', slug: 'chandigarh-jbt-teacher-admit-card-2025' },
                  { title: 'NTA CUET UG 2025 Subject Wise Exam Schedule', slug: 'nta-cuet-ug-2025-exam-schedule' },
                  { title: 'BPSC TRE 3 Exam Date, BPSC Exam Calendar Download', slug: 'bpsc-tre-3-exam-date-2025' },
                  { title: 'UPBED 2025 Entrance Exam Date', slug: 'upbed-2025-entrance-exam-date' },
                  { title: 'UPSSSC Gram Vikas Adhikari VDO 2018 DV Schedule', slug: 'upsssc-vdo-2018-dv-schedule' },
                  { title: 'Army Agniveer CEE Exam Admit Card 2025', slug: 'army-agniveer-cee-admit-card-2025' },
                  { title: 'UPSC NDA I Admit Card 2025', slug: 'upsc-nda-i-admit-card-2025' },
                  { title: 'UPSC CDS I Admit Card 2025', slug: 'upsc-cds-i-admit-card-2025' },
                  { title: 'AIIMS Nursing Officer NURCET 6th Admit Card 2025', slug: 'aiims-nurcet-6th-admit-card-2025' },
                  { title: 'NIELIT CCC Admit Card April 2025', slug: 'nielit-ccc-admit-card-april-2025' },
                  { title: 'Coast Guard Navik GD 02/2025 Exam Date / City', slug: 'coast-guard-navik-gd-exam-date-2025' },
                  { title: 'ISRO URSC Various Post Admit Card 2025', slug: 'isro-ursc-admit-card-2025' },
                  { title: 'Delhi High Court Judicial Services Mains Admit Card 2025', slug: 'delhi-hc-judicial-services-admit-card-2025' },
                  { title: 'NTA JEEMAIN Session II April 2025 Admit Card', slug: 'nta-jeemain-session-ii-admit-card-2025' },
                  { title: 'SSC GD Constable Re Exam Admit Card 2025', slug: 'ssc-gd-constable-re-exam-admit-card-2025' }
                ].map((admit, index) => (
                  <li key={index} className="border-b border-gray-200 pb-1">
                    <Link href={`/admit-card/${admit.slug}`} className="text-blue-600 hover:underline">
                      {admit.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <Link href="/admit-card" className="text-blue-600 hover:underline font-semibold">
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* Latest Jobs Section */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">Latest Jobs</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <ul className="space-y-2 text-sm">
                {[
                  { title: 'IIT Jodhpur Non Teaching Various Post Online Form 2025', slug: 'iit-jodhpur-non-teaching-2025' },
                  { title: 'NTA CSIR UGC NET Online Form 2025', slug: 'nta-csir-ugc-net-2025' },
                  { title: 'UPSSSC Technical Assistant Group C Online Form 2025', slug: 'upsssc-technical-assistant-2025' },
                  { title: 'NVS Non Teaching Various Post Online Form 2025 Extended', slug: 'nvs-non-teaching-2025-extended' },
                  { title: 'BSEB Bihar Sakshamta Pariksha II Online Form 2025', slug: 'bseb-bihar-sakshamta-pariksha-ii-2025' },
                  { title: 'Naval Dockyard Mumbai Apprentices Online Form 2025', slug: 'naval-dockyard-mumbai-apprentices-2025' },
                  { title: 'UPSC CAPF Assistant Commandant Online Form 2025', slug: 'upsc-capf-assistant-commandant-2025' },
                  { title: 'UPSSSC Mandi Parishad Sachiv Online Form 2025', slug: 'upsssc-mandi-parishad-sachiv-2025' },
                  { title: 'UPSSSC Junior Analyst Drugs Online Form 2025', slug: 'upsssc-junior-analyst-drugs-2025' },
                  { title: 'NTA UGC NET June 2025 Online Form', slug: 'nta-ugc-net-june-2025' },
                  { title: 'MPPSC State Eligibility Test SET Online Form 2025 Extended', slug: 'mppsc-set-2025-extended' },
                  { title: 'UPSSSC Junior Analyst Food Online Form 2025', slug: 'upsssc-junior-analyst-food-2025' },
                  { title: 'Railway RPF Constable / Sub Inspector Online Form 2025', slug: 'railway-rpf-constable-si-2025' },
                  { title: 'Jharkhand High Court Assistant Online Form 2025', slug: 'jharkhand-hc-assistant-2025' },
                  { title: 'Rajasthan High Court Civil Judge Online Form 2025', slug: 'rajasthan-hc-civil-judge-2025' },
                  { title: 'Army TGC 140 Online Form 2025', slug: 'army-tgc-140-2025' },
                  { title: 'UPSC IES / ISS Online Form 2025', slug: 'upsc-ies-iss-2025' },
                  { title: 'UPSC Combined Medical Services CMS Online Form 2025', slug: 'upsc-cms-2025' },
                  { title: 'SSC CHSL 10+2 Online Form 2025', slug: 'ssc-chsl-10-2-2025' },
                  { title: 'UPPSC Agriculture Services Online Form 2025', slug: 'uppsc-agriculture-services-2025' }
                ].map((job, index) => (
                  <li key={index} className="border-b border-gray-200 pb-1">
                    <Link href={`/job/${job.slug}`} className="text-blue-600 hover:underline">
                      {job.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <Link href="/latest-jobs" className="text-blue-600 hover:underline font-semibold">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} sarkariresultgov.live All Rights Reserved.
          </p>
          <p className="text-xs mt-1">
            Made with ❤️ for students and job seekers in India.
          </p>
        </div>
      </footer>
    </div>
  );
}