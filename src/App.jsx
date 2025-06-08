//import statements
import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // vvariables and javascript logic
  //return(JSX and Javascript)
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();


  // detailed information about the selected episode
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more!</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Epsiode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
      </section>
    );
  }

  // list of episodes that a user can select from
  function Episodes() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  )
}
