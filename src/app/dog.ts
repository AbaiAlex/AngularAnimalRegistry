export interface DogToys {
  toy: string;
}
export interface Dog {
  id: number;
  name: string;
  gender?: string;
  type?: string;
  dateOfBirth?: any;
  purebred?: boolean;
  toys?: DogToys[];
}
