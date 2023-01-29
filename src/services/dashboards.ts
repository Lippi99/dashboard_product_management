import { getAPIClient } from "./axios";

interface Products {
  _id: string;
  quantity: number;
  price: number;
}

interface ProductByMonth {
  _id: {
    month: number;
    year: number;
  };
  total: number;
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

export const allProductsInMonths = async () => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.get<ProductByMonth[]>(
      "/api/dashboards/allyear"
    );
    return response.data;
  } catch (error) {}
};
