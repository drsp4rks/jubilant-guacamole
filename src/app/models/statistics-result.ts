export interface StatisticsResult {
  get: string;
  parameters: [];
  errors: [];
  results: number;
  response: StatisticsResponse[];
}

export interface StatisticsResponse {
  cases: Cases;
  continent: string;
  country: string;
  day: Date;
  deaths: Deaths;
  population: number;
  tests: Tests;
  time: Date;
}

export interface Cases {
  active: number;
  critical: number;
  new: string;
  recovered: number;
  total: number;
}

export interface Deaths {
  new: string;
  total: number;
}

export interface Tests {
  total: number;
}
