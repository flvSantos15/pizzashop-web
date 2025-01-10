import { useMemo, useState } from "react";

import colors from "tailwindcss/colors";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { DateRange } from "react-day-picker";
import { subDays } from 'date-fns'

import { getDailyRevenueInPeiriod } from "@/api/get-daily-revenue-in-peiriod";

import { Label } from "@/components/ui/label";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RevenueChartProps {}

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 800 },
  { date: "12/12", revenue: 900 },
  { date: "13/12", revenue: 400 },
  { date: "14/12", revenue: 2300 },
  { date: "15/12", revenue: 800 },
  { date: "16/12", revenue: 640 },
];

export function RevenueChart({}: RevenueChartProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })
  
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period", dateRange],
    queryFn: () => getDailyRevenueInPeiriod({
      from: dateRange?.from,
      to: dateRange?.to
    }),
  });

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100
      }
    })
  }, [dailyRevenueInPeriod])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Periodo</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>

      <CardContent>
        {chartData && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={65}
                tickFormatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
              />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors["violet"]["500"]}
              />

              <CartesianGrid vertical={false} className="stroke-muted" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
