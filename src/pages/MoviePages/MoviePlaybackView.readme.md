```
useEffect(() => {
   if (state !== undefined) {
     // if user clicks from interfacce and doesn't type the url:
     return setVideoData({
       movie: state.movie,
       trailerUrl: state.trailerUrl,
     });
   }

   //  else if the user decides to write the id in the url bar instead of clicking the movie poster in the actual app.
   //  find the object properties by matching the id to the id from useParams.
   const foundMovie = allMovies.find(
     (movie) => movie.id === Number(params.id)
   );

   if (foundMovie) { // it's going to take a bit for it to find the movie, so I'm letting it wait or else it will be undefined.
   return setVideoData({
     movie: foundMovie,
     trailerUrl: params.trailerUrl,
   });

   }

   // the reason why I want to check for both use-cases instead of just going with useParams only is because:
   // if the user clicks from the interface the video going to load noticeably faster, so I want to leave that as an option.
   // and I can't just go with only props because:
   // if the user types the url without clicking on the interface, it'll throw an error (the props don't exist).
 }, [allMovies, params, state]);
```
