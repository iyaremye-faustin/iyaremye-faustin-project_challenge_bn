export type TCreateOrderType = {
  farmer_id: number;
  land_size_acre: number;
  total_amount: number;
};

export type TCreateOrderItemType = {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
};
