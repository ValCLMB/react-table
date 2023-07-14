import { Table } from "..";

const employeeFieldsTable = [
  { label: "First Name", param: "firstName" },
  { label: "Last Name", param: "lastName" },
  { label: "Date of birth", param: "dateOfBirth" },
  { label: "Start date", param: "startDate" },
  { label: "Street", param: "street" },
  { label: "City", param: "city" },
  { label: "State", param: "state" },
  { label: "Zip", param: "zip" },
  {
    label: "Department",
    param: "department",
  },
];
function App() {
  return (
    <>
      <Table fields={employeeFieldsTable} datas={[]} />
    </>
  );
}

export default App;
