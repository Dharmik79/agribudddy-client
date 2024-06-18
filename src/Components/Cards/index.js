import React from "react";
import {
  getResponse,
  postResponse,
  putResponse,
  deleteResponse
} from "../../services/API/CommonAPI";
import { GlobalContext } from "./../../context/States/GlobalState";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Cart() {
  const [state, setState] = React.useState([]);
  const { Global } = React.useContext(GlobalContext);
  const [amount,setAmount]=React.useState(0)
const [products,setProducts]=React.useState([])


  const getProducts = async () => {
    
    const data = await getResponse(
      `cart/getCart?uid=${Global?.login?.admin?._id}`
    );


    setProducts(data?.payload?.card || [])
  setAmount(data?.payload?.total || 0)
  };

 
  const deleteProducts = async (id) => {
    const data = await deleteResponse(`cart/deleteCart?id=${id}`);

    getProducts()
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
        {products.map((cartItem,index) => {
          let productItem=cartItem?.product[0]
          // setAmount(amount+productItem.price)
          return <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {productItem?.pid?.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    {productItem?.pid?.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                   
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={productItem?.quantity}
                      readOnly
                    />
                    
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">Price: ${productItem?.pid?.price}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={()=>{
                         deleteProducts(cartItem._id)
                        // console.log("cardItem",cartItem)
                      }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          
        })}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$ {amount} </p>
          </div>
       
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$ {amount} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button onClick={()=>window.location.href ='/Payment'} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
