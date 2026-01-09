import { EventEmitter } from "events";

const emitter = new EventEmitter();


emitter.on("ticketBooked", (name) => {
  console.log(`Event: Ticket booked for ${name}`);
});

function confirmBooking(name){
  console.log(`CallBack: Booking Confirmed for ${name}`);
};


function bookTicket(name, callback){
  console.log(`Booking Ticket for ${name}..`);
  emitter.emit("ticketBooked", name);
  callback(name);
};


bookTicket("Alok", confirmBooking);