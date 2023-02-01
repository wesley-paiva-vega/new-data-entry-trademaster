import { styled } from '$/theme';

const Main = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: 250,
  backgroundColor: 'LightCyan',

  h1: {
    padding: 30,
  },
});
const Home = () => {
  return (
    <Main>
      <header>
        <h1>Teste de Performance com React Query</h1>
      </header>

      <div>Cards Of Marvel App</div>
    </Main>
  );
};

export default Home;
