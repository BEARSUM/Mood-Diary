import PostItem from "./PostItem";
import * as S from "./index.styled";

const Mypage = () => {
  //임시 데이터
  const dummyDiaryList = [
    {
      id: 1,
      title: "떡볶이는 맛있어",
      content: "달달하고 매콤~한 맛있는 떡볶이.",
      mood: 5,
      createdAt: new Date().getTime(),
    },
    {
      id: 2,
      title: "라면은 맛있어",
      content: "달달하고 매콤~한 맛있는 라면은",
      mood: 3,
      createdAt: new Date().getTime(),
    },
    {
      id: 3,
      title: "치킨는 맛있어",
      content: "달달하고 매콤~한 맛있는 치킨.",
      mood: 2,
      createdAt: new Date().getTime(),
    },
  ];
  return (
    <S.Container>
      <S.Header>
        <div>일기 관리</div>
        <S.Number>
          총 <span>{dummyDiaryList.length}</span>개의 일기
        </S.Number>
      </S.Header>
      <S.PostList>
        {dummyDiaryList.map((el) => (
          <PostItem key={el.id} diary={el} />
        ))}
      </S.PostList>
    </S.Container>
  );
};

export default Mypage;
