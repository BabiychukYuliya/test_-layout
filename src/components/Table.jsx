import { Table } from "antd";

const columns = [
  {
    title: "Customer Name",
    dataIndex: "Customer Name",
    key: "Customer_Name",
  },
  {
    title: "Company",
    dataIndex: "Company",
    key: "Company",
  },
  {
    title: "Phone Number",
    dataIndex: "Phone Number",
    key: "Phone_Number",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];

const data = [
  {
    key: "1",
    Customer_Name: "Jane Cooper",
    Company: "Microsoft",
    Phone_Number: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Active",
  },

  {
    key: "2",
    Customer_Name: "Floyd Miles",
    Company: "Yahoo",
    Phone_Number: "(205) 555-0100",
    Email: "floyd@yahoo.com",
    Country: "Kiribati",
    Status: "Inactive",
  },
  {
    key: "3",
    Customer_Name: "Ronald Richards",
    Company: "Adobe",
    Phone_Number: "(302) 555-0107",
    Email: "ronald@adobe.com",
    Country: "Israel",
    Status: "Inactive",
  },
  {
    key: "4",
    Customer_Name: "Marvin McKinney",
    Company: "Tesla",
    Phone_Number: "(252) 555-0126",
    Email: "marvin@tesla.com",
    Country: "Iran",
    Status: "Active",
  },
  {
    key: "5",
    Customer_Name: "Jerome Bell",
    Company: "Google",
    Phone_Number: "(629) 555-0129",
    Email: "jerome@google.com",
    Country: "Réunion",
    Status: "Active",
  },
  {
    key: "6",
    Customer_Name: "Kathryn Murphy",
    Company: "Microsoft",
    Phone_Number: "(406) 555-0120",
    Email: "kathryn@microsoft.com",
    Country: "Curaçao",
    Status: "Active",
  },
  {
    key: "7",
    Customer_Name: "Jacob Jones",
    Company: "Yahoo",
    Phone_Number: "(208) 555-0112",
    Email: "jacob@yahoo.com",
    Country: "Brazil",
    Status: "Active",
  },
  {
    key: "8",
    Customer_Name: "Kristin Watson",
    Company: "Facebook",
    Phone_Number: "(704) 555-0127",
    Email: "kristin@facebook.com",
    Country: "Åland Islands",
    Status: "Inactive",
  },
];
const TableInfo = () => {
  return <Table dataSource={data} columns={columns} />;
};
export default TableInfo;