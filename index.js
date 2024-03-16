const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=budots&type=track', {
    headers: {
    'Authorization': 'Bearer BQDjyOd0zURfeEoi3lH7AUNHFReJXzFa-DLXjuOUPPneX96N63515dwDSCSmdmTb88dgS4iCmZB7sOwVndum41IezETWW-YReKz2xEAyPeMFrjuIisKWHSaGke5_nK2Yc2sZvhBhDVS3Du6akZeTIw8TsG-hZqb9pEWRYEMxPWkpRW8Imbc0L37TBgpXDElBGuvJWeSnpxZt7RaUkfw'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})



//Bearer BQDjyOd0zURfeEoi3lH7AUNHFReJXzFa-DLXjuOUPPneX96N63515dwDSCSmdmTb88dgS4iCmZB7sOwVndum41IezETWW-YReKz2xEAyPeMFrjuIisKWHSaGke5_nK2Yc2sZvhBhDVS3Du6akZeTIw8TsG-hZqb9pEWRYEMxPWkpRW8Imbc0L37TBgpXDElBGuvJWeSnpxZt7RaUkfw