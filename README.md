# Booking-system

Online appointment booking system for a single-barber barbershop. Customers sign up, browse the barber's services and available time slots, and book appointments. The barber manages services, working hours and the schedule of booked appointments.

This is a portfolio project to showcase a Python backend profile.

## Users

- **Barber**: manages services (name, duration, price), working hours and appointments.
- **Customer**: signs up, books, views and cancels their own appointments.

## Stack

- **FastAPI**: backend API (Python).
- **PostgreSQL**: database.
- **React + TypeScript**: frontend.
- **Docker**: deployment and local environment.

## Product decisions

- Single business with a single barber.
- Two fixed roles: barber and customer.
- Spanish only and UYU currency.
- No offline support.

## Getting started

To run the project locally, follow [DEVELOPMENT.md](DEVELOPMENT.md). In short, with Docker installed:

```sh
cp .env.example .env
docker compose up --build
```

Then open http://localhost:5173.

Running the backend and the frontend outside Docker is not documented yet; it will be added to [DEVELOPMENT.md](DEVELOPMENT.md) as the repository setup stories are completed.
