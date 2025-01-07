import { api } from "@/lib/axios";

export interface GetOrdersParams {
  pageIndex?: number | null;
}

export interface GetOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    custumerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders({ pageIndex }: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
    },
  });

  return response.data;
}
