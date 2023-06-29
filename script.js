function convert() {
  var iv = parseFloat(document.getElementById("iv").value);
  var ip = document.getElementById("ip").value;
  var op = document.getElementById("op").value;
  var result = 0;

  if (ip === op) {
    result = iv;
  } else if (ip === "meter") {
    if (op === "kilometer") {
      result = iv / 1000;
    } else if (op === "mile") {
      result = iv * 0.000621371;
    } else if (op === "yard") {
      result = iv * 1.09361;
    }
  } else if (ip === "kilometer") {
    if (op === "meter") {
      result = iv * 1000;
    } else if (op === "mile") {
      result = iv * 0.621371;
    } else if (op === "yard") {
      result = iv * 1093.61;
    }
  } else if (ip === "mile") {
    if (op === "meter") {
      result = iv / 0.000621371;
    } else if (op === "kilometer") {
      result = iv / 0.621371;
    } else if (op === "yard") {
      result = iv * 1760;
    }
  } else if (ip === "yard") {
    if (op === "meter") {
      result = iv / 1.09361;
    } else if (op === "kilometer") {
      result = iv / 1093.61;
    } else if (op === "mile") {
      result = iv / 1760;
    }
  }

  document.getElementById("result").innerHTML =
    iv + " " + ip + " = " + result + " " + op;
}
