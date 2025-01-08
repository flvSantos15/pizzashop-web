import { api } from "@/lib/axios";

interface CancelOrderParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`);
}
