import { IAvailableLocation } from "./types";
import tate from "@/assets/images/redbud_logo.png";

export const CURRENCY = "₦";
export const LOGO = tate;
export const BRAND_NAME = "redbud";

export const availableLocationsList: IAvailableLocation[] = [
  {
    state: "Abroad",
    locations: [
      {
        address: "Contact Support For Delivery Abroad",
        price: 0,
      },
    ],
  },
  {
    state: "Abia",
    locations: [
      { address: "123 Market Road, Aba", price: 3000 },
      { address: "Near Government House, Umuahia", price: 3500 },
    ],
  },
  {
    state: "Adamawa",
    locations: [
      { address: "Opposite Jimeta Modern Market, Yola", price: 4000 },
      { address: "Near Federal University, Mubi", price: 4500 },
    ],
  },
  {
    state: "Akwa Ibom",
    locations: [
      { address: "Ibom Plaza, Uyo", price: 5000 },
      { address: "Close to University of Uyo, Uyo", price: 4200 },
    ],
  },
  {
    state: "Anambra",
    locations: [
      { address: "Onitsha Main Market, Onitsha", price: 3000 },
      { address: "Near Awka Township Stadium, Awka", price: 3200 },
    ],
  },
  {
    state: "Bauchi",
    locations: [
      { address: "Adjacent Central Market, Bauchi", price: 3500 },
      { address: "Close to ATBU Gate, Bauchi", price: 3300 },
    ],
  },
  {
    state: "Bayelsa",
    locations: [
      { address: "Yenagoa Central Park, Yenagoa", price: 4500 },
      { address: "Near Federal Polytechnic, Ekowe", price: 4000 },
    ],
  },
  {
    state: "Benue",
    locations: [
      { address: "Opposite Benue Links, Makurdi", price: 3700 },
      { address: "Close to Benue State University, Makurdi", price: 3900 },
    ],
  },
  {
    state: "Borno",
    locations: [
      { address: "Maiduguri Monday Market, Maiduguri", price: 4000 },
      { address: "Near University of Maiduguri, Maiduguri", price: 4500 },
    ],
  },
  {
    state: "Cross River",
    locations: [
      { address: "Marian Market, Calabar", price: 3700 },
      { address: "Close to UNICAL Gate, Calabar", price: 4000 },
    ],
  },
  {
    state: "Delta",
    locations: [
      { address: "Warri City Mall, Warri", price: 3200 },
      { address: "Near Delta State University, Abraka", price: 3500 },
    ],
  },
  {
    state: "Ebonyi",
    locations: [
      { address: "Abakaliki Rice Mill, Abakaliki", price: 3300 },
      { address: "Close to Ebonyi State University, Abakaliki", price: 3400 },
    ],
  },
  {
    state: "Edo",
    locations: [
      { address: "Ring Road, Benin City", price: 3700 },
      { address: "Near University of Benin, Ugbowo", price: 4200 },
    ],
  },
  {
    state: "Ekiti",
    locations: [
      { address: "Opposite Fajuyi Park, Ado Ekiti", price: 3000 },
      { address: "Near Ekiti State University, Ado Ekiti", price: 3200 },
    ],
  },
  {
    state: "Enugu",
    locations: [
      { address: "Ogbete Main Market, Enugu", price: 3400 },
      { address: "Close to UNEC Gate, Enugu", price: 3600 },
    ],
  },
  {
    state: "Gombe",
    locations: [
      { address: "Gombe Main Market, Gombe", price: 3000 },
      { address: "Near Federal University, Kashere", price: 3100 },
    ],
  },
  {
    state: "Imo",
    locations: [
      { address: "Eke Ukwu Owerri Market, Owerri", price: 3500 },
      { address: "Close to IMSU Gate, Owerri", price: 3600 },
    ],
  },
  {
    state: "Jigawa",
    locations: [
      { address: "Dutse Market, Dutse", price: 3000 },
      { address: "Near Federal Polytechnic, Dutse", price: 3100 },
    ],
  },
  {
    state: "Kaduna",
    locations: [
      { address: "Central Market, Kaduna", price: 3500 },
      { address: "Near ABU Zaria Gate, Zaria", price: 4000 },
    ],
  },
  {
    state: "Kano",
    locations: [
      { address: "Kano City Market, Kano", price: 3300 },
      { address: "Close to Bayero University, Kano", price: 3500 },
    ],
  },
  {
    state: "Katsina",
    locations: [
      { address: "Katsina Central Market, Katsina", price: 3000 },
      { address: "Near Umaru Musa Yar'adua University, Katsina", price: 3100 },
    ],
  },
  {
    state: "Kebbi",
    locations: [
      { address: "Birnin Kebbi Market, Birnin Kebbi", price: 3000 },
      { address: "Close to Federal Polytechnic, Birnin Kebbi", price: 3200 },
    ],
  },
  {
    state: "Kogi",
    locations: [
      { address: "Opposite Lokoja International Market, Lokoja", price: 3100 },
      { address: "Close to Kogi State University, Anyigba", price: 3300 },
    ],
  },
  {
    state: "Kwara",
    locations: [
      { address: "Challenge Market, Ilorin", price: 3400 },
      { address: "Near University of Ilorin Gate, Ilorin", price: 3500 },
    ],
  },
  {
    state: "Lagos",
    locations: [
      { address: "Opposite Secretariat, Ikeja, Lagos", price: 5500 },
      { address: "Beside Access bank, Iyana Ipaja Bus stop", price: 3500 },
    ],
  },
  {
    state: "Nasarawa",
    locations: [
      { address: "Lafia Modern Market, Lafia", price: 3100 },
      { address: "Near Nasarawa State University, Keffi", price: 3300 },
    ],
  },
  {
    state: "Niger",
    locations: [
      { address: "Central Market, Minna", price: 3000 },
      { address: "Close to FUT Minna Gate, Minna", price: 3100 },
    ],
  },
  {
    state: "Ogun",
    locations: [
      { address: "Opposite Kuto Market, Abeokuta", price: 3000 },
      { address: "Close to FUNAAB Gate, Abeokuta", price: 3200 },
    ],
  },
  {
    state: "Ondo",
    locations: [
      { address: "Oja Oba Market, Akure", price: 3300 },
      { address: "Close to FUTA Gate, Akure", price: 3500 },
    ],
  },
  {
    state: "Osun",
    locations: [
      { address: "Oshogbo Main Market, Oshogbo", price: 3200 },
      { address: "Near Obafemi Awolowo University, Ile-Ife", price: 3400 },
    ],
  },
  {
    state: "Oyo",
    locations: [
      { address: "Dugbe Market, Ibadan", price: 3100 },
      { address: "Close to UI Gate, Ibadan", price: 3500 },
    ],
  },
  {
    state: "Plateau",
    locations: [
      { address: "Terminus Market, Jos", price: 3200 },
      { address: "Close to University of Jos, Jos", price: 3300 },
    ],
  },
  {
    state: "Rivers",
    locations: [
      { address: "Mile One Market, Port Harcourt", price: 3500 },
      { address: "Close to UNIPORT Gate, Port Harcourt", price: 4000 },
    ],
  },
  {
    state: "Sokoto",
    locations: [
      { address: "Sokoto Central Market, Sokoto", price: 3000 },
      { address: "Near UDUS Gate, Sokoto", price: 3200 },
    ],
  },
  {
    state: "Taraba",
    locations: [
      { address: "Jalingo Main Market, Jalingo", price: 3000 },
      { address: "Close to Taraba State University, Jalingo", price: 3100 },
    ],
  },
  {
    state: "Yobe",
    locations: [
      { address: "Damaturu Main Market, Damaturu", price: 3000 },
      { address: "Near Federal Polytechnic, Damaturu", price: 3100 },
    ],
  },
  {
    state: "Zamfara",
    locations: [
      { address: "Gusau Central Market, Gusau", price: 3000 },
      { address: "Near Federal University Gusau, Gusau", price: 3100 },
    ],
  },
  {
    state: "FCT",
    locations: [
      { address: "Wuse Market, Abuja", price: 4000 },
      { address: "Close to University of Abuja, Gwagwalada", price: 4500 },
    ],
  },
];
