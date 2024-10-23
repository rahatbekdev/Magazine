import Helmet from "../components/Helmet/Helmet";
import CommoSection from "../components/UI/CommoSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../data/product";
import { useState } from "react";
import ProductList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    console.log(filterValue);

    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
      console.log(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
      console.log(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
      console.log(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
      console.log(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
      console.log(filteredProducts);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    const searchedProducts = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommoSection title="Product" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="search..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1>No produts</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

//!===================================================

// import Helmet from "../components/Helmet/Helmet";
// import CommoSection from "../components/UI/CommoSection";
// import { Container, Row, Col } from "reactstrap";
// import "../styles/shop.css";
// import products from "../data/product";
// import { useState } from "react";
// import ProductList from "../components/UI/ProductsList";

// const Shop = () => {
//   const [productsData, setProductsData] = useState(products);

//   const handleFilter = (event) => {
//     const filterValue = event.target.value;
//     console.log(filterValue);

//     if (filterValue === "all") {
//       setProductsData(products); // Показать все товары
//     } else {
//       const filteredProducts = products.filter(
//         (item) => item.category === filterValue
//       );
//       setProductsData(filteredProducts);
//     }
//   };

//   return (
//     <Helmet title="Shop">
//       <CommoSection title="Product" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="3" md="3">
//               <div className="filter_widget">
//                 <select onChange={handleFilter} defaultValue="all">
//                   <option value="all">Filter By Category</option>
//                   <option value="sofa">Sofa</option>
//                   <option value="mobile">Mobile</option>
//                   <option value="chair">Chair</option>
//                   <option value="watch">Watch</option>
//                   <option value="wireless">Wireless</option>
//                 </select>
//               </div>
//             </Col>
//             <Col lg="3" md="3">
//               <div className="filter_widget">
//                 <select>
//                   <option>Sort By</option>
//                   <option value="ascending">Ascending</option>
//                   <option value="descending">Descending</option>
//                 </select>
//               </div>
//             </Col>
//             <Col lg="6" md="6">
//               <div className="search_box">
//                 <input type="text" placeholder="Search..." />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section>
//         <Container>
//           <Row>
//             {productsData.length === 0 ? (
//               <h1>No products</h1>
//             ) : (
//               <ProductList data={productsData} />
//             )}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Shop;
