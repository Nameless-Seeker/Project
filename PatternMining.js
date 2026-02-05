import mongoose from "mongoose"

const MiningSchema = new mongoose.Schema({
    productLists: [
        {
            _id: String   // P001
        }
    ]
});

export default mongoose.model("PatternMining", MiningSchema)