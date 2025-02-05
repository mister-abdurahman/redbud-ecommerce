import { ICategory } from "@/lib/types";
import Link from "next/link";
import React from "react";

function CategoryList({ list }: { list: ICategory[] }) {
  return (
    <ul className="hidden sm:flex justify-center gap-5 text-sm px- mb-2">
      {list.map((el, i) => (
        <Link href={`/products?search=${el.name}`} key={i}>
          <li className="bg-primary dark:bg-blue-100 dark:text-secondary text-white rounded-full px-2">
            {el.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default CategoryList;
