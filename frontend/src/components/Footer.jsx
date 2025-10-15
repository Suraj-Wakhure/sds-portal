export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-[#000e22] text-gray-400 text-lg text-center py-4 mt-10 !h-[5dvh]">
      © {new Date().getFullYear()} Software Development Section | All Rights Reserved
    </footer>
  );
}
