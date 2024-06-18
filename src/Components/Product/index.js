import React, { useEffect, useState } from "react";
import { getResponse, postResponse } from "../../services/API/CommonAPI";
import { GlobalContext } from "../../context/States/GlobalState";
import Pagination from "../Pagination";
import ModalWrapper from "../modalWrapper";
export default function ProductPage() {
  const { Global } = React.useContext(GlobalContext);
  const login =
    typeof Global.login == "string" ? JSON.parse(Global.login) : Global.login;
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [desc, setDesc] = useState("");
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
      [id]: !prevExpanded[id],
    }));
  };

  const onSubmit = async (data) => {
    try {
      let { description, productId } = data;

      const response = await postResponse(`/cart/addCart`, {
        uid: Global?.login?.admin?._id,
        pid: productId,
        description,
      });

      if (response.message != "") {
        closeModal();
      } else {
        // Handle error
      }
      return response;
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleSubmit = async (productId) => {
    setCurrentData(productId);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setDesc("");
    setCurrentData(null);
  };

  return (
    <section className="py-12 my-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src="https://media.istockphoto.com/id/1463452333/photo/smart-farming-holding-young-plant-smart-farming-and-precision-agriculture-4-0-agriculture.webp?b=1&s=170667a&w=0&k=20&c=pinmWkLr7rWrZasDdYH8260l76h-og0PtLxZ3b-Yxe0="
                alt="product"
                className="w-full h-64 object-cover object-center rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">
                  {expandedDescriptions[product._id]
                    ? product.description
                    : `${product.description.slice(0, 100)}...`}
                  {!expandedDescriptions[product._id] && (
                    <button
                      className="text-[#F7AF24] hover:text-[#F7AF20] font-semibold focus:outline-none"
                      onClick={() => toggleDescription(product._id)}
                    >
                      View More
                    </button>
                  )}
                </p>
              </div>
              <div className="px-4 pb-24">
                <button
                  className="w-full PrimaryButtons text-white font-semibold py-2 rounded focus:outline-none"
                  onClick={() => handleSubmit(product._id)}
                >
                  Send an Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalWrapper
        open={openModal}
        setOpen={() => {
          closeModal();
        }}
        width="max-w-6xl"
        onSubmit={() => {}}
        falseFooter={false}
        modalFooter={
          <>
            <button
              className="outline-btn"
              onClick={() => {
                closeModal();
              }}
            >
              Cancel
            </button>

            <button
              className={"PrimaryButtons"}
              onClick={() => {
                onSubmit({ description: desc, productId: currentData });
              }}
            >
              Submit
            </button>
          </>
        }
      >
        <textarea
          type="text"
          placeholder="Enter your description here..."
          name="description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          className="w-full h-70 p-2 border border-gray-300 rounded mb-3"
        />
      </ModalWrapper>
    </section>
  );
}
