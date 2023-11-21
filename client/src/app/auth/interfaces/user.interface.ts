export interface User {
  _id:      string;
  username: string;
  name:     string;
  lastname: string;
  email:    string;
  role:     string[];
  isActive: boolean;
  genre:    string;
  phone:    string;
  age:      string;
}
