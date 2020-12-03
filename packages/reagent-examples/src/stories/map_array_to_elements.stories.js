const { TableHeader } = examples.core;

export default {
  title: "Examples/Map Array to Elements",
  component: TableHeader,
};

export const TableHeaderStatic = () => (
  <table>
    <thead>
      <TableHeader />
    </thead>
  </table>
);
