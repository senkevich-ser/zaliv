import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
  return (
    <section className="movies">
      <Header>{<Navigation />}</Header>
      <SearchForm />
      <MoviesCardList
      savedFilms={false}/>
      <Button userClass="movies__btn_type_more ">Ещё</Button>
      <Footer />
    </section>
  );
}

export default Movies;
