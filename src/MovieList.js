import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=8af1272c35921dca7a2a0cba4b65f165"
      )
      .then((res) => {
        const responseTodos = res.data;
        let todosArray = Object.entries(responseTodos);
        setTodos(todosArray);
      });
  }, []);

  return (
    <div>
      <h1> Todo List </h1>
      {
        todos &&
          todos.slice(0, 10).forEach(([key, value]) => {
            console.log(key); // 'one'
            console.log(value); // 1
          })
        // todos.map((todo) => {
        //   const { adult } = todo;
        //   return (
        //     <div>
        //       <h5> {adult} </h5>
        //       <h6> Assigned to user: userId </h6>
        //     </div>
        //   );
        // })
      }
    </div>
  );
};

export default MovieList;
