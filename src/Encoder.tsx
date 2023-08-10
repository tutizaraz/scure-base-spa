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

const Encoder: React.FC<{
  onEncode: (
    encodingType: string,
    originalData: string,
    encodedData: string
  ) => void;
}> = ({ onEncode }) => {
  const [input, setInput] = useState("");
  const [selectedEncoding, setSelectedEncoding] = useState(codings[0]);
  const [encoded, setEncoded] = useState("");

  const handleEncodingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedEncoding(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const encodeData = () => {
    let encodedData;
    const data = new TextEncoder().encode(input);

    switch (selectedEncoding) {
      case "base16":
        encodedData = base16.encode(data);
        break;
      case "base32":
        encodedData = base32.encode(data);
        break;
      case "base32hex":
        encodedData = base32hex.encode(data);
        break;
      case "base32crockford":
        encodedData = base32crockford.encode(data);
        break;
      case "base64":
        encodedData = base64.encode(data);
        break;
      case "base64url":
        encodedData = base64url.encode(data);
        break;
      case "base58":
        encodedData = base58.encode(data);
        break;
      case "base58flickr":
        encodedData = base58flickr.encode(data);
        break;
      case "base58xrp":
        encodedData = base58xrp.encode(data);
        break;
      case "base58xmr":
        encodedData = base58xmr.encode(data);
        break;
      case "utf8":
        encodedData = utf8.encode(data);
        break;
      case "hex":
        encodedData = hex.encode(data);
        break;
      default:
        break;
    }

    setEncoded(encodedData || "");
    onEncode(selectedEncoding, input, encodedData || "");
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
        placeholder="Enter data to encode"
      />

      <div>
        <XPButton onClick={encodeData}>Encode</XPButton>
      </div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Title>Encoded Data:</Title>
        <span>{encoded}</span>
      </Box>
    </EncoderContainer>
  );
};

export default Encoder;
