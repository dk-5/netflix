const API_KEY="4f1a3c7ea33a8a4e249490a0dcc42907";

const request={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}language=en-US`,
    fetchNetflixoriginals:`/discover/tv?api_key=${API_KEY}&language=en-US&region=US&sort_by=release_date.asc&networks=Netflix&release_date.gte=2017-05-01`,
    fetchToprated:`/movie/top_rated?api_key=${API_KEY}`,
    fetchActionmovies:`/discover/movie?api_key=${API_KEY}`
}
export default request;
