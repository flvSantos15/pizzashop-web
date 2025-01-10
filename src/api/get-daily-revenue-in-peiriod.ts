import { api } from "@/lib/axios";

interface GetDailyRevenueInPeiriodQuery {
  from?: Date
  to?: Date
}

type GetDailyRevenueInPeiriodResponse = {
  date: string;
  receipt: number;
}[];

export async function getDailyRevenueInPeiriod({ from, to }: GetDailyRevenueInPeiriodQuery) {
  const response = await api.get<GetDailyRevenueInPeiriodResponse>(
    "/metrics/daily-receipt-in-period",
    {
      params: {
        from,
        to
      }
    }
  );

  return response.data;
}
