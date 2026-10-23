import heroImage from "./assets/hero.JPG";

function App() {
  return (
    <main className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black">
      {/* Full-screen hero image */}
      <img
        src={heroImage}
        alt="Photography portfolio"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Vertical branding */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-5 sm:pl-10">
        <div className="flex flex-col items-center text-white">
          <h1 className="font-serif text-3xl font-light uppercase leading-none tracking-[0.12em] sm:text-5xl">
            {"Fishback".split("").map((letter, index) => (
              <span key={index} className="block">
                {letter}
              </span>
            ))}
          </h1>

          <span className="mt-6 font-sans text-[10px] uppercase tracking-[0.3em] sm:text-xs">
            Photos
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;