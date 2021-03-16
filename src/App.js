import './App.css';
import React, { Component } from 'react';
import Card from './components/Card';
import movies from './components/Data'


class App extends Component {
  state = {
    myMovies: movies.slice()
  }

  handleSortAlphabetically = () => {
    let sortMovies = this.state.myMovies.sort((a, b) => {
      let aTodo = a.title.toLowerCase()
      let bTodo = b.title.toLowerCase()
      if (aTodo < bTodo) {
        return -1
      } else if (bTodo < aTodo) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({ myMovies: sortMovies });
  }
  handleSortAlphabeticallyReverse = () => {
    let sortMovies = this.state.myMovies.sort((a, b) => {
      let aTodo = a.title.toLowerCase()
      let bTodo = b.title.toLowerCase()
      if (aTodo < bTodo) {
        return 1
      } else if (bTodo < aTodo) {
        return -1
      } else {
        return 0
      }
    })
    this.setState({ myMovies: sortMovies });
  }
  handleSortByDate = () => {
    let sortMovies = this.state.myMovies.sort((a, b) => {
      let datea = Number(a.year)
      let dateb = Number(b.year)
      return datea - dateb
    })
    this.setState({ myMovies: sortMovies });
  }
  handleSortByDateReverse = () => {
    let sortMovies = this.state.myMovies.sort((a, b) => {
      let datea = Number(a.year)
      let dateb = Number(b.year)
      return dateb - datea
    })
    this.setState({ myMovies: sortMovies });
  }
  handleSortByRate = () => {
    let sortMovies = this.state.myMovies.sort((a, b) => {
      let datea = Number(a.rate)
      let dateb = Number(b.rate)
      return dateb - datea
    })
    this.setState({ myMovies: sortMovies });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let newMovie = {
      title: event.target[0].value,
      year: event.target[1].value,
      director: event.target[2].value,
      duration: event.target[3].value,
      genre: event.target[4].value.split(','),
      rate: event.target[5].value,
    }
    let newMovies = this.state.myMovies.slice();
    newMovies.push(newMovie);
    this.setState({ myMovies: newMovies });
  }
  render() {
    return (
      <div className="App">
        <div id="newMovie">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Movie name:</label>
            <input type="text" name="name" id="name" /><br />

            <label htmlFor="year">Movie year:</label>
            <input type="text" name="year" id="year" /><br />

            <label htmlFor="director">Movie director:</label>
            <input type="text" name="director" id="director" /><br />

            <label htmlFor="duration">Movie duration:</label>
            <input type="text" name="duration" id="duration" /><br />

            <label htmlFor="genre">Movie genres (z.B genre,genre):</label>
            <input type="text" name="genre" id="genre" /><br />

            <label htmlFor="rate">Movie IMDB:</label>
            <input type="text" name="rate" id="rate" /><br />

            <input type="submit" value="Add" id="submit-button" />
          </form>
        </div>
        <div id="buttons">
          <button onClick={this.handleSortByDate}>Sort by Date Ascending</button>
          <button onClick={this.handleSortByDateReverse}>Sort by Date Descending</button>
          <button onClick={this.handleSortByRate}>Sort by Best Rate</button>
          <button onClick={this.handleSortAlphabetically}>A-Z</button>
          <button onClick={this.handleSortAlphabeticallyReverse}>Z-A</button>
        </div>
        <section id="movies">
          {this.state.myMovies.map((movie, i) => {
            return <Card
              key={i}
              title={movie.title}
              year={movie.year}
              director={movie.director}
              duration={movie.duration}
              genre={movie.genre}
              rate={movie.rate}
            />
          })}
        </section>
      </div>
    );
  }
}

export default App;

