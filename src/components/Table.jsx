import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.loading && <h2>Loading...</h2>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image url</th>
            <th>Description</th>
            <th>Tag Line</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>

        {!user.loading && user.users?.length > 0 ? (
            user?.users?.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.title}</td>
                <td>{ele.thumbnail}</td>
                <td>{ele.description}</td>
                <td>{ele.brand}</td>
                <td>{ele.price}</td>
                <td>{ele.rating}</td>
                <td>{ele.stock}</td>
              </tr>
            ))
        ) : (
          <tr style={{ textAlign:"center",border:"none",marginLeft:"20px" }}>
           <td colSpan={4} style = {{border:"none" }}>No data to display</td> 
          </tr>
        )}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
