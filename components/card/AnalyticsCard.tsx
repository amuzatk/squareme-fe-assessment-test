import React, { useEffect } from 'react';
import styles from "../../styles/dashboard/Analytics.module.scss";
import Image from "next/image";
import ClipBoard from '../../public/assets/icons/clipboard.webp'
import { useSelector } from 'react-redux';
import { fetchTransactions, fetchBarChartData } from '../../store/postSlice';
import { RootState } from '../../store';
import { useAppDispatch } from '../../store/hooks';


const AnalyticsCard = () => {

  const dispatch = useAppDispatch();
  const { transactions, transactionStatus, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchTransactions());
    // dispatch(fetchBarChartData());
  }, [dispatch]);

  if (transactionStatus === 'loading' ) {
    return <div>Loading...</div>;
  }

  if (transactionStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  const bankName = transactions[0]?.bankName;
  const accountNumber = transactions[0]?.accountNumber;


  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.left}>
        <p>ACCOUNT DETAILS</p>
        <span className={styles.sterling}>{bankName} </span>
        <h4>{accountNumber} </h4>
        <span className={styles.store}>OGEDENGBE FRUITS STORE </span>
      </div>
      <div className={styles.right}>
      <Image src={ClipBoard} alt='ClipBoard' width={70} height={28} />
      </div>
    </div>
    </div>
  );
};

export default AnalyticsCard;