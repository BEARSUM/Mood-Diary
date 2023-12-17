import styled from "styled-components";
import { flexCenter, flexColumnCenter } from "styles/common";

const Container = styled.div`
  * {
    font-family: "Pretendard", sans-serif;
  }

  .react-calendar {
    width: 480px;
  }

  .react-calendar__navigation__label > span {
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    font-weight: 700;
    color: ${({ theme }) => theme.PALETTE.black};
  }

  .react-calendar__month-view__weekdays {
    abbr {
      color: ${({ theme }) => theme.PALETTE.black};
      font-size: ${({ theme }) => theme.FONT_SIZE.xs};
      font-weight: 600;
    }
  }

  .react-calendar__tile {
    color: ${({ theme }) => theme.PALETTE.black};
    ${flexColumnCenter}
    gap: 8px;
    abbr {
      width: 20px;
      height: 20px;
      ${flexCenter}
      color: ${({ theme }) => theme.PALETTE.black};
      font-size: ${({ theme }) => theme.FONT_SIZE.xs};
      font-weight: 500;
    }
    img {
      width: 20px;
    }
  }

  .react-calendar__tile--active {
    background: transparent;
    abbr {
      color: ${({ theme }) => theme.PALETTE.white};
      font-weight: 600;
      background-color: ${({ theme }) => theme.PALETTE.primary[100]};
      border-radius: 10px;
    }
  }

  .react-calendar__tile--active:enabled:focus {
    background: transparent;
  }

  .react-calendar__tile--now {
    background: transparent;
    abbr {
      color: ${({ theme }) => theme.PALETTE.white};
      font-weight: 600;
      background-color: ${({ theme }) => theme.PALETTE.black};
      border-radius: 10px;
    }
  }
`;

export { Container };
