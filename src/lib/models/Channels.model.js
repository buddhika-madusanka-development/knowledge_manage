const { Schema, default: mongoose } = require("mongoose");

const channelSchema = new Schema({
    channelId : String,
    channelName : String,
    channelLink : String,
    channelDescription : String,
    channelImage : String
})

const Channel = mongoose.models.Channel || mongoose.model("Channel", channelSchema);

export default Channel;