"use server";
import PaystackPop from "@paystack/inline-js";

export const handlePayment = (email, amount) => {
  const handler = PaystackPop.setup({
    key: "pk_test_f4045c5e663ea23e0d8a49572114bdd294b45a41",
    email,
    amount: amount * 100,
    onClose: () => {
      alert("Transaction cancelled");
    },
    callback: function (response) {
      console.log("response from callback", response);
      if (response.status === "success") {
        window.location.href = `/products?reference=${response.reference}`;
      } else return alert("An error occured during transaction");
    },
  });
  handler.openIframe();
};

// export const handlePayment = (email, amount) => {
//   const;
// };
