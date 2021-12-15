import { BookingForm, completedRequests } from "./BookingForm.js"
import { Requests } from "./Requests.js"

export const ClownService = () => {
    return `
    <header>
    <h1>Clown Booking</h1>
    </header>
    <section class="bookingForm">
    ${BookingForm()}
    </section>
    
    <section class="bookingRequests">
        <h2>Booking Requests</h2>
        ${Requests()}
        </section>
    <section class"completedRequests">
        <h2>Completed Requests</h2>
        ${completedRequests()}
        </section>
        `
}