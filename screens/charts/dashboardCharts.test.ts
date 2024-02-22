// // import React from 'react';
// // import { render, screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// // import DashboardCharts from './dashboardCharts';
// // // import DashboardCharts from './DashboardCharts';

// // describe('DashboardCharts', () => {
// //   const mockChartData = [
// //     { day: '2024-02-17', delivered: 100, failed: 10 },
// //     { day: '2024-02-18', delivered: 120, failed: 8 },
// //     // Add more mock data as needed
// //   ];

// //   const mockState = {
// //     data: {
// //       barChartData: mockChartData,
// //       transactionStatus: 'succeeded',
// //       barChartDataStatus: 'succeeded',
// //       error: null,
// //     },
// //   };

// //   test('renders loading state', () => {
// //     render(<DashboardCharts />, { initialState: { data: { ...mockState.data, transactionStatus: 'loading' } } });
// //     expect(screen.getByText('Loading...')).toBeInTheDocument();
// //   });

// //   test('renders error state', () => {
// //     const errorMessage = 'Failed to fetch data';
// //     render(<DashboardCharts />, { initialState: { data: { ...mockState.data, transactionStatus: 'failed', error: errorMessage } } });
// //     expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
// //   });

// //   test('correctly processes chart data', () => {
// //     render(<DashboardCharts />, { initialState: { data: mockState.data } });
// //     // Add assertions to verify that the correct chart data is displayed
// //   });

// //   test('calculates total delivered amount', () => {
// //     render(<DashboardCharts />, { initialState: { data: mockState.data } });
// //     // Add assertions to verify that the total delivered amount is calculated correctly
// //   });

// //   test('handles select change for larger screens', async () => {
// //     render(<DashboardCharts />);
// //     // Simulate select change for larger screens
// //     const select = screen.getByRole('combobox');
// //     await userEvent.selectOptions(select, 'Last 7 days');
// //     // Add assertions to verify the selected data and active time period
// //   });

// //   test('handles select change for mobile devices', async () => {
// //     global.innerWidth = 500; // Simulate mobile device width
// //     render(<DashboardCharts />);
// //     // Simulate select change for mobile devices
// //     const select = screen.getByRole('combobox');
// //     await userEvent.selectOptions(select, 'Weekly');
// //     // Add assertions to verify the selected data and active time period
// //   });
// // });


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument
// import DashboardCharts from './dashboardCharts';

// describe('DashboardCharts', () => {
//   test('renders loading state', () => {
//     // Render the component with loading state
//     render(<DashboardCharts />, {
//       initialState: {
//         data: {
//           transactionStatus: 'loading',
//           barChartDataStatus: 'succeeded', // Set other status as needed
//           // Include other necessary initial state properties
//         },
//       },
//     });

//     // Assert that the loading message is rendered
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });
// });
