const { Schema, default: mongoose } = require("mongoose");

const roadMapSchema = new Schema({
    roadMapId : String,
    roadMapName : String,
    roadMapSourceLink : String
})

const RoadMap = mongoose.models.RoadMap || mongoose.model("RoadMap", roadMapSchema);

export default RoadMap;