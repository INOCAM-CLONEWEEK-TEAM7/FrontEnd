import Progessbar from "../components/detailPage/ProgressBar";
import Subscribe from "../components/detailPage/Subscribe";
import Post from "../components/detailPage/Post";
import MiniBenner from "../components/common/MiniBenner";
import { useQuery } from "react-query";
import { getNewsDetailP } from "../api/news";
import { useParams } from "react-router";

function DetailPage() {
  const params = useParams();
  console.log(params.newsId)
   const {isLoading, isError, data} = useQuery('detail',getNewsDetailP(params.newsId))

   if(isLoading){
    return <div>로딩 중 ..</div>
   }

   if(isError){
    return <div>에러가 발생했습니다!</div>
   }

   console.log(data)

  return (
    <div>
      <Progessbar title={data.data.data.title}/>
      <Post data={data.data.data}/>
      <Subscribe />
      <MiniBenner />
    </div>
  );
}

export default DetailPage;
