import { useState, MouseEvent } from 'react';
import FilmCard from '../FilmCard/FilmCard';

type MainProps = {
  films: any[];
};

function FilmCatalogList({ films }: MainProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(false);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActiveCard(true);
  };
  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActiveCard(false);
  };
  return (
    <div className='catalog__films-list'>
      {films &&
        films.map((film) => {
          return (
            <FilmCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={film.id}
              title={film.title}
              poster={film.images.poster}
            />
          );
        })}
    </div>
  );
}

export default FilmCatalogList;
