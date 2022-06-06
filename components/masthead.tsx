import React from "react";

const Masthead: React.FC = () => {
  return(
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-12 font-bold z-10 text-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Hello!</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">NextJS-Typescript-Tailwindcss Template by s/p digital.</h2>
      </div>
    </div>
  )
}

export default Masthead
