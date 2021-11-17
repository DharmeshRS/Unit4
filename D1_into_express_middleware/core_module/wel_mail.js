const EventEmitter=require("events")

const sendverificationmail=require("./email")

const sendwelcome=require("./wel_mail.js")


const eventEmitter=new EventEmitter();

const userRegistered=()=>{
    eventEmitter.on("userRegistered",sendverificationmail)
    eventEmitter.on("userRegistered",sendwelcome)
}