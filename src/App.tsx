import { Table } from "./components/Table/Table";

function App() {
  return (
    <>
      valclmb-react-table
      <Table
        columns={[{ param: "firstName", label: "First Name" }]}
        datas={[]}
      />
    </>
  );
}

export default App;
