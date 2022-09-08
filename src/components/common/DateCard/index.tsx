import { HTMLAttributes } from "react";
import {
  DateCardContentText,
  DateCardTitleText,
  StyledDateCard,
} from "components/common/DateCard/styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  dateCardTitle: string;
  dateCardContent: string;
  isToday: boolean;
  isSelected: boolean;
}

function DateCard({ dateCardTitle, dateCardContent, isToday, isSelected, ...props }: Props) {
  return (
    <StyledDateCard isSelected={isSelected} {...props}>
      <DateCardTitleText isSelected={isSelected} isToday={isToday}>
        {dateCardTitle}
      </DateCardTitleText>
      <DateCardContentText isSelected={isSelected}>{dateCardContent}</DateCardContentText>
    </StyledDateCard>
  );
}

export default DateCard;
