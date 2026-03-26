import { useNavigate } from "react-router-dom";

export default function LogoutForm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="text-center max-w-md w-full">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Wait… are you sure you wanna leave? 💔
        </h1>

        <p className="text-[#aadd00] mb-8">
          "Act Like its working, tho its not."
        </p>
        <p className="text-gray-400 mb-8">
          Note: that everything in this project is fixed and me the developer(Mohammad) allow you to use anything in this project i made it even the small design or icons and yeah .. i hope u enjoyed and have fun
        </p>

        <div className="flex items-center justify-center gap-4">
          
          <button
            onClick={() => navigate("/Profile")}
            className="px-6 py-2 rounded-lg border-2 border-white text-gray-950 bg-[#aadd00] hover:bg-blue-600 hover:text-white transition duration-200 font-medium"
          >
            Stay 
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-lg border border-white hover:border-red-500 hover:text-red-400 transition duration-200 font-medium"
          >
            Logout anyway
          </button>

        </div>

      </div>
    </div>
  );
}