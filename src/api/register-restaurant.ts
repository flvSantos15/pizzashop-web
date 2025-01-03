import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post("/restaurant", {
    email,
    managerName,
    phone,
    restaurantName,
  });
}
