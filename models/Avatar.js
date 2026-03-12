const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bodySize: { type: String, enum: ['small', 'medium', 'large'], required: true },
    skinTone: { type: String, required: true },
    hairStyle: { type: String, required: true },
    hairColor: { type: String, required: true },
    avatarImage: { type: String, default: null },
    referencePhotoUrl: { type: String, default: null },
    analyzedColors: { type: [String], default: [] },
    analyzedPatterns: { type: [String], default: [] },
    clothingType: { type: String, default: null },
    selectedTheme: { type: String, enum: ['formal', 'wedding', 'traditional', 'casual', null], default: null },
    generatedOutfit: { type: mongoose.Schema.Types.ObjectId, ref: 'Outfit', default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Avatar', avatarSchema);