import { api } from "@/lib/axios";

interface GetMonthCancelledOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCancelledOrdersAmount() {
  const response = await api.get<GetMonthCancelledOrdersAmountResponse>(
    "/metrics/month-cancelled-orders-amount",
  );

  return response.data;
}
