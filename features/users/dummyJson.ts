import faker from 'faker';

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

const generateTransactionData = (): Transaction[] => {
  const bankNames = ['Providus Bank', 'First Bank', 'GTCO', 'Access Bank', 'Union Bank', 'Jaiz Bank', 'UBA', 'Unity Bank', 'Zenith Bank'];

  const transactions: Transaction[] = [];

  for (let i = 0; i < 50; i++) {
    const randomNumber = faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
    const transactionId = `TR_${randomNumber}`;

    const transaction: Transaction = {
      amount: faker.datatype.number({ min: 1, max: 1000 }),
      transactionId,
      transactionType: faker.random.arrayElement(['Payment', 'Refund', 'Transfer', 'Withdrawal', 'Deposit', 'Request']),
      date: faker.date.past().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString().split(' ')[0], // Get current time
      status: faker.random.arrayElement(['Processed', 'Failed']),
      bankName: faker.random.arrayElement(bankNames),
      accountNumber: faker.finance.account(10)
    };

    transactions.push(transaction);
  }

  return transactions;
};

const generateBarChartData = (): BarChartData[] => {
  const customData: BarChartData[] = [];
  for (let i = 0; i < 31; i++) {
    const date = new Date(2024, 0, i + 1);
    const day = date.toISOString().split('T')[0];
    const delivered = faker.datatype.number({ min: 200, max: 1000 });
    const failed = faker.datatype.number({ min: 0, max: 50 });
    customData.push({ day, delivered, failed });
  }
  return customData;
};

export const mockTableData: Transaction[] = generateTransactionData();

export const mockBarChartData = generateBarChartData();

// Convert to JSON
export const jsonData = JSON.stringify({
  transactions: mockTableData,
  barChartData: mockBarChartData
});

