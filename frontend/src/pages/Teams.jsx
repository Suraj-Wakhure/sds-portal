import React, { useState, useMemo, useEffect } from "react";
import { Github, Linkedin, Instagram, Search } from "lucide-react";
import TiltedCard from "../components/TiltedCard";
import image1 from "../components/images/image1.jpg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-800/40 text-slate-200 hover:scale-110 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
    >
      {children}
    </a>
  );
}

function ProfileModal({ member, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!member) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative z-10 max-w-3xl w-full bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-slate-800/60 text-slate-100 hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
          aria-label="Close profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 sm:col-span-2">
            <h2 id="profile-title" className="text-2xl font-bold text-teal-300">
              {member.name}
            </h2>
            <p className="text-slate-300 font-medium mt-1">{member.role}</p>
            <p className="text-slate-400 mt-4 leading-relaxed text-center">{member.bio ?? "Passionate contributor building delightful experiences and meaningful products."}</p>
            <p className="text-slate-400 mt-4 leading-relaxed text-center">{member.additionalDescription ?? "More about this member — their focus, interests, and notable contributions."}</p>

            <div className="mt-6 flex gap-3">
              <SocialIcon href={member.social.instagram} label={`${member.name} on Instagram`}>
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href={member.social.linkedin} label={`${member.name} on LinkedIn`}>
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href={member.social.github} label={`${member.name} on GitHub`}>
                <Github size={18} />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TeamCard = ({ member, onOpen }) => {
  return (
    <div className="w-full max-w-xs mx-auto flex items-center justify-center">
      <button
        onClick={() => onOpen(member)}
        className="group block w-full text-left rounded-2xl focus:outline-none focus:ring-4 focus:ring-slate-800/50"
        aria-label={`Open profile for ${member.name}`}
      >
        <TiltedCard
          imageSrc={member.image}
          altText={member.name}
          containerHeight="360px"
          containerWidth="100%"
          rotateAmplitude={8}
          scaleOnHover={1.06}
          displayOverlayContent={true}
          overlayContent={
            <div className="absolute bottom-0 left-0 right-0 h-28 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-slate-900/80 to-transparent backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-teal-300 mb-1 text-center">{member.name}</h3>
              <p className="text-slate-300 text-sm mb-3 text-center">{member.role}</p>
              <div className="flex gap-3 justify-center" aria-hidden>
                <div className="flex gap-2 justify-center">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram: ${member.name}`}
                    className="p-2 rounded-md bg-slate-800/50 text-slate-200 hover:text-pink-400 hover:scale-110 transition-transform duration-200"
                    title={`Instagram — ${member.name}`}
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn: ${member.name}`}
                    className="p-2 rounded-md bg-slate-800/50 text-slate-200 hover:text-blue-400 hover:scale-110 transition-transform duration-200"
                    title={`LinkedIn — ${member.name}`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub: ${member.name}`}
                    className="p-2 rounded-md bg-slate-800/50 text-slate-200 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
                    title={`GitHub — ${member.name}`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          }
        />
      </button>
    </div>
  );
};

export default function TeamPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const teamMembers = useMemo(() => [
      {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: image1,
        bio: "Founder and CEO. Focused on strategy, culture, and product vision.",
        additionalDescription: "Sarah leads company strategy and mentorship programs. Outside work she mentors startups and volunteers for tech education initiatives.",
        social: {
          instagram: "https://instagram.com/placeholder",
          linkedin: "https://linkedin.com/in/placeholder",
          github: "https://github.com/placeholder",
        },
      },
      {
        name: "Michael Chen",
        role: "Lead Developer",
        image: image2,
        bio: "Engineer, polyglot programmer and systems thinker.",
        additionalDescription: "Michael builds resilient systems and loves optimizing performance. He enjoys open-source contributions and community meetups.",
        social: {
          instagram: "https://instagram.com/placeholder",
          linkedin: "https://linkedin.com/in/placeholder",
          github: "https://github.com/placeholder",
        },
      },
      {
        name: "Emily Rodriguez",
        role: "UX Designer",
        image: image3,
        bio: "Designing human-first experiences and delightful interactions.",
        additionalDescription: "Emily leads usability research and brings cross-functional teams together to iterate on prototypes and flows.",
        social: {
          instagram: "https://instagram.com/placeholder",
          linkedin: "https://linkedin.com/in/placeholder",
          github: "https://github.com/placeholder",
        },
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return teamMembers;
    const q = query.toLowerCase();
    return teamMembers.filter(
      (m) => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)
    );
  }, [query, teamMembers]);

 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
    {/* Decorative background (reduced opacity & simpler) */}
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5a4" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <rect width="1440" height="600" fill="url(#g1)" />
      </svg>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
      {/* Header */}
      <div className="text-center mb-48 sm:mb-56 flex flex-col items-center">
        <h1
          style={{ fontSize: "clamp(3.5rem, 8.5vw, 7.5rem)" }}
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300 mb-10 sm:mb-12 leading-tight tracking-tight animate-gradient"
        >
          Meet Our Team
        </h1>

        <div className="w-36 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-10 rounded-full" />

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
          Talented individuals working together to create exceptional products and experiences.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-24 lg:gap-28 justify-items-center">
        {filtered.map((member, idx) => (
          <TeamCard key={idx} member={member} onOpen={setActive} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-24 text-center">
        <p className="text-slate-400">
          Want to join us?{" "}
          <a href="#" className="text-teal-300 font-semibold hover:underline">
            See open roles
          </a>
        </p>
      </div>
    </div>

    <ProfileModal member={active} onClose={() => setActive(null)} />

    <style jsx>{`
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient {
        background-size: 200% auto;
        animation: gradient 5s ease infinite;
      }
    `}</style>
  </div>
);
}