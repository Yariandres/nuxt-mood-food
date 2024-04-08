import mongoose from 'mongoose';

export default async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(useRuntimeConfig().MONGO_URI);
    console.log('Connected to MongoDB successfully!');
  } catch (error: unknown) {
    return createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
};
