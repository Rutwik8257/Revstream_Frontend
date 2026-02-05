export function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

let token = localStorage.getItem("token");
export default function AddMoney({ addAmountValue }) {
  //sample Token please take the token from the localstorage
  //   const token =
  //     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcm9udGVuZEBnbWFpbC5jb20iLCJ1c2VySWQiOjEsImlhdCI6MTc2OTA5ODA5NiwiZXhwIjoxNzcwMDk4MDk2fQ.OeiIvCjErZcwl4YhY6WvOt6rCjdTUpLjFcG4iukmyDWKCg_jDmtVv0Kpfd2_PGN9r5BEuzWYKd81MhlTs8mLQQ";

  const addMoney = async (value) => {
    const amount = value;
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const orderRes = await fetch(
      "http://localhost:8080/api/wallet/order-add-money",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount }),
      },
    );

    const order = await orderRes.json();
    console.log("Order from backend:", order);

    const options = {
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      name: "Wallet Top-up",
      description: "Add money to wallet",
      order_id: order.orderId,

      handler: async function (response) {
        console.log("Payment success:", response);

        await fetch("http://localhost:8080/api/wallet/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            amount: amount,
          }),
        });

        alert("Money added successfully!");
      },

      prefill: {
        email: "user@example.com",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={() => addMoney(addAmountValue)}
      style={{
        padding: "10px 20px",
        background: "#4CAF50",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      Add
    </button>
  );
}
