export default function About() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#0f172a] to-[#122d55] text-white min-h-screen px-6 py-16 [&>*]:!my-[4dvh] [&>*]:outline-0">
      {/* Intro */}
      <section className="max-w-[60dvw] mx-auto text-center mb-16 p-10">
        <h1 className="!text-6xl font-extrabold mb-4 text-cyan-400">
          About the Software Development Section
        </h1>
        <p className="text-gray-300 text-2xl max-w-[40dvw] !mx-auto !mt-7 text-center">
          The Software Development Section (SDS) is a student-driven community that fosters
          innovation, collaboration, and technical excellence. Our mission is to transform
          ideas into impactful projects and encourage peer-driven learning among developers.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="max-w-[85dvw] flex justify-around gap-[5dvw] mx-auto mb-20">
        <div className="flex flex-col items-center bg-[#1e293b] !p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 max-w-[25dvw]">
          <h2 className="!text-4xl font-semibold text-cyan-400 !mb-5">Our Vision</h2>
          <p className="text-gray-300 text-center text-2xl max-w-[75%]">
            To cultivate a culture of innovation and collaboration where students explore
            modern technologies and evolve as future-ready developers.
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#1e293b] !p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 max-w-[25dvw]">
          <h2 className="!text-4xl font-semibold text-cyan-400 !mb-5">Our Mission</h2>
          <p className="text-gray-300 text-center text-2xl max-w-[75%]">
            To bridge classroom learning with real-world applications by guiding members
            through software projects, events, and continuous technical growth.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-[70dvw] x-auto text-center mb-16">
        <h2 className="!text-6xl font-semibold text-cyan-400 !my-6">What We Do</h2>
        <div className="flex justify-around gap-[5dvw]">
          <div className="bg-[#1e293b] p-6 rounded-xl hover:bg-[#243447] transition-all duration-300 [&>*]:!my-5">
            <h3 className="font-semibold !text-2xl mb-2">💡 Projects</h3>
            <p className="text-gray-300 !text-lg text-center !mx-auto w-[70%]">
              Members work on live and internal projects, applying concepts to build real software solutions.
            </p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl hover:bg-[#243447] transition-all duration-300 [&>*]:!my-5">
            <h3 className="font-semibold !text-2xl mb-2">🎉 Events</h3>
            <p className="text-gray-300 !text-lg text-center !mx-auto w-[70%]">
              We organize hackathons, workshops, and seminars to promote skill-building and collaboration.
            </p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl hover:bg-[#243447] transition-all duration-300 [&>*]:!my-5">
            <h3 className="font-semibold !text-2xl mb-2">📘 Learning</h3>
            <p className="text-gray-300 !text-lg text-center !mx-auto w-[70%]">
              Through mentorship and peer learning, members explore new tools, frameworks, and development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="text-center mt-16">
        <blockquote className="italic text-gray-300 text-5xl">
          “Together, we code, innovate, and inspire.”
        </blockquote>
      </section>
    </div>
  );
}
