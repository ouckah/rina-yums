import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full bg-red-200 gap-12">
        <div className="flex flex-row justify-center items-center w-full gap-12">
          <img className="w-48 h-48" src="/assets/cook.svg" alt="logo" />
          <h1 className="text-8xl font-black text-white uppercase">Yums</h1>
        </div>

        <button
          className="px-24 py-4 bg-white rounded-full shadow-sm transition-shadow duration-300 hover:shadow-lg"
          onClick={() => navigate("/choose")}
        >
          <h1 className="text-2xl font-bold text-red-300 uppercase">Play</h1>
        </button>
      </div>
    </>
  )
}

export default Home
