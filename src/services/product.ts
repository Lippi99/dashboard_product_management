import { getAPIClient } from "./axios";

interface ProductProps {
  id?: string;
  quantity: number;
  productName: string;
  price: number;
  profit?: number;
  materialPrice: number;
  commission: number;
  labor: number;
}

interface Product {
  count: number;
  data: ProductProps[];
}

export const createProduct = async (data: Product) => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.post<Product>("/api/product/create", data);
    return response.data;
  } catch (error) {}
};

export const getAllProducts = async (
  page: number,
  pageSize: number,
  startDate: string,
  endDate: string
) => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.get<Product>(
      `/api/products?page=${page}&size=${pageSize}&startDate=${startDate}&endDate=${endDate}`
    );
    return response.data;
  } catch (error) {}
};

export const updateProduct = async (id: string, data: ProductProps) => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.patch<Product>(`api/product/${id}`, data);
    return response.data;
  } catch (error) {}
};

export const deleteProduct = async (id: string) => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.delete<Product>(`/api/product/${id}`);
    return response.data;
  } catch (error) {}
};

export const getWidgetProduct = async () => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.get<ProductProps>("/api/product/total");
    return response.data;
  } catch (error) {}
};
