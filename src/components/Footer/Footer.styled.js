import styled from "@emotion/styled";

export const FooterBg = styled.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const TeamBtn = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`;

export const NavFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavFooterBtn = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  position: relative;
  color: var(--system-default-10);

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: var(--system-default-10);
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ContactsFooter = styled.div`
  display: flex;
  gap: 40px;
`;

export const Social = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const SocialItem = styled.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`;

export const TelEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`;

export const Paragraph = styled.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`;
