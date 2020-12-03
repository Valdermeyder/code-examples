const tableConfig = {
  headers: ["Rank", "Country", "Gold", "Silver", "Bronze", "Total"],
};

const TableHeader = () => (
  <tr>
    {tableConfig.headers.map((header) => (
      <th key={header}>{header}</th>
    ))}
  </tr>
);

export { TableHeader };
