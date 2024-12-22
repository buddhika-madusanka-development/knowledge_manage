const { Schema, default: mongoose } = require("mongoose");

const contentSchema = new Schema({
    contentId : String,
    contentTitle : String,
    contentLink : String,
    contentAdditionalNotes : String,
    Tags : [String]
});

const Content = mongoose.models.Content || mongoose.model('Content', contentSchema);

export default Content;