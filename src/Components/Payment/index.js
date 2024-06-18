import React, { useState } from "react";
import { postResponse, putResponse } from "../../services/API/CommonAPI";
import { GlobalContext } from "../../context/States/GlobalState";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

function Payment() {
  const location = useLocation();
  console.log("location", location?.state?.state);
  const [card, setCard] = useState({
    cardno: "",
    cardtype: "far fa-credit-card",
    expirydt: "",
    cvv: "",
  });

  const { Global } = React.useContext(GlobalContext);

  const onChange = (e) => {
    const cartype_new = cardnumber(e.target.value);
    setCard({
      ...card,
      cardno: e.target.value,
    });
  };

  const cardnumber = (inputtxt) => {
    const matches = inputtxt.match(/(\d+)/);
    let cardno = "";
    if (matches) {
      cardno = inputtxt.split(" - ").join("");
    }

    let cardtype1 = card.cardtype;
    const visa = /^(?:4[0-9]{2}?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    const amexpRegEx = /^(?:3[47][0-9]{3})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;

    if (visa.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-visa carddetail-cardtype";
    } else if (mastercardRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-mastercard carddetail-cardtype";
    } else if (amexpRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-amex carddetail-cardtype";
    } else if (discovRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-discover carddetail-cardtype";
    }
    return cardtype1;
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" - ") : value;
  };

  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };

  const onChangeExp = (e) => {
    setCard({
      ...card,
      expirydt: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-0 flex justify-center items-center mt-150">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-4">
        <h2 className="text-3xl font-semibold text-center mb-31">
          Payment Details
        </h2>
        <div className="mb-5">
          <label
            htmlFor="cardno"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            id="cardno"
            type="text"
            className="input border-2 border-gray-200 rounded-md w-full p-1 px-2"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={cc_format(card.cardno)}
            onChange={onChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <div>
            <label
              htmlFor="expirydt"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              id="expirydt"
              type="text"
              className="input border-2 border-gray-200 rounded-md w-full p-1 px-2"
              placeholder="MM/YY"
              onChange={onChangeExp}
              value={expriy_format(card.expirydt)}
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700"
            >
              CVV
            </label>
            <input
              id="cvv"
              type="password"
              className="input border-2 border-gray-200 rounded-md w-full p-1 px-2"
              placeholder="CVV"
              maxLength="3"
              value={card.cvv}
              onChange={(e) => {
                setCard({ ...card, cvv: e.target.value });
              }}
              pattern="[0-9][0-9][0-9]"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
        </div>
        <button
          className="btn-primary w-full py-2 rounded-md text-white bg-slate-800 font-semibold focus:outline-none"
          onClick={async () => {
            let [month, year] = card.expirydt.split("/");
            const result = card.cardno.replace(/[-\s]/g, "");
            let data = {
              uid: Global.login.admin._id,
              cid: "6491212d464d6436e4108d3d",
              number: result,
              expMonth: parseInt(month),
              expYear: parseInt(year),
              cvc: card.cvv,
            };

            const response = await postResponse(`payment/addPayment`, data);
            const resultStatus = await putResponse(
              `updateCart/${location?.state?.state}`,
              {
                status: "completed",
              }
            );
            window.location.href = "/ThankYou";
          }}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Payment;
