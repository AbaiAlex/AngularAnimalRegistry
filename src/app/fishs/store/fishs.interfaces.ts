export interface FishListVO {
  id: number;
  name: string;
}

export interface FishVO {
  id: number;
  name: string;
  gender?: 'Female' | 'Male';
  type?: string;
  dateOfBirth?: any;
}
