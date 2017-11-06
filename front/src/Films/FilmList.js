import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchFilms } from './actions'
import LoadingList from '../List/List'

export const FilmList = ({ loaded, loading, films, loadFilms }) => (
  <LoadingList
    loaded={loaded}
    loading={loading}
    name='Films'
    items={Object.values(films)}
    loadItems={loadFilms}
    callback={({ id, title }) => (
      <div>
        <Link to={`/films/${id}`}>
          {title}
        </Link>
      </div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchFilms())
})

const mapStateToProps = ({
  Films: {
    loaded,
    loading,
    films
  }
}) => ({
  loaded,
  loading,
  films
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
