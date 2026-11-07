## Context
Appointment booking system for a single-barber barbershop, where customers book online. Portfolio project to showcase a Python backend profile.
Stack: FastAPI + PostgreSQL, React + TypeScript frontend, Docker deployment.
Expensive decisions: single business with a single barber; two fixed roles (barber and customer); Spanish only and UYU currency; no offline support.

## Backlog

### Repository setup
1. As a team member, I want a README that explains what the project is, its stack and how to get started, so that I understand the project the first time I clone it.
2. As a team member, I want to start the whole project (backend, database and frontend) with a single Docker command, so that I can have it running without installing each piece by hand. Requires: #1
3. As a team member, I want to run the backend (FastAPI) locally with clear steps for the Python version and dependencies, so that I can develop without friction. Requires: #1
4. As a team member, I want to run the frontend (React + TypeScript) locally with clear steps for the Node version and dependencies, so that I can develop without friction. Requires: #1
5. As a team member, I want the README to document the setup steps for each technology (Docker, Python, Node, PostgreSQL), so that a new teammate is productive in minutes. Requires: #2, #3, #4

### Product
6. As a barber, I want to add my services with name, duration and price in UYU, so that customers know what I offer. Requires: #2
7. As a barber, I want to set my working hours, so that appointments are only booked when I'm working.
8. As a customer, I want to see the services and available time slots, so that I can choose when to come in. Requires: #6, #7
9. As a customer, I want to sign up and log in, so that my bookings are under my name.
10. As a customer, I want to book an available time slot, so that my appointment is secured. Requires: #8, #9
11. As a barber, I want to see my schedule of booked appointments, so that I can plan my day. Requires: #10
12. As a customer, I want to see my appointments, so that I remember when to go. Requires: #10
13. As a customer, I want to cancel an appointment, so that the slot is freed if I can't make it. Requires: #12
14. As a barber, I want to cancel an appointment, so that I can handle unexpected issues. Requires: #11
15. As a customer, I want to receive an email reminder before my appointment, so that I don't forget it. Requires: #10
