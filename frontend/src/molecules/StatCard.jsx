const StatCard = ({value, info}) => {
    return (
        <div className="flex flex-col justify-around bg-[#1e293b] hover:bg-[#243447] rounded-4xl p-8 shadow-md transition-all duration-300 transform hover:-translate-y-1 w-[15dvw] h-auto !py-5">
          <h3 className="!text-6xl font-bold text-cyan-400 !mx-5 !my-2">{value}</h3>
          <p className="text-gray-300 text-xl mt-2 !my-3 !mx-5">{info}</p>
        </div>
    );
}

export default StatCard;