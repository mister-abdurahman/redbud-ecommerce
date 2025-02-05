import React, { ReactNode } from "react";
import BackButton from "./BackButton";

function PageContainer({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle?: string;
}) {
  return (
    <div className="p-4 sm:p-8">
      <BackButton />
      {pageTitle && (
        <h1 className="bg-primary rounded-full text-center text-white mt-3 py-2 uppercase">
          {pageTitle}
        </h1>
      )}
      {children}
    </div>
  );
}

export default PageContainer;
