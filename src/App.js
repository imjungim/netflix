import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";

//3개 페이지 홈,무비,영화상세페이지
//2. 홈페이지에서 배너를 볼 수 있다.
//3. 3가지섹션의 영화를 볼 수 있다.(popular, top rated, upcoming)
//4. 각영화의 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부
//5.영화를 슬라이드로 넘기면서 다른 영화를 볼 수있다.

//6. 영화디테일 페이지에서 영화에 대한 디테일 정보를 볼 수있다.(포스터,제목,줄거리,점수,인기도등)
//7. trailer를 누르면 예고편을 볼 수있다.
//8. 영화의 리뷰도 볼 수 있다.
//9. 관련된 영화(related movie)도 볼 수있다.
//10. 영화 검색을 할 수 있다.
//11. 영화 정렬 , 필터링 할 수있다.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
