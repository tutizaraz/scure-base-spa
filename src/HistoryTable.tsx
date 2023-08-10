import styled from "styled-components";

export interface HistoryEntry {
  action: "encode" | "decode";
  encodingType: string;
  originalData: string;
  resultData: string;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Tahoma", sans-serif;
  background-color: #f5f5f5;
  border: 1px solid #b0b0b0;
`;

const StyledHeaderCell = styled.th`
  background-color: #b6bdd2;
  border: 1px solid #7b849e;
  padding: 5px 10px;
  font-weight: bold;
  text-align: left;
`;

const StyledCell = styled.td`
  border: 1px solid #b0b0b0;
  padding: 5px 10px;
`;

const EmptyStateRow = styled.tr`
  text-align: center;
`;

const EmptyStateCell = styled.td`
  border: none;
  padding: 20px;
  color: #888;
`;

const HistoryTable = ({ history }: { history: HistoryEntry[] }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledHeaderCell>Action</StyledHeaderCell>
          <StyledHeaderCell>Encoding Type</StyledHeaderCell>
          <StyledHeaderCell>Original Data</StyledHeaderCell>
          <StyledHeaderCell>Result Data</StyledHeaderCell>
        </tr>
      </thead>
      <tbody>
        {history.length ? (
          history.map((entry, index) => (
            <tr key={index}>
              <StyledCell>{entry.action}</StyledCell>
              <StyledCell>{entry.encodingType}</StyledCell>
              <StyledCell>{entry.originalData}</StyledCell>
              <StyledCell>{entry.resultData}</StyledCell>
            </tr>
          ))
        ) : (
          <EmptyStateRow>
            <EmptyStateCell colSpan={4}>No history available</EmptyStateCell>
          </EmptyStateRow>
        )}
      </tbody>
    </StyledTable>
  );
};

export default HistoryTable;
