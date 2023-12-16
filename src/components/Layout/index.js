import { useReducer, useRef } from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";

import * as S from "./index.styled";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = { ...action.data };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      const newItem = { ...action.data };
      newState = state.map((it) => (it.id === action.data.id ? newItem : it));
      break;
    }
    default:
      return state;
  }
  return newState;
};

function Layout() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0); //초기화 방지

  const onCreate = (date, title, content, mood) => {
    const newItem = {
      id: dataId.current,
      date: newDate(date).getTime(),
      title,
      content,
      mood,
    };
    dispatch({ type: "CREATE", data: newItem });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
    dataId.current += 1;
  };

  const onEdit = (targetId, date, title, content, mood) => {
    const newItem = {
      id: targetId,
      date: newDate(date).getTime(),
      title,
      content,
      mood,
    };
    dispatch({ type: "EDIT", data: newItem });
  };

  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
}

export default Layout;
