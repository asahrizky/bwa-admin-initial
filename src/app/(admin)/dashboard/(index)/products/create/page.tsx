import React from "react";
import FormProduct from "../_components/form-product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { getBrands } from "../../brands/lib/data";
import { getCategories } from "../../categories/lib/data";
import { getLocation } from "../../locations/lib/data";

export default async function CreatePage() {
  const brands = await getBrands();
  const categories = await getCategories();
  const locations = await getLocation();

  console.log(brands, categories, locations);
  return (
    <div>
      <FormProduct>
        <div className="grid gap-3">
          <Label htmlFor="category">Category</Label>
          <Select name="category_id">
            <SelectTrigger id="category" aria-label="Select category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="brand">Brand</Label>
          <Select name="brand_id">
            <SelectTrigger id="Brand" aria-label="Select Brand">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="t-shirts">T-Shirts</SelectItem>
              <SelectItem value="hoodies">Hoodies</SelectItem>
              <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="Location">Location</Label>
          <Select name="location_id">
            <SelectTrigger id="location" aria-label="Select location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Indonesia">Indonesia</SelectItem>
              <SelectItem value="America">America</SelectItem>
              <SelectItem value="Singapore">Singapore</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </FormProduct>
    </div>
  );
}
