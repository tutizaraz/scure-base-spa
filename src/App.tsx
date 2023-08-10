import { useState } from "react";
import Decoder from "./Decoder";
import Encoder from "./Encoder";
import HistoryTable, { HistoryEntry } from "./HistoryTable";
import { Flex } from "theme-ui";

function App() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const addHistoryEntry = (entry: HistoryEntry) => {
    if (entry.originalData.trim() === "" || entry.resultData.trim() === "") {
      return;
    }

    setHistory((prevHistory) => [entry, ...prevHistory]);
  };

  return (
    <>
      <header>
        <h1>Scure Base</h1>
      </header>
      <Flex>
        <Encoder
          onEncode={(encodingType, originalData, encodedData) => {
            addHistoryEntry({
              action: "encode",
              encodingType,
              originalData,
              resultData: encodedData,
            });
          }}
        />
        <Decoder
          onDecode={(encodingType, originalData, decodedData) => {
            addHistoryEntry({
              action: "decode",
              encodingType,
              originalData,
              resultData: decodedData,
            });
          }}
        />
      </Flex>

      <HistoryTable history={history} />
    </>
  );
}

export default App;
