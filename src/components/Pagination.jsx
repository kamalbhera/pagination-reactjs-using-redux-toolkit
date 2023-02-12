import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPage,
  lastPage,
  prevPage,
} from "../redux/dataSlice";

const Pagination = () => {
  const page = useSelector((state) => state.user.currPage);
  const totalPage = useSelector((state) => state.user.totalPage);
  
  const dispatch = useDispatch();

  let bgc = "";
  if (page === 1) {
    bgc = "grey";
  } else {
    bgc = "";
  }
  const selectPage = i => {
    if (i >= 1 && i <= totalPage && i !== page) {
      dispatch(fetchPage(i))
    }
  }
  const arr = [...Array(totalPage)]
  return (
    <div className="table-pagination-container">
      <div className="pagination_button">
        <button style={{ color: bgc }} onClick={() => { dispatch(prevPage()) }}>{`<<`}</button>
        {arr.map((_, i) => (
          <button className={page === i + 1 ? 'selected' : ''} key={i} onClick={() => selectPage(i + 1)}>{i + 1}</button>
        ))}
       
        <button className={page === totalPage ? 'disabled' : ''} onClick={() => { dispatch(lastPage())}} >{`>>`}</button>
      </div>
    </div>
  );
};

export default Pagination;
