import React, { useEffect, useState } from "react";
import { Table, Spin, Alert, Checkbox } from "antd";
import styles from '../../styles/dashboard/UserInfo3.module.scss';
import moment from "moment";
import Paginate from "./pagination";
import { useSelector } from 'react-redux';
import { fetchTransactions } from '../../store/postSlice';
import { RootState } from '../../store';
import { useAppDispatch } from '../../store/hooks';
import TransactionCard from "./TransactionCard";
import { Transaction } from "../../interfaces/user";

const TransactionPage = () => {
  const [filteredData, setFilteredData] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { transactions, transactionStatus, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchTransactions());
    setFilteredData(transactions);
    setIsLoading(false);
  }, [dispatch]);

  if (transactionStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (transactionStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    // Logic to update state for all columns based on checked value
    setSelectAll(checked);
  };

const handlePageChange = (page: React.SetStateAction<number>, pageSize: any) => {
    setCurrentPage(page);
    setPageSize(pageSize || 10);
  };


  const realData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (isLoading) return <Spin size="large" />;
  if (isError) return <Alert message="Error fetching data" type="error" />;
const columns = [
    {
        title: <Checkbox checked={selectAll} />,
        dataIndex: "selection",
        key: "selection",
        render: () => <Checkbox />,
    },
{
    title: (
        <span className={styles.columnTitle}>Amount</span>
    ),
    dataIndex: "amount",
    key: "amount",
    className: styles.naira,
    render: (amount: number) => <span>&#8358;{amount}</span>,
},
    {
        title: (
   <span className={styles.columnTitle}>Transaction ID</span>
        ),
        dataIndex: "transactionId",
        key: "transactionId",
        className: styles.amount,
      },
    {
        title: (
   <span className={styles.columnTitle}>Transaction ID</span>
        ),
        dataIndex: "transactionType",
        key: "transactionType",
        className: styles.amount,
      },
    {
        title: (
   <span className={styles.columnTitle}>Date</span>
        ),
        dataIndex: "date",
        key: "date",
        render: (date: string) => moment(date).format('MMM DD, YYYY'),
        className: styles.amount,
      },
    {
        title: (
   <span className={styles.columnTitle}>Time</span>
        ),
        dataIndex: "time",
        key: "time",
        render: (time: string) => moment(time, 'hh:mm:ss').format('hh:mmA'),
        className: styles.amount,
      },
    {
        title: (
            <span className={styles.columnTitle}>Status</span>
        ),
        dataIndex: "status",
        key: "status",
        className: styles.status,
        render: (status: string) => {
            let statusStyle: React.CSSProperties = {};
            let circleStyle: React.CSSProperties = {
                borderRadius: "50%",
                marginRight: "4px",
            };

            if (status === "Failed") {
                statusStyle = {
                    color: "#E4033B",
                    background: "#FEECEE",
                    borderRadius: "100px",
                    padding: "4px 25px",
                    height: "30px",
                    maxWidth:"100px",
                    border: "1px solid #F14156"
                };
            } else if (status === "Processed") {
                statusStyle = {
                    color: "#144909",
                    border: "1px solid #5DC090",
                    borderRadius: "100px",
                    padding: "4px 10px",
                    background: "#EFFDED",
                    height: "30px",
                    maxWidth:"100px",


                };
            }

            return (
                <span style={statusStyle}>
                    <span style={circleStyle}>●</span>
                    {status}
                </span>
            );
        },
    },
];

  return (
    <>    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Table dataSource={realData} columns={columns} pagination={false} />
      </div>
      <div>
        <Paginate 
          current={currentPage} 
          pageSize={pageSize} 
          total={filteredData.length} 
          onChange={handlePageChange}
        />
      </div>
    </div>
    <div className={styles.header}>
      <h1>Transactions</h1>
    </div>
    {/* mobile screens */}
    <TransactionCard/>
    </>
  );
};

export default TransactionPage;