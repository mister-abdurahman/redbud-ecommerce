import PaystackPop from "@paystack/inline-js";

const popup = new PaystackPop();
popup.resumeTransaction("access_code");
