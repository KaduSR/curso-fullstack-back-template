import { Schema, model, Document } from 'mongoose';

export interface userInterface extends Document {
    name: string,
    email: string,
    password: string,
    creation: Date,
}

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Nome obrigatorio'],
  },
  email: {
    type: String,
    require: [true, 'E-mail obrigatorio'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Senha obrigatoria'],
    select: false, // Esconder senha
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

export default model<userInterface>('User', UserSchema);
