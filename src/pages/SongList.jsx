import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard.jsx'

export default function SongList({ songs }) {
  return (
    <>
      {songs.map(song => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  )
}