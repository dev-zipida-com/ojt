import React from "react";
import qs from "qs";

function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 쿼리문의 '?'를 없애주는 역할
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 페이지</p>
      {detail && <div>앙뇽</div>}
    </div>
  );
}

export default About;
