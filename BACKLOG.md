## Context
Appointment booking system for a single-barber barbershop, where customers book online. Portfolio project to showcase a Python backend profile.
Stack: FastAPI + PostgreSQL, React + TypeScript frontend, Docker deployment.
Expensive decisions: single business with a single barber; two fixed roles (barber and customer); Spanish only and UYU currency; no offline support.

## Backlog
1. As a barber, I want to add my services with name, duration and price in UYU, so that customers know what I offer.
2. As a barber, I want to set my working hours, so that appointments are only booked when I'm working.
3. As a customer, I want to see the services and available time slots, so that I can choose when to come in. Requires: #1, #2
4. As a customer, I want to sign up and log in, so that my bookings are under my name.
5. As a customer, I want to book an available time slot, so that my appointment is secured. Requires: #3, #4
6. As a barber, I want to see my schedule of booked appointments, so that I can plan my day. Requires: #5
7. As a customer, I want to see my appointments, so that I remember when to go. Requires: #5
8. As a customer, I want to cancel an appointment, so that the slot is freed if I can't make it. Requires: #7
9. As a barber, I want to cancel an appointment, so that I can handle unexpected issues. Requires: #6
10. As a customer, I want to receive an email reminder before my appointment, so that I don't forget it. Requires: #5
