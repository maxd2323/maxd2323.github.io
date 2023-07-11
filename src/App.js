import './App.css';
import { useState, useEffect } from 'react';
import { MOVIE_JSON_DATA } from './movies';
import AutosuggestComponent from './components/AutosuggestComponent';
import { Submission } from './components/Submission';

function App() {

  const [answer, setAnswer] = useState({})
  const [movies, setMovies] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  useEffect(() => {
    setAnswer(MOVIE_JSON_DATA[Math.floor(Math.random() * MOVIE_JSON_DATA.length)]);
    console.log(JSON.stringify(answer));
    console.log(MOVIE_JSON_DATA[1]);
  }, []);

  useEffect(() => {
    console.log("iscorrectanswer: " + isCorrectAnswer.toString());
  }, [movies, isCorrectAnswer]);

  const apiReq = (movie) => {
    movie = movie.split(' ').join('_');
    fetch('https://www.omdbapi.com/?apikey=9c3743b1&t=' + movie)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const temp = movies;
        temp.push(data);
        setMovies([...temp]);
      });
  }

  const checkMovie = (movie) => {
    if (movie == answer["Title"]) {
      setIsCorrectAnswer(true);
    }
  }

  const onInputEnter = (movie) => {
    checkMovie(movie);
    const temp = movies;
    let data = MOVIE_JSON_DATA.find(item => item['Title'] == movie);
    temp.push(data);
    setMovies([...temp]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>mordle</div>
      </header>
      <div className="Game">
        <img
          style={{ filter: "grayscale(100%) blur(5px)", height: '40vh', width:'25vh' }}
          src={answer['Poster']}
          alt={'alt text'}
        />
        {/* <div className="Entered-Word-List">
          {movies.map((movie) => {
            return (
              <Submission
                movie={movie}
                answer={answer}
              />
            )
          })}
        </div> */}
        <table className="Entered-Word-List">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Actors</th>
            <th>Director</th>
            <th>Year</th>
          </tr>
          {movies.map((movie) => {
            return (
              <Submission
                movie={movie}
                answer={answer}
              />
            )
          })}
        </table>
        <div className="AutosuggestWrapper">
            <AutosuggestComponent
              movieList={MOVIE_JSON_DATA.map(a => a['Title'])}
              onInputEnter={onInputEnter}
              disabled={isCorrectAnswer}
            />
        </div>
      </div>
    </div>
  );
}

export default App;



{/* <div className="Hint-Box-Container">
            <span className="Hint-Box">{movie["Title"]}</span>
            <span className="Hint-Box-Subtitle">Title</span>
          </div>
          <div className="Hint-Box-Container">
            <span className="Hint-Box">{movie["Genre"]}</span>
            <span className="Hint-Box-Subtitle">Genre</span>
          </div>
          <div className="Hint-Box-Container">
            <span className="Hint-Box">{movie["Actors"]}</span>
            <span className="Hint-Box-Subtitle">Actors</span>
          </div>
          <div className="Hint-Box-Container">
            <span className="Hint-Box">{movie["Director"]}</span>
            <span className="Hint-Box-Subtitle">Director</span>
          </div>
          <div className="Hint-Box-Container">
            <span className="Hint-Box">{movie["Year"]}</span>
            <span className="Hint-Box-Subtitle">Year</span>
          </div> */}