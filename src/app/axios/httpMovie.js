import axios from 'axios';



export const movieHttp = axios.create({
  baseURL : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
  headers : {
    "Content-Type" : "application/json"
  },
  params : {
    key : process.env.REACT_APP_MOVIE_KEY,
    targetDt : '20221124'
  }
});






