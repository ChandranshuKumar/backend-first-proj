import { Schema, model } from "mongoose";

interface TodoType {
    title: string,
    isCompleted?: boolean,
    date?: Date
}

const todosSchema: Schema = new Schema<TodoType>(
    {
        title: { type: String, required: true },
        isCompleted: { type: Boolean, default: false },
        date: { type: Date, default: Date.now }
    }
);

module.exports = model<TodoType>('Todos', todosSchema);