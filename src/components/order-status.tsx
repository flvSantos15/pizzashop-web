export type TOrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: TOrderStatus;
}

const orderStatusMap: Record<TOrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Em preparo",
  delivering: "Em entrega",
  delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === "canceled" && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === "delivered" && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {["processing", "delivering"].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
