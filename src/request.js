const API_KEY="";

const request={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}language=en-US`,
    fetchNetflixoriginals:`/discover/tv?api_key=${API_KEY}&language=en-US&region=US&sort_by=release_date.asc&networks=Netflix&release_date.gte=2017-05-01`,
    fetchToprated:`/movie/top_rated?api_key=${API_KEY}`,
    fetchActionmovies:`/discover/movie?api_key=${API_KEY}`
}
export default request;
