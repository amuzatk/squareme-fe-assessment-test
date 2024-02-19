import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../../../../styles/dashboard/Tabs.module.scss';
import { currencyFormatter } from '../../../../helpers';
import Image from 'next/image';

interface TabsComponentProps {
  items: { label: string; content: React.ReactNode }[];
  onSelect: (index: number) => void;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ items, onSelect,}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleTabSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(index);
  };

  return (
    <div className={styles.container}>
      <Tabs className={styles.tabs} selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className={styles.tab}>
          {items.map((item, index) => (
            <Tab key={index} className={index === selectedIndex ? styles.activeTab : ''}>
              {item.label}
            </Tab>
          ))}
        </TabList>
        {/* {items.map((item, index) => (
          // tbr
          <TabPanel key={index}>
            {item.content}
          </TabPanel>
        ))} */}
      </Tabs>


    </div>
  );
};

export default TabsComponent;


