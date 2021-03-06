export interface CatListVO {
  id: number;
  name: string;
}

export interface CatVO {
  id: number;
  name: string;
  gender?: 'Female' | 'Male' | 'Male (neutered)';
  type?: string;
  dateOfBirth?: any;
  purebred?: boolean;
}
