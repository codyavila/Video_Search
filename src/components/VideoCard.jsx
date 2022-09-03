import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet
  }
}) => {
  console.log(videoId, snippet)
  return <div>video</div>
}

export default VideoCard
