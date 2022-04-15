type genreItemProps = {
  name: string;
  onClick: () => any;
  className?: string;
};

function GenreItem({ name }: genreItemProps): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {name}
      </a>
    </li>
  );
}

export default GenreItem;
