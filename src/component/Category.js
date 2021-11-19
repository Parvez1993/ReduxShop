import React from "react";
import { Button } from "react-bootstrap";
function Category() {
  const handleCategory = (e) => {
    console.log(e.target.name);
  };
  return (
    <div className="text-center">
      <Button
        variant="dark"
        name="all"
        className="m-2"
        size="lg"
        onClick={handleCategory}
      >
        All
      </Button>
      <Button
        variant="dark"
        name="electronics"
        className="m-2"
        size="lg"
        onClick={handleCategory}
      >
        electronics
      </Button>
      <Button
        variant="dark"
        name="jewelery"
        className="m-2"
        size="lg"
        onClick={handleCategory}
      >
        jewelery
      </Button>
      <Button
        variant="dark"
        name="men's clothing"
        className="m-2"
        size="lg"
        onClick={handleCategory}
      >
        men's clothing
      </Button>
      <Button
        variant="dark"
        name="women's clothing"
        className="m-2"
        size="lg"
        onClick={handleCategory}
      >
        women's clothing
      </Button>
    </div>
  );
}

export default Category;
