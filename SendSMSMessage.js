import { SMS } from "expo";
import { getContacts } from "./manageContacts";

function parseContactObjectToArray(contactObject) {
  console.log(`This is the contactObject ${JSON.stringify(contactObject)}`);

  let contactArray = [];
  if (contactObject.contact1) {
    contactArray.push(contactObject.contact1);
  }
  if (contactObject.contact2) {
    contactArray.push(contactObject.contact2);
  }
  if (contactObject.contact3) {
    contactArray.push(contactObject.contact3);
  }
  if (contactObject.contact4) {
    contactArray.push(contactObject.contact4);
  }
  if (contactObject.contact5) {
    contactArray.push(contactObject.contact5);
  }

  console.log(`This is the contactArray ${JSON.stringify(contactArray)}`);
  return contactArray;
}

async function sendMessage() {
  try {
    let contactObject = await getContacts();
    console.log(
      `Coming into the sendMessage function, contacts: ${JSON.stringify(
        contactObject
      )}`
    );
    let contacts = parseContactObjectToArray(contactObject);
    const { result } = await SMS.sendSMSAsync(
      contacts,
      "Hi Friends! I'm about to go on a date! Yay! Here's my location: http://www.google.com/maps/place/43.034447,-87.911695"
    );
  } catch (e) {
    console.log(e);
  }
}

export default sendMessage;
