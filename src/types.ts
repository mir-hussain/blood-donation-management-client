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

export interface IHospital {
  id: number;
  name: string;
  address: string;
  city: string;
  branch: string | null;
  contact_number: string;
  created_by_admin_id: number;
  created_at: string;
}

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

export interface IResponse {
  request_donation_id: number;
  donation_id: number;
  user_id: number;
  user_name: string;
  user_email: string;
  user_phone: string;
  hospital_id: string | null;
  blood_type: string;
  donation_date: string;
  quantity_donated: number;
}
