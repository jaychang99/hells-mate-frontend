import Image from "next/image";
import styled from "@emotion/styled";

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
`;

export const ProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ProfilePictureBase = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.primary700};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileNameText = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black500};
`;
