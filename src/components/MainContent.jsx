import { useEffect, useState } from "react";
import "../styles/maincontent.css";

export default function MainContent() {
  const [meme, setMeme] = useState(
    {
      imgUrl: "./Placeholder.jpg",
      topText: "",
      bottomText: "",
    },
  );

  const [allMemeImages, setAllMemeImages] = useState({});

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data));
  }, []);

  function getMemeImg() {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);

    setMeme((prevState) => {
      return { ...prevState, imgUrl: memesArray[randomNum].url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="container">
      <main>
        <div className="input-container">
          <input
            type="text"
            placeholder="Top text"
            id="top-input"
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            id="bottom-input"
            name="bottomText"
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button onClick={getMemeImg}>Get a new meme image 🖼️</button>
        </div>
        <div className="img-container">
          <img
            src={meme.imgUrl}
            alt="Random generated meme image"
          />
          <p className="meme-text" id="top-text">{meme.topText}</p>
          <p className="meme-text" id="bottom-text">{meme.bottomText}</p>
        </div>
      </main>
    </div>
  );
}
