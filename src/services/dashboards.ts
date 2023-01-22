import { getAPIClient } from "./axios";

interface Products {
  _id: string;
  quantity: number;
  price: number;
}

export const mostProductsSold = async (startDate: string, endDate: string) => {
  const apiClient = getAPIClient();

  try {
    const response = await apiClient.get<Products[]>(
      `/api/dashboards/filtered?startDate=${startDate}&endDate=${endDate}`
    );

    return response.data;
  } catch (error) {}
};
