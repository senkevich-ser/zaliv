import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';
import initialArr from '../../../initialData';
import Button from '../../Button/Button';
import './MoviesCardList.css';

function DeleteButton() {
  return (
    <Button userClass="saved-movies__btn_delete"/>
  );
}

function MoviesCardList(props) {
  const getMoviesList = (cardArr) => {
    if (cardArr.length > 0) {
      return initialArr.map((moviesCard) => (
        <MoviesCard
          key={moviesCard.id} movie={moviesCard}
        >
         { props.savedFilms
           ? (<DeleteButton
              movie={moviesCard}
            />)
           : (<RoundCheckBox
              movieId={moviesCard.movieId}
            />)
          }
        </MoviesCard>
      ));
    }
    return (
      <li className="list__no-result-box">
        Что то пошло не так
      </li>
    );
  };

  return (
    <ul className="list">
      {getMoviesList(initialArr)}
    </ul>
  );
}

export default MoviesCardList;
