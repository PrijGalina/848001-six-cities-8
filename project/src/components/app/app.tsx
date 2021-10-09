import Home from '../home/home';

type AppProps = {
  offersCount: number,
};

function App({offersCount}: AppProps): JSX.Element {
  return <Home offersCount={offersCount}/>;
}

export default App;
