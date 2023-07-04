module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            essid: String,
            bssid: String,
            rssi: Number,
            timestamp: { type: Date, default: Date.now() }
        },
        { timestamps: true }
    );

    schema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Wap = mongoose.model('wap', schema)
    return Wap;
}