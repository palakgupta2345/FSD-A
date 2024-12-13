import MoviesList from "./MoviesList";

export const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: "black",
         color: "white",
         textAlign: "center",
         fontSize: "40px"
      }}>Netflix clone app</h1>
      <MoviesList/>

    </div>
  );
};


export default App;
