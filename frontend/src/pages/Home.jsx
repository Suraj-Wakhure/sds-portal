import { Link } from "react-router-dom";
import StatCard from "../molecules/StatCard";

export default function Home() {
  return (
    <div className="text-white bg-gradient-to-b from-[#0f172a] to-[#0a192f] min-h-screen">
      {/* Intro sectoin */}
      <section className="flex flex-col !justify-center items-center text-center !px-6 !py-20">
        <h1 className="!text-7xl md:text-5xl font-extrabold mb-4 animate-fadeIn h-[30dvh] !mt-20 leading-normal">
          Welcome to the <br />Software Development Section
        </h1>
        <p className="text-3xl text-gray-300 max-w-3xl !mb-15">
          Where innovation meets collaboration — empowering students to create, learn,
          and grow through technology and teamwork.
        </p>
        <Link
          to="/about"
          className="bg-cyan-500 hover:bg-cyan-400 text-lg text-black font-semibold !px-7 !py-4 rounded-4xl transition-all duration-300"
        >
          Learn More
        </Link>
      </section>

      {/* About prev section */}
      <section className="flex flex-col text-center py-16 bg-[#152641] h-auto [&>*]:!m-5">
        <h2 className="!text-3xl font-semibold mb-4 text-cyan-400 m-[2dvh]">
          Discover SDS
        </h2>
        <p className="text-gray-300 border-amber-200 text-xl border-2 mx-[70dvw] !px-[20dvw]">
          The Software Development Section (SDS) is a community of passionate developers
          dedicated to building impactful projects and enhancing software skills through
          real-world experiences.
        </p>
      </section>

      {/* Stats section */}
      <section className="!my-[2dvh] py-16 px-6 flex flex-col md:flex-row justify-center gap-6 text-center">
        <StatCard value = "35+" info = "Active Members" />
        <StatCard value = "20+" info = "Projects Completed" />
        <StatCard value = "10+" info = "Events Organised" />
      </section>
    </div>
  );
}