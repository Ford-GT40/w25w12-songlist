import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'
import { getSongList } from './api/songApi'

function App() {
  const { data: songs, isLoading, isError, error } = useQuery({
    queryKey: ['songs'], // songs로 caching
    queryFn: getSongList // songApi의 getSongList 사용
    // 베리에이션
    // 인자 필요한 경우: queryFn: () => getSongDetail(id),
    // bind 함수: queryFn: getSongDetail.bind(null, id),
    // id만 있을 때: enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
