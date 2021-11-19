import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { beginProducts, setProducts } from "../redux/action/productActions";
import Category from "./Category";
import ProductPagination from "./ProductPagination";
import ProductPost from "./ProductPost";

function Products() {
  const dispatch = useDispatch();
  const loading = useSelector((item) => item.loading);
  const allProducts = useSelector((item) => item.products);
  console.log(loading);
  console.log(allProducts);

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(beginProducts());
      try {
        const res = await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => dispatch(setProducts(res.data)));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [dispatch]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNum) => setCurrentPage(pageNum);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h2 className="text-center my-5">Products</h2>
      <Category />

      {loading ? (
        <Spinner animation="grow" className="mx-auto" />
      ) : (
        <>
          <ProductPost posts={currentPosts} loading={loading} />
          <ProductPagination
            postsPerPage={postsPerPage}
            totalPosts={allProducts.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}

export default Products;
