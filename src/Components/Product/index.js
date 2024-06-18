import React, { useEffect, useState } from "react";
import { getResponse, postResponse } from "../../services/API/CommonAPI";
import { GlobalContext } from "../../context/States/GlobalState";
import Pagination from "../Pagination";

export default function ProductPage() {
  const { Global } = React.useContext(GlobalContext);
  const login = typeof Global.login == "string" ? JSON.parse(Global.login) : Global.login;
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const incrementCount = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1
    }));
  };

  const decrementCount = (id) => {
    setCount((prevCount) => ({
      ...prevCount,
      [id]: Math.max((prevCount[id] || 0) - 1, 0)
    }));
  };

  const getProducts = async () => {
    try {
      const data = await getResponse(`product/getProduct/`);
      setProducts(data?.payload?.product || []);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id]
    }));
  };

  const handleSubmit = async (productId) => {
    const response = await postResponse(
      `/cart/addCart`,
      {
        "uid": Global?.login?._id,
        "product":[
          {
            "pid": productId,
            "quantity": count[productId] || 1
          }
        ]
      }
    );
    if (response.status === "success") {
      // Handle success
    } else {
      // Handle error
    }
    return response;
  };

  return (
    <section className="py-12 my-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src="https://media.istockphoto.com/id/1463452333/photo/smart-farming-holding-young-plant-smart-farming-and-precision-agriculture-4-0-agriculture.webp?b=1&s=170667a&w=0&k=20&c=pinmWkLr7rWrZasDdYH8260l76h-og0PtLxZ3b-Yxe0="
                alt="product"
                className="w-full h-64 object-cover object-center rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">
                  {expandedDescriptions[product._id]
                    ? product.description
                    : `${product.description.slice(0, 100)}...`}
                  {!expandedDescriptions[product._id] && (
                    <button
                      className="text-blue-500 hover:text-blue-600 font-semibold focus:outline-none"
                      onClick={() => toggleDescription(product._id)}
                    >
                      View More
                    </button>
                  )}
                </p>
                <div className="flex items-center justify-between my-3">
                  <p className="text-gray-800 font-semibold text-xl">${product.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <button
                      className="bg-slate-500 text-white font-semibold px-3 py-1 rounded-l focus:outline-none"
                      onClick={() => decrementCount(product._id)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={count[product._id] || 0}
                      onChange={(e) => setCount({ ...count, [product._id]: parseInt(e.target.value) })}
                      className="form-input text-center w-10"
                    />
                    <button
                      className="bg-slate-500 text-white font-semibold px-3 py-1 rounded-r focus:outline-none"
                      onClick={() => incrementCount(product._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded focus:outline-none"
                  onClick={() => handleSubmit(product._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
