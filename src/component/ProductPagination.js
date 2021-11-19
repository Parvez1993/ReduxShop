import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
function ProductPagination({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <nav>
      <Wrapper>
        <div className="buttonContainer">
          <ButtonGroup>
            <Button
              variant="dark"
              onClick={() => {
                prevPage();
              }}
              disabled={currentPage <= 1 ? true : false}
            >
              Previous
            </Button>

            {pageNumbers.map((num, i) => (
              <Button variant="secondary" key={i} onClick={() => paginate(num)}>
                {num}
              </Button>
            ))}

            <Button
              variant="dark"
              onClick={() => {
                nextPage();
              }}
              disabled={currentPage >= pageNumbers.length ? true : false}
            >
              Next
            </Button>
          </ButtonGroup>
        </div>
      </Wrapper>
    </nav>
  );
}

const Wrapper = styled.div`
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
`;

export default ProductPagination;
