import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="img-container">
        <img src="./Icon.png" alt="Logo of the site" />
      </div>
      <h2>Meme Generator</h2>

      <h3>
        <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">React Course</a>
        {" "}
        - Project 3
      </h3>
    </header>
  );
}
