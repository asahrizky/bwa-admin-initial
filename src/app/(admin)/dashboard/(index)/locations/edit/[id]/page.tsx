import React from "react";
import { GetCategoryById } from "../../lib/data";
import { redirect } from "next/navigation";
import FormCategory from "../../_components/form-category";

type Iparams = {
  id: string;
};

interface EditPageProp {
  params: Iparams;
}
export default async function EditPage({ params }: EditPageProp) {
  const data = await GetCategoryById(params.id);

  if (!data) {
    return redirect("/dashboard/categories");
  }
  console.log(data);
  return <FormCategory type="Edit" data={data} />;
}
