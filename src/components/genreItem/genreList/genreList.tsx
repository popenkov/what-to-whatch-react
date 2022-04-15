import React, { useState } from "react";
import cn from "classnames";
import GenreItem from "../genreItem";

const genres: string[] = [
  "All genres",
  "Comedies",
  "Crime",
  "Documentary",
  "Dramas",
  "Horror",
  "Kids & Family",
  "Romance",
  "Sci-Fi",
  "Thrillers",
];

function GenreList(): JSX.Element {
  const [activeGenre, setactiveGenre] = React.useState(0);
  const onSelectGenre = (index: number) => {
    setactiveGenre(index);
    console.log(activeGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres &&
        genres.map((genre, index) => {
          return (
            <GenreItem
              name={genre}
              onClick={() => onSelectGenre(index)}
              className={`catalog__genres-item ${
                activeGenre === index ? "catalog__genres-item--active" : ""
              }`}
              key={`${genre}_tab`}
            />
          );
        })}
    </ul>
  );
}

export default GenreList;
