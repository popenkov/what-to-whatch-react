type FilmCardProps = {
  key: number;
  title: string;
  poster: string;
  onMouseEnter?: () => void;
};
function FilmCard({ title, poster }: FilmCardProps): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={poster} alt='Mindhunter' width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>
          {title}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
