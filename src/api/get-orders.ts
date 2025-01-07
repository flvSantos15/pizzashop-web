import { api } from "@/lib/axios";

export interface GetOrdersParams {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
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

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  });

  return response.data;
}
