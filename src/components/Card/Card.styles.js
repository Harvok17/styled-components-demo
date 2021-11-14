import styled from "styled-components/macro";
import DarkImage from "assets/amagi_white.png";
import LightImage from "assets/amagi_black.png";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.text};
  width: 400px;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  transition: all 700ms cubic-bezier(0.5, 0, 0.5, 1);
`;

export const Image = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 5px;
  background-image: url(${({ mode }) =>
    mode === "light" ? LightImage : DarkImage});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  transition: all 700ms cubic-bezier(0.5, 0, 0.5, 1);
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
