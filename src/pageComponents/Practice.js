import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const Practice = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const handleClick = async () => {
    const result = await axios.get(
      `https://fakestoreapi.com/products`
    );
    try {
      if (result.status === 200) {
        setData(result.data);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleClick();
  });

  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);


  const totalPages = Math.ceil(data.length/itemsPerPage);


  const handleChange = (newPage)=>{
    setCurrentPage(newPage);
  }

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>
                <img src={ele.image} alt="" className="table_image" />
              </td>
              <td>{ele.title}</td>
              <td>${ele.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination">
        {Array.from({ length: totalPages}).map((_, index)=>(
          <Button onClick={()=>handleChange(index+1)}>{index+1}</Button>
        )) }
      </div>
    
    </>
  );
};

export default Practice;
