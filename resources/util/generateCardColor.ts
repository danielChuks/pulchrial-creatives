import { CARD_TYPES } from "../enums/card-type";
import { CSSProperties } from 'react'

interface ColorsProps {
  style? : CSSProperties;
}

export function generateCardColor(cardType: CARD_TYPES): ColorsProps {
  switch (cardType) {
    case CARD_TYPES.USERS:
      return {
        style: {
          color: "#df18ff",
          backgroundColor: "#fccfff",
          borderColor: "#e9a6c9",
          borderWidth: "0.2px",
        },
      };
    case CARD_TYPES.ACTIVE_USERS:
      return {
        style: {
          color: "#5718FF",
          backgroundColor: "#d7c9ff",
          borderColor: "#e9a6c9",
          borderWidth: "0.1px",
        },
      };
    case CARD_TYPES.USERS_WITH_LOAN:
      return {
        style: {
          color: "#F55F44",
          backgroundColor: "#edaea3",
          borderColor: "#e9a6c9",
          borderWidth: "0.1px",
        },
      };
    case CARD_TYPES.USERS_WITH_SAVING:
      return {
        style: {
          color: "#FF3366",
          backgroundColor: "#edaea3",
          borderColor: "#e9a6c9",
          borderWidth: "0.1px",
        },
      };
    default:
      return {
        style: {
          color: "#FF3366",
          backgroundColor: "#edaea3",
          borderColor: "#e9a6c9",
          borderWidth: "0.1px",
        },
      };
  }
}
