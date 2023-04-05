import { CARD_TYPES } from "../enums/card-type";
import { ColorsProps } from "../interfaces";
export function generateCardColor(cardType: CARD_TYPES): ColorsProps {
  switch (cardType) {
    case CARD_TYPES.USERS:
      return {
        bg: "#fccfff",
        in: "#df18ff",
      };
    case CARD_TYPES.ACTIVE_USERS:
      return {
        bg: "#5718FF",
        in: "#5718FF",
      };
    case CARD_TYPES.USERS_WITH_LOAN:
      return {
        bg: "#F55F44",
        in: "#F55F44",
      };
    case CARD_TYPES.USERS_WITH_SAVING:
      return {
        bg: "#FF3366",
        in: "#FF3366",
      };
    default:
      return {
        bg: "#fccfff",
        in: "#df18ff",
      };
  }
}
