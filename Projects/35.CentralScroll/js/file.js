let fileName = "";

$(document).ready(function() {
  document.getElementById('input-file').addEventListener('change', getFile)
});

function getFile(event) {
  const input = event.target
  if ('files' in input && input.files.length > 0) {
    placeFileContent(
      document.getElementById('codeInput'),
      input.files[0])
    fileName = $("#input-file").val().split("\\")
    fileName = fileName[fileName.length - 1]
    changeCustomUpload();
  }
}

function placeFileContent(target, file) {
  readFileContent(file).then(content => {
    target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function changeCustomUpload() {
  $("#input-lable").text(fileName);
}