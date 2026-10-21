import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CheckoutSuccess from "./CheckoutSuccess";

const Success = async () => {
  return (
    <main>
      <Breadcrumb title={"Sukces"} pages={["zamówienie", "/", "sukces"]} />
      <CheckoutSuccess />
    </main>
  );
};

export default Success;