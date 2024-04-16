import DataTable from "../../../components/DataTable";
import { rows } from "../../../utils/data/AuditLogsData";
import { columns } from "./AuditLogsColumns";

const AuditLogs = () => {
  return (
    <>
      <DataTable title="Audit Logs" rows={rows} columns={columns} />
    </>
  );
};

export default AuditLogs;
