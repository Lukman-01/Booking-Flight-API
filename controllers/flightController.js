const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

exports.getFlights = async(req,res) => {
  try{
    const flights = Flights;
    
    res.status(200).json({
      message: "All Flights Available",
      flights: flights
    });
    
  } catch (err){
    res.status(500).json({message: err});
  }
};

exports.getFlight = async(req,res) => {
  try{

    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    
    res.status(200).json({
      message: "Flight Found",
      flight
    });
    
  } catch (err){
    res.status(500).json({message: err});
  }
};

exports.CreateFlight = async (req, res) => {
  try{
    const {title,time,price,date} = await req.body;
    const newFlight = {
      id : uuid(),
      title,
      time,
      price,
      date
    };
    
    Flights.push(newFlight);

    res.status(201).json({
      message: "New Flights Created",
      newFlight
    });
  } catch (err){
    res.status(500).json({message: err});
  }
};

exports.updateFlight = async(req,res) => {
  try{
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);

    const {title,time,price,date} = await req.body;
      
    flight.title = title;
    flight.time = time;
    flight.price = price;
    flight.date = date;

    res.status(201).json({
      message: "Flight Updated",
      flight
    });
  }catch (err){
    res.status(500).json({message: err});
  }
};

exports.deleteFlight = async(req,res) => {
  try{
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);

    Flights.splice(Flight.IndexOf(flight), 1);
    
    res.status(201).json({
      message: "Flight deleted",
      flight
    });
  }catch (err){
    res.status(500).json({message: err});
  }
};



