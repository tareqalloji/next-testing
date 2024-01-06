import { PostRequest, deleteRequest, getRequest } from "./main";

const BASEURL = `${process.env.NEXT_PUBLIC_BASEURL}`;

export class Orders {
  async Get_Orders() {
    return await getRequest(`${BASEURL}/orders`);
  }
  async Add_order(data: any) {
    return await PostRequest(`${BASEURL}/orders`, data);
  }

  async Delete_Order(id: number) {
    return await deleteRequest(`${BASEURL}/orders/${id}`);
  }
}

export const OrdersInstance = new Orders();
