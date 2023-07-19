# valclmb-react-table

### Installation

`npm install valclmb-react-table`

### Basic usage

```
import {Table} from "valclmb-react-table"

<Table fields={fields} datas={datas}/>
```

### Props

| Name    | Description                                                                      | Format                             | Exemple                                                                               |
| ------- | -------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------- |
| columns | Columns of the table                                                             | `{label: string, param: string}[]` | `[{label: "First Name", param: "firstName"}, {label: "Last Name", param:"lastName"}]` |
| datas   | Datas of the table, display datas according to the param from the columns object | `{"param":"value"}[]`              | `[{firstName: "John", lastName: "Doe"}, {firstName: "Bob", lastName:"Turner"}]`       |
| range   | range for the page length selection. default : `[10, 25, 50, 100]`               | `number[]`                         | `[5,10,15,20,25,40]`                                                                  |
