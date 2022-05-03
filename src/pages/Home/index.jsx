// vitals
import React from 'react';

//components
import NavBar from '../../components/NavBar';

// syles
import HomePageStyled from './styles';

function Home() {
  return (
    <HomePageStyled id="homepage">
      <NavBar/>
      <article>
        <h1>Hi, I'm Álvaro!</h1>
        <p>
          Alguma coisa sobre mim, mais alguma coisas sobre mim,
          mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim,
          mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim, mais alguma coisas sobre mim,
        </p>
        <aside>Uma foto minha</aside>
      </article>
    </HomePageStyled>
  )
}   

export default Home;
