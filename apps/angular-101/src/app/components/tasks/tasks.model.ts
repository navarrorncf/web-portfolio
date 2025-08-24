export type TaskDraft = {
  userId: string
  title: string
  summary: string
  dueDate: string
}

export type Task = TaskDraft & { id: string }
