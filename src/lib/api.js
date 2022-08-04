const axios = require('axios');

const api = [
    {
        apiKey: '089ff97e142c4b012df105099009a50b',
        auth: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODlmZjk3ZTE0MmM0YjAxMmRmMTA1MDk5MDA5YTUwYiIsInN1YiI6IjYyZWEzZGI5ODU2NmQyMDA1YTQ4MGEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AYa4foJRB8TpojUxU08NGdsRU8rhoWtq2KE9K1AOozE',
        username: 'wogop48437',
        email: 'wogop48437@gmail.com',
        password: 'wogop48437@gmail.com'
    }
]

const request = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {},
    params: {
        api_key: api[0].apiKey
    }
});

export default request;