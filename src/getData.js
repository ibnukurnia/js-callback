// Get Data From API

export const getData = (url, success, error) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      success(xhr.response);
    } else if (xhr.status === 404) {
      error();
    }
  };
  xhr.open("Get", url);
  xhr.send();
};
