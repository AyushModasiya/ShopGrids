import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ShopSingle() {
  return (
    <>
      <SBrandCrumbs/>
      <ItemDetails/>
    </>
  );
}

export function SBrandCrumbs(){
    return(
<div>
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Single Product</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-nav">
            <li><Link to={'/'} ><i className="lni lni-home" /> Home</Link></li>
            <li><Link to={'/'} >Shop</Link></li>
            <li>Single Product</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

// export function ItemDetails(){
//   let id = useLocation().pathname.split("/")[2];
//   let [productDetails, setProductDetails] = useState({});
//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProductDetails(data);
//       });
//   }, []);
//     return(
//         <div>
//   <section className="item-details section">
//     <div className="container">
//       <div className="top-area">
//         <div className="row align-items-center">
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="product-images"
//             >
//               <main id="gallery">
//                 <div className="main-img">
//                   <img src={productDetails.images[0]} id="current" alt="#" />
//                 </div>
//               </main>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="product-info">
//               <h2 className="title">{productDetails.title}</h2>
//               <p className="category"><i className="lni lni-tag" /> Drones:<a href="javascript:void(0)">Action
//                   cameras</a></p>
//               <h3 className="price">${productDetails.price}</h3>
//               <p className="info-text">{productDetails.description}</p>
//               <div className="row">
//                 <div className="col-lg-4 col-md-4 col-12">
//                   <p className='py-2'>
//                   <span className="list-inline-item text-dark">
//                       Rating : {productDetails.rating} 
//                     </span>
//                     <ul className="list-inline">
//                     <li className="list-inline-item">
//                       <h6>Brand:</h6>
//                     </li>
//                     <li className="list-inline-item">
//                       <p className="text-muted">
//                         <strong>{productDetails.brand}</strong>
//                       </p>
//                     </li>
//                   </ul>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="product-details-info">
//         <div className="single-block">
//           <div className="row">
//             <div className="col-lg-6 col-12">
//               <div className="info-body custom-responsive-margin">
//                 <h4>Details</h4>
//                 <p>{productDetails.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>

//     );
// }

export function ItemDetails() {
  let id = useLocation().pathname.split("/")[2];
  let [productDetails, setProductDetails] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setLoading(false);
      });
  }, [id]);

  // Render a loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="item-details section">
        <div className="container">
          <div className="top-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-images">
                  <main id="gallery">
                    <div className="main-img">
                      {productDetails.images && productDetails.images.length > 0 ? (
                        <img
                          src={productDetails.images[0]}
                          id="current"
                          alt={productDetails.title}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </div>
                  </main>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-info">
                  <h2 className="title">{productDetails.title}</h2>
                  <p className="category">
                    <i className="lni lni-tag" /> Drones:{" "}
                    <a href="javascript:void(0)">Action cameras</a>
                  </p>
                  <h3 className="price">${productDetails.price}</h3>
                  <p className="info-text">{productDetails.description}</p>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <p className="py-2">
                        <span className="list-inline-item text-dark">
                          Rating : {productDetails.rating}
                        </span>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <h6>Brand:</h6>
                          </li>
                          <li className="list-inline-item">
                            <p className="text-muted">
                              <strong>{productDetails.brand}</strong>
                            </p>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details-info">
            <div className="single-block">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="info-body custom-responsive-margin">
                    <h4>Details</h4>
                    <p>{productDetails.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
