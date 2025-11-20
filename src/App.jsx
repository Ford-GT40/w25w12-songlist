import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSongList } from './api/songApi'

import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'

function App() {
  const [songs, setSongs] = useState([])

  // useEffect: state 변경될 때 수행하는 작업 정의
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getSongList()
        // await 종료까지 대기
        setSongs(data)
      } catch (err) {
        console.error("Failed to fetch songs:", err)
      }
    }

    fetchSongs()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
