import Progessbar from '../components/detailPage/ProgressBar'
import Subscribe from '../components/detailPage/Subscribe';
import Post from '../components/detailPage/Post';
import MiniBenner from '../components/detailPage/MiniBenner';
import Header from '../layout/Header';
function DetailPage() {
  return (
    <div>
      <Progessbar />
      <Post />
      <Subscribe />
      <MiniBenner />
    </div>
  )
}

export default DetailPage