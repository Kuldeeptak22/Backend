import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovieShema = new Schema({
  movieTitle: {
    type: String,
    required: true,
  },
  movieDuration: {
    type: String,
    required: true,
  },
  moviePoster: {
    type: String,
    default: null,
  },
  movieReleaseDate: {
    type: String,
    required: true,
  },
  movieViews: {
    type: String,
    required: true,
  },
  movieLikes: {
    type: String,
    required: true,
  },
  movieCategory: {
    type: Schema.Types.ObjectId,
    required: true,
    // ref:CategoryModel
  },
  movieRating: {
    type: String,
    required: true,
  },
  movieCategory: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("movie", MovieShema);
