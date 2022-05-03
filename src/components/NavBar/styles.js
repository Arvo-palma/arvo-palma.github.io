// vitals
import styled from 'styled-components';

const NavBarStyled = styled.nav`
  align-items: center;
  background-color: #4C5B5C;
  display: flex;
  font-family: "Work Sans", sans-serif;
  justify-content: space-between;

  > div {
    display: flex;

    a {
      color: white;
      padding: 1rem 3rem;
      text-decoration: none;
      text-transform: uppercase;
    }
`;

export default NavBarStyled;
