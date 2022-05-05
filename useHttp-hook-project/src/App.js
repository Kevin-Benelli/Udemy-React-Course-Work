import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  // const {
  //   isLoading,
  //   error,
  //   sendRequest: fetchTasks,
  // } = useHttp({
  //   url: "https://react-http-ea327-default-rtdb.firebaseio.com/tasks.json",
  //   applyData: transformTasks,
  // });

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // const { isLoading, error, sendRequest: fetchTasks } = httpData; // if we had set useHttp to httpData

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-http-ea327-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
