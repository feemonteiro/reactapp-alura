import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// function Title(props){
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>  
            <p>loren ip sum....</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>loren ip sum....</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      
      <GitHubCorner projectUrl="https://github.com/feemonteiro" />
    </QuizBackground>
  )
  
  // <Title>My page</Title>
}
