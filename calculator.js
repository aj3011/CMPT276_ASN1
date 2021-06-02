var w1 = Number(document.getElementById("w1").value);
var w2 = Number(document.getElementById("w2").value);
var w3 = Number(document.getElementById("w3").value);
var w4 = Number(document.getElementById("w4").value);

var a1f1 = Number(document.getElementById("a1f1").value);
var a1f2 = Number(document.getElementById("a1f2").value);
var a2f1 = Number(document.getElementById("a2f1").value);
var a2f2 = Number(document.getElementById("a2f2").value);
var a3f1 = Number(document.getElementById("a3f1").value);
var a3f2 = Number(document.getElementById("a3f2").value);
var a4f1 = Number(document.getElementById("a4f1").value);
var a4f2 = Number(document.getElementById("a4f2").value);

function calculateWeight() {
  console.log(w3);
  console.log(a2f2);
  var weight = Number(
    (w1 * (a1f1 / a1f2) +
      w2 * (a2f1 / a2f2) +
      w3 * (a3f1 / a3f2) +
      w4 * (a4f1 / a4f2)) /
      (w1 + w2 + w3 + w4)
  );
  console.log(weight);
}

function calculateMean() {
  var num = 0;
  var sum = 0;

  if (a1f1 != null && a1f2 != null) {
    sum += a1f1 / a2f2;
    num += 1;
  }

  if (a2f1 != null && a2f2 != null) {
    sum += a2f1 / a2f2;
    num += 1;
  }

  if (a3f1 != null || a3f2 != null) {
    sum += a3f1 / a3f2;
    num += 1;
  }

  if (a4f1 != null || a4f2 != null) {
    sum += a4f1 / a4f2;
    num += 1;
  }

  var mean = sum / num;
  console.log(mean);
}
