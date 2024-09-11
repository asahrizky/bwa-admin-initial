import React from "react";
import { GetBrandById } from "../../lib/data";
import { redirect } from "next/navigation";
import FormBrand from "../../_components/form-brands";
import { Tedit } from "@/types";

type Tparams = {
  id: string;
};

export default async function EditPage({ params }: Tedit) {
  console.log(params.id);
  const data = await GetBrandById(params.id);

  if (!data) {
    return redirect("/dashboard/brands");
  }
  console.log(data);
  return <FormBrand type="Edit" data={data} />;
}
