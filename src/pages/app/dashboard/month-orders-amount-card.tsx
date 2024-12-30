import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

interface MonthOrdersAmountCardProps {}

export function MonthOrdersAmountCard({}: MonthOrdersAmountCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mes)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-sm text-muted-foreground">
          <span className="dark:text-esmerald-400 text-emerald-500">+6%</span>{" "}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
