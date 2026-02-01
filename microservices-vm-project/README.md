# VM Microservices Project

## Objective
This project demonstrates deployment of a microservice-based Node.js application across two VirtualBox virtual machines.

## Architecture

Service 1 (VM1, Port 3000)
→ Calls →
Service 2 (VM2, Port 4000)

Both VMs are connected using a Host-only network.

## Project Structure

microservices-vm-project/
│
├── service1 (Service A)
├── service2 (Service B)
└── README.md

## Setup Instructions

### On both VMs install Node.js
sudo apt update
sudo apt install nodejs npm -y

---

### Service 2 (VM2)
cd service2
npm install
node server.js

Test:
curl http://localhost:4000/data

---

### Service 1 (VM1)
cd service1
npm install
node server.js

Update server.js with VM2 IP before running.

Test:
curl http://localhost:3000

---

## Expected Output

{
  "service": "A",
  "message": "Hello from Service 1",
  "responseFromServiceB": {
    "service": "B",
    "message": "Hello from Service 2",
    "time": "..."
  }
}

## Technologies Used
- VirtualBox
- Ubuntu
- Node.js
- Express
- Axios

## Academic Integrity
This project is my original implementation. Any plagiarism in code or documentation may result in disqualification.
