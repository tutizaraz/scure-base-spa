import React, { useState } from "react";
import {
  base16,
  base32,
  base64,
  base58,
  utf8,
  hex,
  base64url,
  base32hex,
  base32crockford,
  base58flickr,
  base58xrp,
  base58xmr,
} from "@scure/base";
import { Box } from "theme-ui";
import { EncoderContainer, XPButton, Title, XPTextArea } from "./styles";
import { codings } from "./constants";

const Decoder: React.FC<{
  onDecode: (
    encodingType: string,
    originalData: string,
    decodedData: string
  ) => void;
}> = ({ onDecode }) => {
  const [input, setInput] = useState("");
  const [selectedEncoding, setSelectedEncoding] = useState(codings[0]);
  const [decoded, setDecoded] = useState("");

  const handleEncodingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedEncoding(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const decodeData = () => {
    let decodedData;
    try {
      switch (selectedEncoding) {
        case "base16":
          decodedData = new TextDecoder().decode(base16.decode(input));
          break;
        case "base32":
          decodedData = new TextDecoder().decode(base32.decode(input));
          break;
        case "base32hex":
          decodedData = new TextDecoder().decode(base32hex.decode(input));
          break;
        case "base32crockford":
          decodedData = new TextDecoder().decode(base32crockford.decode(input));
          break;
        case "base64":
          decodedData = new TextDecoder().decode(base64.decode(input));
          break;
        case "base64url":
          decodedData = new TextDecoder().decode(base64url.decode(input));
          break;
        case "base58":
          decodedData = new TextDecoder().decode(base58.decode(input));
          break;
        case "base58flickr":
          decodedData = new TextDecoder().decode(base58flickr.decode(input));
          break;
        case "base58xrp":
          decodedData = new TextDecoder().decode(base58xrp.decode(input));
          break;
        case "base58xmr":
          decodedData = new TextDecoder().decode(base58xmr.decode(input));
          break;
        case "utf8":
          decodedData = new TextDecoder().decode(utf8.decode(input));
          break;
        case "hex":
          decodedData = new TextDecoder().decode(hex.decode(input));
          break;
        default:
          break;
      }
      setDecoded(decodedData || "");
      onDecode(selectedEncoding, input, decodedData || "");
    } catch (error) {
      setDecoded("Error decoding the input");
    }
  };

  return (
    <EncoderContainer>
      <div>
        <select value={selectedEncoding} onChange={handleEncodingChange}>
          {codings.map((encoding) => (
            <option key={encoding} value={encoding}>
              {encoding}
            </option>
          ))}
        </select>
      </div>

      <XPTextArea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter encoded data to decode"
      />

      <div>
        <XPButton onClick={decodeData}>Decode</XPButton>
      </div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Title>Decoded Data:</Title>
        <span>{decoded}</span>
      </Box>
    </EncoderContainer>
  );
};

export default Decoder;
