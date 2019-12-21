import axios from 'axios';

export function fetch() {
  return axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      // ここにクエリパラメータを指定する
      'country': 'jp',
      'apiKey': process.env.REACT_APP_NEWS_API_KEY,
    }
  }).then((results) => {
    return results.data.articles;
  })
    .catch((error) => {
      console.log(error)
      alert('ニュースの取得に失敗しました。')
    })
}