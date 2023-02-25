import './App.css';
import Filter1 from './components/ecommerce/categoryFilters/filter1';
import UrlState from './context/states/UrlState';

function App() {
  return (<UrlState>
            <Filter1 heading='Social Crawler' />
          </UrlState>
  );
}

export default App;
