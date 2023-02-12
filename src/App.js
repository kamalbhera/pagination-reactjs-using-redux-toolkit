import "./App.css";
import React, { useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "./redux/dataSlice";

function App() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const abortController = new AbortController()
    dispatch(fetchusers(user.currPage))
    return () => abortController.abort()
  }, [user.currPage, dispatch]);

  return (
    <div className="App">
    <Pagination />
      <Table />
    </div>
  );
}

export default App;
