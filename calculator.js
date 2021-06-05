function getValue(id) {
  var value = parseFloat(
    document.getElementById(id).value.length == 0
      ? "0"
      : document.getElementById(id).value
  );
  return value;
}

function calculateWeight() {
  var w1 = getValue("w1");

  var w2 = getValue("w2");
  var w3 = getValue("w3");

  var w4 = getValue("w4");
  var a1f1 = getValue("a1f1");
  var a1f2 = getValue("a1f2");
  var a2f1 = getValue("a2f1");
  var a2f2 = getValue("a2f2");
  var a3f1 = getValue("a3f1");
  var a3f2 = getValue("a3f2");
  var a4f1 = getValue("a4f1");
  var a4f2 = getValue("a4f2");

  document.getElementById("first").innerHTML = "-";
  document.getElementById("second").innerHTML = "-";
  document.getElementById("third").innerHTML = "-";
  document.getElementById("fourth").innerHTML = "-";

  let numerator = 0;
  let denominator = 0;
  if (w1 != 0 && a1f2 != 0) {
    numerator += w1 * (a1f1 / a1f2);
    document.getElementById("first").innerHTML = a1f1 / a1f2;
    denominator += w1;
  }

  if (w2 != 0 && a2f2 != 0) {
    numerator += w2 * (a2f1 / a2f2);
    document.getElementById("second").innerHTML = a2f1 / a2f2;
    denominator += w2;
  }

  if (w3 != 0 && a3f2 != 0) {
    numerator += w3 * (a3f1 / a3f2);
    document.getElementById("third").innerHTML = a3f1 / a3f2;
    denominator += w3;
  }

  if (w4 != 0 && a4f2 != 0) {
    numerator += w4 * (a4f1 / a4f2);
    document.getElementById("fourth").innerHTML = a4f1 / a4f2;
    denominator += w4;
  }

  let result = numerator / denominator;
  document.getElementById("result").innerHTML = "Result " + result;
}

function calculateMean() {
  var w1 = getValue("w1");

  var w4 = getValue("w4");
  var a1f1 = getValue("a1f1");
  var a1f2 = getValue("a1f2");
  var a2f1 = getValue("a2f1");
  var a2f2 = getValue("a2f2");
  var a3f1 = getValue("a3f1");
  var a3f2 = getValue("a3f2");
  var a4f1 = getValue("a4f1");
  var a4f2 = getValue("a4f2");
  var num = 0.0;
  var sum = 0.0;

  document.getElementById("first").innerHTML = "-";
  document.getElementById("second").innerHTML = "-";
  document.getElementById("third").innerHTML = "-";
  document.getElementById("fourth").innerHTML = "-";
  if (a1f2 != 0) {
    sum += a1f1 / a1f2;
    document.getElementById("first").innerHTML = a1f1 / a1f2;
    num += 1;
  }

  if (a2f2 != 0) {
    sum += a2f1 / a2f2;
    document.getElementById("second").innerHTML = a2f1 / a2f2;
    num += 1;
  }

  if (a3f2 != 0) {
    sum += a3f1 / a3f2;
    document.getElementById("third").innerHTML = a3f1 / a3f2;
    num += 1;
  }

  if (a4f2 != 0) {
    sum += a4f1 / a4f2;
    document.getElementById("fourth").innerHTML = a4f1 / a4f2;
    num += 1;
  }

  var mean = sum / num;
  document.getElementById("result").innerHTML = "Result " + mean;
}
