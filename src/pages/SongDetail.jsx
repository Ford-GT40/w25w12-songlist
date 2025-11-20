import { useParams, Link } from 'react-router-dom'

const SongDetail = () => {
  const { id } = useParams() // 디스트럭쳐링 { id }

  return (
    <div>
      <img 
        src={`https://picsum.photos/200/200?random=${id}`} 
        alt="노래 앨범 이미지"/>

      <Link to="/">
        돌아가기
      </Link>
    </div>
  )
}

export default SongDetail