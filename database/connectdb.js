import mongoose from "mongoose"

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log('Conect DB ok');
} catch (error) {
    console.log('Error de coneccion:' + error);
}