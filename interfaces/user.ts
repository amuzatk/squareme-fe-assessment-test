export type Transaction = {
    amount: number;
    transactionId: string;
    transactionType: string;
    date: string;
    time: string;
    status: string;
    bankName: string;
    accountNumber: string;
  };
  
  export type BarChartData = {
    day: string;
    delivered: number;
    failed: number;
  };
  
  export type Data = {
    transactions: Transaction[];
    barChartData: BarChartData[];
  };
  
//   type MockDataResponse = {
//     data: Data;
//   };
  