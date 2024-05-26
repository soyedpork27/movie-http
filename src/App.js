import './App.css';

import {useState} from 'react';
import { movieHttp } from './app/axios/httpMovie';

function App() {

  const [movie , setMovie] = useState({});

  const viewMovie = async () => {
    const response = await movieHttp.get('');
    setMovie({...response.data.boxOfficeResult});
  }

  return (
    <>
      <button onClick={viewMovie}>클릭 시 영화 순위 가져옴</button>

      <ul>
        {movie.dailyBoxOfficeList?.map((i)=>(<li key={i.rank}>({i.rank}위) {i.movieNm}</li>))}
      </ul>

    </>
  );
}

export default App;
