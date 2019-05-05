import { SMS } from "expo";

async function sendMessage() {
  const { result } = await SMS.sendSMSAsync(
    ["3193892281"],
    "My sample HelloWorld message"
  );
}

export default sendMessage;
