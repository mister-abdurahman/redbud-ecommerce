import Image from "next/image";
import React, { useContext, useState } from "react";
import img from "@/assets/images/garlic.png";
import { Button } from "@/components/ui/button";
import CartTable from "@/ui/Cart/CartTable";
import { Input } from "@/components/ui/input";
import { SelectInput } from "@/components/SelectInput";
import { RadioGroupDemo } from "@/components/RadioGroupItem";
import { useRouter } from "next/navigation";
import { MyContext } from "@/store/store";
import CartList from "@/ui/Cart/CartList";
import ProductCalculation from "@/ui/Cart/ProductCalculation";
import { fetchCountries, getCountries } from "@/services/apiThirdParties";
import PageContainer from "@/components/PageContainer";

async function page() {
  return (
    <PageContainer pageTitle="CART">
      <div className="p-3 sm:p-8 border-b border-gray-500 pb-6">
        <CartList />
        <CartTable />
      </div>
      <div className="w-full mx-auto">
        <Button className="my-6 mx-4 w-fit">Continue Shopping</Button>
      </div>
      <ProductCalculation />
    </PageContainer>
  );
}

export default page;

// export function CartItem() {
//   const { cart, adjustQuantityOfAProduct, removeItemFromCart } = useContext(MyContext);

//   return (
//     <div>
//       <div className="flex sm:hidden gap-7 items-center p-4">
//         <Image src={img} alt="product name" className="w-1/3" />
//         <div className="flex flex-col">
//           <p>Omega-3 Fish oil softgel x5</p>
//           <div>
//             <span className="text-gray-600">Price:</span>{" "}
//             <span className="font-semibold">#45,000</span>
//           </div>
//           <div className="flex gap-2">
//             <span className="flex gap-8 items-center border border-gray-500 px-4 py-1">
//               <p>-</p>
//               <p>{unit}</p>
//               <p>+</p>
//             </span>
//             <Button>X</Button>
//           </div>
//           <div>
//             <span className="text-gray-600">Total:</span>{" "}
//             <span className="font-semibold">#45,000</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
