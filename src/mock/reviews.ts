const reviews = [
  {
    id: 1,
    author: `Kate Muir`,
    rating: 1.5,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    datetime: `2019-06-14T06:39:07.535Z`,
    date: `June 14, 2019`,
  },
  {
    id: 2,
    author: `Mollie`,
    rating: 2.0,
    comment: `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
    datetime: `2019-06-14T06:39:07.535Z`,
    date: `June 14, 2019`,
  },
  {
    id: 3,
    author: `Mollie`,
    rating: 2.5,
    comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    datetime: `2019-05-27T06:39:07.535Z`,
    date: `May 27, 2019`,
  },
  {
    id: 4,
    author: `Mollie`,
    rating: 3.0,
    comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    datetime: `2019-05-27T06:39:07.535Z`,
    date: `May 27, 2019`,
  },
  {
    id: 5,
    author: `Mollie`,
    rating: 3.5,
    comment: `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
    datetime: `2019-06-14T06:39:07.535Z`,
    date: `June 14, 2019`,
  },
  {
    id: 6,
    author: `Mollie`,
    rating: 4.0,
    comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    datetime: `2019-05-27T06:39:07.535Z`,
    date: `May 27, 2019`,
  },
  {
    id: 7,
    author: `Mollie`,
    rating: 5.0,
    comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    datetime: `2019-05-27T06:39:07.535Z`,
    date: `May 27, 2019`,
  },
].sort((a, b) => {
  let aDate: any = new Date(b.datetime);
  let bDate: any = new Date(a.datetime);
  return aDate - bDate;
});

export default reviews;
