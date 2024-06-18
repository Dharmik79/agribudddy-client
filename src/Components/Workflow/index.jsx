import React, { useState, useEffect } from "react";
import { getResponse, postResponse } from "../../services/API/CommonAPI";
import { GlobalContext } from "../../context/States/GlobalState";
import { Link, useHistory } from "react-router-dom";

const ProductTable = () => {
  const [data, setData] = useState([]);

  const history = useHistory();
  const getData = async () => {
    try {
      const data = await getResponse(`cart/getCart?status=PendAppr`);
      console.log("Data", data);
      setData(data?.payload?.data || []);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className=" bg-gray-100 mt-150">
      <div className="container mx-auto px-4 py-20">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Name
                </th>
                <th scope="col" class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Description
                </th>
                <th scope="col" class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Status
                </th>
                <th scope="col" class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((value) => {
                return (
                  <tr class="border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {value?.pid?.name}
                    </th>

                    <td class="px-6 py-4 ">{value?.pid?.description}</td>
                    <td class="px-6 py-4">{value?.status}</td>
                    <td class="px-6 py-4">
                      <button
                        onClick={() => {
                          history.push(`/payment`, { state: value?._id });
                        }}
                      >
                        Make Payment
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductTable;
