const UserFavoriteAnimals = (props) => {
  const favorites = props.favorites
  return favorites.map((favorite, i) => <li key={i}>{favorite}</li>)
}

export default UserFavoriteAnimals
