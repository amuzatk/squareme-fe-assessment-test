// import React from "react";
// import styles from "../../styles/dashboard/Analytics.module.scss";
// import Image from "next/image";

// interface AnalyticsCardProps {
//   item: {
//     image: string;
//     title: string;
//     amount: string;
//   };
// }

// const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ item }) => {
//   const { image, title, amount } = item;

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <Image src={image} alt={`${title} Icon`} width={40} height={40} />
//         <p>{title}</p>
//         <span className={styles.amount}>{amount}</span>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsCard;

import React, { useEffect } from 'react';
import styles from "../../styles/dashboard/Analytics.module.scss";
import Image from "next/image";
import ClipBoard from '../../public/assets/icons/clipboard.webp'
import { BarChartData, Transaction } from "../../interfaces";

import { useSelector } from 'react-redux';
import { fetchTransactions, fetchBarChartData } from '../../store/postSlice';
import { RootState } from '../../store';
import { useAppDispatch } from '../../store/hooks';

// interface AnalyticsCardProps {
//   item: {
//     image: string;
//     title: string;
//     amount: string;
//   };
// }
interface Props {
  mockTableData: Transaction[];
}

const AnalyticsCard: React.FC<Props> = ({mockTableData }) => {

  // ==================================
  const dispatch = useAppDispatch();
  const { transactions, transactionStatus, barChartDataStatus, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchBarChartData());
  }, [dispatch]);

  if (transactionStatus === 'loading' || barChartDataStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (transactionStatus === 'failed' || barChartDataStatus === 'failed') {
    return <div>Error: {error}</div>;
  }


  // ==================================

  const bankName = transactions[0]?.bankName;
  const accountNumber = transactions[0]?.accountNumber;


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ACCOUNT DETAILS</p>
        <span className={styles.sterling}>{bankName} </span>
        <h4>{accountNumber} </h4>
      </div>
      <div className={styles.right}>
      <Image src={ClipBoard} alt='ClipBoard' width={70} height={28} />
      </div>
    </div>
  );
};

export default AnalyticsCard;