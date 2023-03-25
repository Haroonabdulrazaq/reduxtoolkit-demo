import mongoose from  'mongoose';

const workoutSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: String,
    required: true
  }
  
}, {timestamps: true})

export default mongoose.model('Workout', workoutSchema);