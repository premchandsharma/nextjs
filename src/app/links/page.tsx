import React from 'react';
import Image from 'next/image';
import { ExternalLink, MessageCircle, Play, Camera, Globe } from 'lucide-react';

export default function LinksPage() {
  const links = [
    {
      name: 'sarkariresultgov.live',
      url: 'https://sarkariresultgov.live/',
      icon: <Globe size={24} />,
      gradient: 'from-green-500 to-green-600',
      description: 'Visit our website'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sarkariresultgov.live',
      icon: <Camera size={24} />,
      gradient: 'from-pink-500 to-purple-600',
      description: 'Follow our journey'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@sarkariresultgov',
      icon: <Play size={24} />,
      gradient: 'from-red-500 to-red-600',
      description: 'Watch our videos'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/sarkariresultgovlive ',
      icon: <MessageCircle size={24} />,
      gradient: 'from-blue-500 to-blue-600',
      description: 'Join our community'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">

            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
            <Image
                          src="/logo.png"
                          alt="Sarkari Result Logo"
                          width={100}
                          height={100}
                          className="rounded-full bg-white p-0.5"
                        />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">SarkariResultGov.live</h1>
          <p className="text-gray-300 text-sm">Connect with us on all platforms</p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className={`
                relative p-4 rounded-2xl bg-gradient-to-r ${link.gradient} 
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl
                active:scale-95
                shadow-lg
                backdrop-blur-sm
                border border-white/10
              `}>
                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-r ${link.gradient}
                  opacity-0 group-hover:opacity-30 transition-opacity duration-300
                  blur-xl -z-10
                `}></div>
                
                <div className="flex items-center justify-between text-white relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{link.name}</h3>
                      <p className="text-white/80 text-sm">{link.description}</p>
                    </div>
                  </div>
                  <ExternalLink 
                    size={20} 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <p className="text-gray-400 text-xs">
            Tap any link to connect with us
          </p>
        </div>
      </div>
    </div>
  );
}