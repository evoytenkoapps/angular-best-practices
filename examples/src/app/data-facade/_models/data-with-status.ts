import { StatusData } from './status-data';

export interface DataWithStatus<T> {
  data: T;
  status: StatusData;
}
