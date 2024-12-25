export interface IRequest {
  id: number;
  user_id: number;
  blood_type_requested: string;
  hospital_id: string | null;
  quantity_requested: number;
  status: string;
  request_date: string;
  is_public_request: number;
  location: string;
  city: string;
  created_at: string;
  user: string;
}
