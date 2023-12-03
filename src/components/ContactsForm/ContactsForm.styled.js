import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  padding: 80px 0;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`;

export const ContactBlock = styled.div`
  width: 100%;
  height: 738px;
  display: flex;
  gap: 24px;
`;

export const Img = styled.img`
  max-width: 828px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`;

export const Text = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--primary-bluedark);
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;

export const Button = styled.button`
  height: 56px;
  padding: 8px 24px;
  margin-top: 40px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  background-color: var(--background-bluedark);
  color: var(--system-default-10);

  &:hover {
    font-weight: 600;
  }
`;
