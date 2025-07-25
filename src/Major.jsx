import React from "react";

const Major = () => {

  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  }) 

  function handleChange(event) {
    const {value} = event.currentTarget
    
    setMeme((prevState) => {
      return {
        ...prevState, topText: value
      }
    })
  }

  return (
    <main>
      <div className="grid gap-6 grid-cols-2 p-8">
        <div className="flex flex-col justify-center gap-3">
          <label className="font-semibold text-gray-600" htmlFor="topText">Top text</label>
          <input onChange={handleChange} className="border-2 p-2 rounded-lg border-gray-300" type="text" id="topText" name="topText" placeholder="Shut up" />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <label className="font-semibold text-gray-600"  htmlFor="bottomText">Botom text</label>
          <input className="border-2 p-2 rounded-lg border-gray-300" type="text" id="bottomText" name="bottomText" placeholder="And take my money" />
        </div>
        <button className="bg-purple-600 col-span-2 p-3 text-white font-semibold rounded-lg hover:opacity-75 cursor-pointer">Get a new image 🖼️</button>
      </div>
      <div className="bg-amber-800 w-1/2 h-[400px] mx-auto relative flex justify-center ">
        <img className="w-[100%] h-[100%] object-cover" src={meme.imageUrl} alt="meme image" />
        <span className="absolute top-0 text-white font-semibold text-4xl uppercase">{meme.topText}</span>
        <span className="absolute bottom-0 text-white">{meme.bottomText}</span>

      </div>
      
    </main>
  );
};

export default Major;
