import { getMonthCancelledOrdersAmount } from "@/api/get-month-cancelled-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

interface MonthCancelledOrdersAmountCardProps {}

export function MonthCancelledOrdersAmountCard({}: MonthCancelledOrdersAmountCardProps) {
  const { data: monthCancelledOrdersAmount } = useQuery({
    queryKey: ["metrics", "month-cancelled-orders-amount"],
    queryFn: getMonthCancelledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentoss (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthCancelledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCancelledOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-sm text-muted-foreground">
              {monthCancelledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCancelledOrdersAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCancelledOrdersAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
