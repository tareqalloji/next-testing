import { PostRequest, getRequest } from "./main";

const BASEURL = `${process.env.NEXT_PUBLIC_BASEURL}`;

export class Products {
  async Get_Products() {
    return await getRequest(`${BASEURL}/products`);
  }
  async Get_Products_By_Id(id: number) {
    return await getRequest(`${BASEURL}/products/${id}`);
  }

  async Get_Products_By_Filter(data: any) {
    return await PostRequest(`${BASEURL}/filter-products`, data);
  }

  async Add_Rate(data: any) {
    return await PostRequest(`${BASEURL}/rate`, data);
  }

  async Add_Comment(data: any) {
    return await PostRequest(`${BASEURL}/comment`, data);
  }
}

export const ProductsInstance = new Products();
