import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

interface MonthCancelledOrdersAmountCardProps {}

export function MonthCancelledOrdersAmountCard({}: MonthCancelledOrdersAmountCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentoss (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-sm text-muted-foreground">
          <span className="dark:text-esmerald-400 text-emerald-500">-2%</span>{" "}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
