import { Schema, model, Document } from 'mongoose';
import { userInterface } from './user';

export enum StatusEnum {
    OPEN = 'OPEN',
    Finished = 'Finished'
}

export interface TaskInterface extends Document {
    description: string,
    status: StatusEnum,
    conclused: Date,
    responsible: userInterface,
    creation: Date,
}

const TaskSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Descrição obrigatorio'],
  },
  status: {
    type: String,
    validate: {
      validator: (value) => {
        if (value === StatusEnum.OPEN || value === StatusEnum.Finished) return true;
        return false;
      },
      // eslint-disable-next-line no-template-curly-in-string
      message: (props) => '${props.value} não é um status válido!',
    },
    require: [true, 'Status obrigatório'],
    uppercase: true,
  },
  concluded: {
    type: Date,
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: [true, 'Responsável é obrigatório'],
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

export default model<TaskInterface>('Task', TaskSchema);
