import { Table } from "..";

const employeeFieldsTable = [
  { label: "First Name", param: "firstName" },
  { label: "Last Name", param: "lastName", type: "string" },
];
function App() {
  return (
    <>
      <Table fields={employeeFieldsTable} datas={[]} />
    </>
  );
}

export default App;
