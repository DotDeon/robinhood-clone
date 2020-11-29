import "./App.css";
import Header from "./Header.js";
import NewsFeed from "./NewsFeed.js";
import Stats from "./Stats.js";
function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <div className="app__header">
        <Header />
      </div>
      {/*Main Body*/}
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
