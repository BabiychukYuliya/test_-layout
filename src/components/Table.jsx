import { Input, Table } from "antd";

import { useState } from "react";

const activeStyle = {
  color: "#008767",
  borderRadius: 4,
  border: "1px solid",
  borderColor: "#00B087",
  backgroundColor: "rgba(22, 192, 152, 0.38)",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4 12",
  width: 84,
};

const inactiveStyle = {
  color: "#DF0404",
  borderRadius: 4,
  border: "1px solid",
  borderColor: "#DF0404",
  backgroundColor: "#FFC5C5",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4 12",
  width: 84,
};

const data = [
  {
    key: "1",
    Customer: "Jane Cooper",
    Company: "Microsoft",
    Phone: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Active",
  },

  {
    key: "2",
    Customer: "Floyd Miles",
    Company: "Yahoo",
    Phone: "(205) 555-0100",
    Email: "floyd@yahoo.com",
    Country: "Kiribati",
    Status: "Inactive",
  },
  {
    key: "3",
    Customer: "Ronald Richards",
    Company: "Adobe",
    Phone: "(302) 555-0107",
    Email: "ronald@adobe.com",
    Country: "Israel",
    Status: "Inactive",
  },
  {
    key: "4",
    Customer: "Marvin McKinney",
    Company: "Tesla",
    Phone: "(252) 555-0126",
    Email: "marvin@tesla.com",
    Country: "Iran",
    Status: "Active",
  },
  {
    key: "5",
    Customer: "Jerome Bell",
    Company: "Google",
    Phone: "(629) 555-0129",
    Email: "jerome@google.com",
    Country: "Réunion",
    Status: "Active",
  },
  {
    key: "6",
    Customer: "Kathryn Murphy",
    Company: "Microsoft",
    Phone: "(406) 555-0120",
    Email: "kathryn@microsoft.com",
    Country: "Curaçao",
    Status: "Active",
  },
  {
    key: "7",
    Customer: "Jacob Jones",
    Company: "Yahoo",
    Phone: "(208) 555-0112",
    Email: "jacob@yahoo.com",
    Country: "Brazil",
    Status: "Active",
  },
  {
    key: "8",
    Customer: "Kristin Watson",
    Company: "Facebook",
    Phone: "(704) 555-0127",
    Email: "kristin@facebook.com",
    Country: "Åland Islands",
    Status: "Inactive",
  },
];
const TableInfo = () => {
  const [searchedText, setSearchedText] = useState("");

  return (
    <>
      <Input.Search
        placeholder="Search here..."
        onSearch={(value) => setSearchedText(value)}
      />
      <Table
        dataSource={data.filter(
          (item) =>
            (searchedText === "" ||
              item.Status.toLowerCase().includes(searchedText.toLowerCase())) &&
            (searchedText.toLowerCase() === "active"
              ? item.Status.toLowerCase() === "active"
              : true) &&
            (searchedText.toLowerCase() === "inactive"
              ? item.Status.toLowerCase() === "inactive"
              : true)
        )}
        columns={[
          {
            title: "Customer Name",
            dataIndex: "Customer",
            key: "Customer",
          },
          {
            title: "Company",
            dataIndex: "Company",
            key: "Company",
          },
          {
            title: "Phone Number",
            dataIndex: "Phone",
            key: "Phone",
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
            filters: [
              { text: "Active", value: "Active" },
              { text: "Inactive", value: "Inactive" },
            ],
            onFilter: (value, record) => record.Status.includes(value),
            render: (text) => {
              if (text === "Active") {
                return <span style={activeStyle}>{text}</span>;
              } else if (text === "Inactive") {
                return <span style={inactiveStyle}>{text}</span>;
              }
              return text;
            },
          },
        ]}
        pagination={{
          pageSize: "8",
        }}
      />
    </>
  );
};
export default TableInfo;
