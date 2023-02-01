import { useEffect } from 'react';
import { useQuery } from 'react-query';

import Home from '$/pages/Home';

import { getDataMarvel } from './services/Marvel/getDataMarvel';
import { globalCss } from './theme';
import { CHARACTER } from './utils/constants';

const Main = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

function App() {
  const { data } = useQuery('characters', () => getDataMarvel.get(CHARACTER));

  useEffect(() => {
    console.log(data, 'dados pegos no react query');
  }, [data]);

  return (
    <div className={Main()}>
      <Home />
    </div>
  );
}

export default App;
