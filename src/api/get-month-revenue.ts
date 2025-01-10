import { api } from "@/lib/axios";

interface GetMonthRevenueOrdersAmountResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueOrdersAmountResponse>(
    "/metrics/month-receipt",
  );

  return response.data;
}
