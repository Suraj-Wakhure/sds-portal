import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../components/images/image4.png";
import image2 from "../components/images/image4.png";
import image3 from "../components/images/image5.svg";
import image4 from "../components/images/image4.png";
import image5 from "../components/images/image4.png";
import image6 from "../components/images/image6.png";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [flippedId, setFlippedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "RnD Project",
      description:
        "An android application to collect and manage research and development related data by dean RnD.",
      image: image1,
    },
    {
      id: 2,
      title: "Pass Distribution for Gathering",
      description:
        "A web app for generating online passes for various events of Gathering 2022, where in users get a QR code and a unique number to show at the entrance and the same can be verified at the entrance of the events using the app removing the necessicity to physically collect the passes.",
      image: image2,
    },
    {
      id: 3,
      title: "Construction App",
      description:
        "An internal project, which is used to create site projects related to construction activities, and can track all the activities for the site-work. (Additional features and Maintenance)",
      image: image3,
    },
    {
      id: 4,
      title: "Ph.D. Admission Portal",
      description:
        "A web application to make Ph.D. admissions easier for COEP. Users can fill out the stage-oriented form, track their verification status. Ph.D. Coordinators and admin can verify the student details. Account Section Coordinators can verify the details about the fee payment.",
      image: image4,
    },
    {
      id: 5,
      title: "Election Portal",
      description:
        "A dynamic web application to facilitate online elections for Gymkhana and General Secretary of COEP. Used for conducting online elections for electing Gymkhana and Gathering Secretaries for the session 2021-22. Complete election process - election setup, nomination, scrutiny and verification, election meetings etc were conducted with the help of portal. Votes of 1200+ voters were recorded during the period of 1 hour with 2 factor authentication (College Moodle Account Password + OTP on email) and results were also calculated, declared and displayed with the help of portal.",
      image: image5,
    },
    {
      id: 6,
      title: "CirQuip",
      description:
        "SDS developed android application for CirQuip, a social media platform for networking, sharing knowledge, resources, getting guidance and exploring your college. The app is available on Google PlayStore. It serves as a platform for the college to sell and buy used study material and also incorporates chat functionality.",
      image: image6,
    },
  ];


  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setFlippedId(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%)", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              background: "linear-gradient(135deg,#1c2f4a 0%,#6ca0dc 50%,#22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
              letterSpacing: ".05em",
              textTransform: "uppercase",
            }}
          >
            OUR PROJECTS
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#cbd5e1", lineHeight: 1.8, maxWidth: 900, margin: "0 auto", fontWeight: 300, padding: "0 1rem" }}>
            Projects at SDS are motivated by the desire to solve major, real-life problems faced by the college. Ranging from database management to web design, the projects cover a wide spectrum of technologies.
            <br />
          </p>
        </div>

        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {projects.map((project) => {
            const isFlipped = flippedId === project.id;
            return (
              <motion.div
                key={project.id}
                onClick={() => {
                  
                  setFlippedId(project.id);
                  setTimeout(() => setActiveProject(project), 600);
                }}
                style={{ perspective: "1200px", cursor: "pointer" }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setFlippedId(project.id);
                    setTimeout(() => setActiveProject(project), 600);
                  }
                }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: "100%",
                    minHeight: "320px",
                    borderRadius: "1rem",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                    overflow: "hidden",
                    background: "#071027",
                  }}
                >
            
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "1rem",
                      overflow: "hidden",
                      transform: "rotateY(0deg)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                   
                    <div style={{ width: "100%", height: 220, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg,# #fafbfcff)" }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ padding: "1rem", background: "linear-gradient(135deg, rgba(30,58,138,0.5) 0%, rgba(30,41,59,0.5) 100%)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <h3 style={{ color: "#67e8f9", fontSize: "1.5rem", textAlign: "center" }}>{project.title}</h3>
                    </div>
                  </div>

              
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "1rem",
                      background: "linear-gradient(135deg, rgba(195, 206, 234, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
                      color: "#cfeefe",
                      transform: "rotateY(180deg)",
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <h3 style={{ color: "#67e8f9", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{project.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.5, maxWidth: 320 }}>{project.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, padding: "2rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{ background: "#0f172a", borderRadius: "1rem", maxWidth: 900, width: "100%", padding: "2rem", color: "#cfeefe", position: "relative" }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => {
                  setActiveProject(null);
                  setFlippedId(null);
                }}
                style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: "none", color: "#67e8f9", fontSize: 28, cursor: "pointer" }}
                aria-label="Close project modal"
              >
                ×
              </button>

          
              <div style={{ width: "100%", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: 8, marginBottom: 16, background: "#071027" }}>
                <img src={activeProject.image} alt={activeProject.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>

              <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#67e8f9" }}>{activeProject.title}</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{activeProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
