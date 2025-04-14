import mongooes from 'mongooes'

const todoSchema = new mongooes.schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: "SubTodo"
      }
    ] // Array of sub todos
  }, 
  {timestamps: true}
  ),

export const Todo = mongooes.model('Todo', todoSchema);