const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = newSchema (
    {
        day: {
            type : Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "You Must Enter an Excerise Type"
                },
                name: {
                    type: String, 
                    trim: true, 
                    required: "You Must Enter an Excerise Name"
                },
                duration: {
                    type: Number, 
                    required: "You Must Enter a Duration in Minutes"
                },
                weigt: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }
        ]
    },
)

const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;