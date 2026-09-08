function showForm() {
  document.getElementById("staticForm").style.display = "none";
  document.getElementById("vpnForm").style.display = "none";

  const type = document.getElementById("configType").value;

  if (type === "static") {
    document.getElementById("staticForm").style.display = "block";
  }

  if (type === "vpn") {
    document.getElementById("vpnForm").style.display = "block";
  }
}

function generateConfig() {
  const type = document.getElementById("configType").value;
  let output = "";

  if (type === "static") {
    const prefix = document.getElementById("prefix").value;
    const mask = document.getElementById("mask").value;
    const nextHop = document.getElementById("nextHop").value;

    output = `ip route ${prefix} ${mask} ${nextHop}`;
  }

  if (type === "vpn") {
    const peer = document.getElementById("peer").value;
    const psk = document.getElementById("psk").value;

    output = `
crypto isakmp key ${psk} address ${peer}
`;
  }

  document.getElementById("output").textContent = output.trim();
}