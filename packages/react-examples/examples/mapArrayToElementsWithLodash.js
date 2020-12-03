import map from "lodash/fp/map";

const tableConfig = {
  headers: ["Rank", "Country", "Gold", "Silver", "Bronze", "Total"],
};

const TableHeader = () => (
  <tr>
    {map((header) => (
        <th key={header}>{header}</th>), tableConfig.headers)}</tr>);

export { TableHeader };
