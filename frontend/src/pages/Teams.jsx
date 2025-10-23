import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import TiltedCard from "../components/TiltedCard";
import image1 from "../components/images/image1.jpg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0b1220 0%, #071129 100%)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "64px 20px",
    color: "#e6f9f8",
    fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`,
  },
  bgDecor: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.22,
  },
  container: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    maxWidth: 600,
    margin: "0 auto",
    padding: "24px",
    boxSizing: "border-box",
  },
  header: {
    textAlign: "center",
    marginBottom: 56,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: 800,
    margin: 0,
    lineHeight: 0.95,
    fontSize: "clamp(32px, 8.5vw, 56px)",
    backgroundImage: "linear-gradient(90deg,#7ef0e6,#6fb3ff 50%, #7ef0e6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    backgroundSize: "200% auto",
    animation: "gradientAnim 6s linear infinite",
  },
  underline: {
    width: 144,
    height: 6,
    borderRadius: 999,
    marginTop: 12,
    marginBottom: 24,
    background: "linear-gradient(90deg,#14b8a6,#3b82f6)",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 18,
    maxWidth: 900,
    margin: "0 auto",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: 28,
    alignItems: "center",
  },
  teamCard: {
    width: "100%",
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardButton: {
    display: "block",
    width: "100%",
    textAlign: "left",
    borderRadius: 16,
    background: "transparent",
    padding: 0,
    border: 0,
    cursor: "pointer",
    outline: "none",
  },
  overlayContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 16,
    boxSizing: "border-box",
    background: "linear-gradient(to top, rgba(7,11,20,0.75), rgba(7,11,20,0.0))",
    backdropFilter: "blur(6px)",
  },
  overlayName: {
    margin: 0,
    fontSize: 16,
    color: "#5eead4",
    fontWeight: 600,
    textAlign: "center",
  },
  overlayRole: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: 13,
    textAlign: "center",
  },
  overlayIcons: {
    display: "flex",
    gap: 8,
    marginTop: 8,
  },
  overlayIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 8,
    background: "rgba(15,23,42,0.42)",
    color: "#e2e8f0",
    transition: "transform .18s ease, color .18s ease",
  },
  modalWrap: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modalBackdrop: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.72)",
    backdropFilter: "blur(6px)",
  },
  modalContent: {
    position: "relative",
    zIndex: 10,
    maxWidth: 960,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    background: "linear-gradient(180deg, rgba(15,20,32,0.98), rgba(8,10,14,0.98))",
    borderRadius: 12,
    boxShadow: "0 20px 60px rgba(2,6,23,0.7)",
    overflow: "hidden",
  },
  modalClose: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 20,
    background: "rgba(15,23,42,0.6)",
    borderRadius: 8,
    padding: 6,
    border: 0,
    color: "#e6f9f8",
    cursor: "pointer",
  },
  modalImageWrap: {
    flex: "1 1 320px",
    minWidth: 280,
    maxWidth: 480,
  },
  modalImage: {
    display: "block",
    width: "100%",
    height: "100%",
    maxHeight: 360,
    objectFit: "cover",
  },
  modalInfo: {
    flex: "1 1 420px",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  modalName: {
    color: "#67e8f9",
    fontSize: 22,
    margin: "0 0 6px",
  },
  modalRole: {
    color: "#cbd5e1",
    margin: 0,
    fontWeight: 500,
  },
  modalText: {
    color: "#94a3b8",
    marginTop: 12,
    lineHeight: 1.6,
  },
  modalSocials: {
    display: "flex",
    gap: 10,
    marginTop: 12,
  },
  socialIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
    background: "rgba(15,23,42,0.6)",
    color: "#e6f9f8",
    cursor: "pointer",
    transition: "transform .16s ease",
  },
  focusRing: {
    boxShadow: "0 6px 22px rgba(20,184,166,0.12)",
    borderRadius: 12,
  },
};

function handleImgError(e) {
  e.currentTarget.src = "https://via.placeholder.com/400x250?text=Avatar";
}

function SocialIcon({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} style={styles.socialIcon}>
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
    <div role="dialog" aria-modal="true" aria-labelledby="profile-title" style={styles.modalWrap}>
      <div style={styles.modalBackdrop} onClick={onClose} aria-hidden="true" />
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.modalClose} aria-label="Close profile" title="Close profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div style={styles.modalImageWrap}>
          <img src={member.image} alt={member.name} style={styles.modalImage} loading="lazy" onError={handleImgError} />
        </div>

        <div style={styles.modalInfo}>
          <h2 id="profile-title" style={styles.modalName}>{member.name}</h2>
          <p style={styles.modalRole}>{member.role}</p>
          <p style={styles.modalText}>{member.bio}</p>
          <p style={styles.modalText}>{member.additionalDescription}</p>
          <div style={styles.modalSocials}>
            <SocialIcon href={member.social.instagram} label={`${member.name} on Instagram`}>
              <Instagram size={16} />
            </SocialIcon>
            <SocialIcon href={member.social.linkedin} label={`${member.name} on LinkedIn`}>
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href={member.social.github} label={`${member.name} on GitHub`}>
              <Github size={16} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  { name: "Name1", role: "Role1", image: image1, bio: "bio", additionalDescription: "Leading SDS Club.", social: { instagram: "https://www.instagram.com/?hl=en", linkedin: "https://www.linkedin.com/", github: "https://github.com/" } },
  { name: "Name2", role: "Role2", image: image2, bio: "bio", additionalDescription: "Leading SDS Club.", social: { instagram: "https://www.instagram.com/?hl=en", linkedin: "https://www.linkedin.com/", github: "https://github.com/" } },
  { name: "Name3", role: "Role3", image: image3, bio: "bio", additionalDescription: "Leading SDS Club.", social: { instagram: "https://www.instagram.com/?hl=en", linkedin: "https://www.linkedin.com/", github: "https://github.com/" } },
];

const TeamCard = ({ member, onOpen }) => {
  const overlay = (
    <div style={styles.overlayContent}>
      <h3 style={styles.overlayName}>{member.name}</h3>
      <p style={styles.overlayRole}>{member.role}</p>
      <div style={styles.overlayIcons}>
        <a href={member.social.instagram} target="_blank" rel="noreferrer" style={styles.overlayIcon}><Instagram size={16} /></a>
        <a href={member.social.linkedin} target="_blank" rel="noreferrer" style={styles.overlayIcon}><Linkedin size={16} /></a>
        <a href={member.social.github} target="_blank" rel="noreferrer" style={styles.overlayIcon}><Github size={16} /></a>
      </div>
    </div>
  );

  return (
    <div style={styles.teamCard}>
      <button onClick={() => onOpen(member)} style={styles.cardButton}>
        <TiltedCard imageSrc={member.image} altText={member.name} containerHeight="360px" containerWidth="100%" rotateAmplitude={8} scaleOnHover={1.06} displayOverlayContent overlayContent={overlay} onImageError={handleImgError} />
      </button>
    </div>
  );
};

export default function TeamPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={styles.page}>
      <div style={styles.bgDecor} aria-hidden>
        <svg style={{ width: "100%", height: "100%" }} preserveAspectRatio="none" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
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

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>CORE TEAM</h1>
          <div style={styles.underline} />
        
        </header>

       <main
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px", // space between cards
    width: "100%",
    minHeight: "100vh",
  }}
>
  {teamMembers.map((member, idx) => (
    <div
      key={idx}
      style={{
        width: "75vw",
        maxWidth: "1000px",
        padding: "40px 20px",
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.08)", // translucent glass
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
      }}
    >
      <TeamCard member={member} onOpen={setActive} />
    </div>
  ))}
</main>

      </div>

      <ProfileModal member={active} onClose={() => setActive(null)} />

      <style>{`@keyframes gradientAnim { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }`}</style>
    </div>
  );
}
