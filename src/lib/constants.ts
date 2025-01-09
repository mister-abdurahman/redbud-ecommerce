import { IAvailableLocation } from "./types";
import tate from "@/assets/images/redbud_logo.png";

export const CURRENCY = "₦";
export const LOGO = tate;
export const availableLocationsList: IAvailableLocation[] = [
  {
    state: "Edo",
    locations: [
      {
        address:
          "Within Benin City1 (New Benin, Ringroad, Iyaro, Ugbowo - Before Maingate & Maingate, Ekenwan before campus",
        price: 4500,
      },
      {
        address:
          "Within Benin city3 (Upper Siluko, Ekwnwan Barracks, All Bypass, Ogheghe, Ahor",
        price: 3500,
      },
    ],
  },
  {
    state: "Lagos",
    locations: [
      { address: "Opposite Secretariat, Ikeja, Lagos", price: 5500 },
      { address: "Beside Access bank, Iyana Ipaja Bus stop", price: 3500 },
    ],
  },
];
