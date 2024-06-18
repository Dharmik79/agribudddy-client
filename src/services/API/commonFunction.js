import { getResponse } from "./CommonAPI";

export async function getStateDataResponse(props) {
  return await getResponse(`geo/states/${props}`, {});
}

export async function getAllStateDataResponse() {
  return await getResponse(`geo/states`, {});
}

export async function getCityDataResponse(countryId, stateId) {
  return await getResponse(`geo/cities/${countryId}/${stateId}`, {});
}

export function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

export function moveArrayItemToNewIndex(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}

//move index 1(b) to index 2(c)
// console.log(moveArrayItemToNewIndex(["a","b","c","d"], 1, 0));

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function handleReadNotification(type) {
  const response = getResponse(
    `/read_notification`,
    {}
  );
  return response;
}

export async function handleUnReadNotification(Id, type) {
  const response = await getResponse(
    `/unread_notifications?user_type=${type}&user_id=${Id}`,
    {}
  );
  return response;
}
