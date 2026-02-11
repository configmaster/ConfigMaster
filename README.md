# Network Configuration Generator

This project is a simple, network configuration generator built using **Python**, **Jinja2**, and **JSON**.

The goal of the project is to demonstrate an *intent‑based* approach to network configuration: **define what you want in structured data, and render clean, vendor‑specific configuration automatically**.

---

## ✨ Key Features

- Intent-driven configuration using JSON
- Vendor-specific rendering using Jinja2 templates
- Clean, paste-ready Cisco IOS output
- Optional comment rendering (clean vs annotated configs)
- Modular design that scales to more features and vendors

---

## 📁 Project Structure

```
config-generator/
├── render.py              # Python rendering engine
├── templates/
│   └── cisco_ios.j2       # Cisco IOS Jinja2 template
├── data/
│   └── data.json          # Intent model (placeholders only)
├── .gitignore
└── README.md
```

---

## 🧠 Design Philosophy

The project separates concerns clearly:

- **JSON (`data.json`)** describes *intent* (what the network should look like)
- **Jinja2 templates** define *vendor syntax*
- **Python (`render.py`)** ties everything together

This mirrors how modern tools like Ansible, NetBox, and Nornir operate.

---

## 🧾 Intent Model Overview (`data.json`)

The intent model is structured into logical sections:

- `system` – hostname, domain name
- `services` – NTP, DNS
- `routing` – static routes
- `access` – VTY configuration
- `hardening` – SSH version, timeouts
- `vpn` – site-to-site IPsec VPN (IKEv2)

> ⚠️ **Note:** This repository uses placeholders only. No real passwords or secrets should be committed.

---

## ▶️ How to Run

### 1️⃣ Install dependencies

```bash
pip install jinja2
```

### 2️⃣ Run the renderer

From the project root:

```bash
python render.py
```

The rendered Cisco IOS configuration will be printed to stdout.

---

## 🧪 Example Output

```text
hostname routerA
ip domain-name configmaster.co.uk

ntp server 8.8.8.8
ip name-server 8.8.8.8

ip ssh version 2

line vty 0 4
 session-timeout 5
 exec-timeout 5 0
 login authentication vty
 transport input ssh
!
```

---

## 🚀 Future Enhancements

Planned or possible extensions:

- Interface configuration
- Juniper Junos templates
- Input validation (JSON Schema)
- web UI

---

## 📌 Purpose

This project is intended as:

- A learning exercise in network automation
- A foundation for future expansion
- A portfolio demonstration of intent-based configuration design

---

## 📄 License

MIT (or update as required)

