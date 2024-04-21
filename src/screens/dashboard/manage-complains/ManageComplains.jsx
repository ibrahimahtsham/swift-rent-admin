import DataTable from "../../../components/DataTable";
import { rows } from "../../../utils/data/ComplainsData";
import { getColumns } from "./ComplainsColumns";

const ManageComplains = () => {
  const columns = getColumns();

  return (
    <>
      <DataTable title="Complains" rows={rows} columns={columns} />
    </>
  );
};

export default ManageComplains;
