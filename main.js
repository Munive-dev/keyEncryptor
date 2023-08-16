const TEXT_AREA = document.getElementById("text-area");
const SECTION_ENCRYPTED = document.getElementById("message-Encrypted");
const IMAGE = document.getElementById("image");
const TITLE = document.getElementById("text");
const PARAGRAHP = document.getElementById("indication");
const COPY = document.getElementById("copy");
COPY.style.display = "none";
SECTION_ENCRYPTED.style.display = "none";

function validate() {
  let text = document.getElementById("text-area").value;
  let validate = text.match(/^[a-z]*$/);

  if (!validate || validate === 0) {
    alert("!opps! only lowercase letters and no accents are allowed.");
    location.reload();
    return true;
  }
}

function btnEncrypt() {
  if (!validate()) {
    const TEXT_ENCRYPTED = encrypt(TEXT_AREA.value);
    SECTION_ENCRYPTED.value = TEXT_ENCRYPTED;
    alert("!Congratulations! Your text has been successfully encrypted.");
    SECTION_ENCRYPTED.style.display = "block";
    TEXT_AREA.value = "";
    TITLE.style.display = "none";
    PARAGRAHP.style.display = "none";
    IMAGE.style.display = "none";
    COPY.style.display = "block";
  }
}

function encrypt(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDecrypt() {
  const TEXT_ENCRYPTED = decrypt(TEXT_AREA.value);
  SECTION_ENCRYPTED.value = TEXT_ENCRYPTED;
  TEXT_AREA.value = "";
}

function decrypt(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function btnCopy() {
  SECTION_ENCRYPTED.select();
  navigator.clipboard.writeText(SECTION_ENCRYPTED.value);
  SECTION_ENCRYPTED.value = "";
  alert("Texto Copiado");
}
