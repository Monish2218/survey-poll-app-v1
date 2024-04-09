import {z} from 'zod'

// export const Question = z.object({
//     question: z.string(),
//     type: z.enum(['multiple', 'single']),
//     answer: z.string(),
//     options: z.array(z.string())
// })

export const surveySchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }).max(50),
    description: z.string().optional(),
    questions: z.array(
        z.object({
          question: z.string(),
          type: z.enum(['multiple', 'single', 'open-ended']), // Survey question type
          options: z.array(z.object({option: z.string().min(1, {message: "Option can't be empty"})})).nonempty({ message: 'At least one option must be added' }),
        })
    ),
})

export const PollSchema =  z.object({
    title: z.string().min(1, { message: 'Title is required' }).max(50),
    description: z.string().optional(),
    options: z.array(z.object({option: z.string().min(1, {message: "Option can't be empty"})})).nonempty({ message: 'At least one option must be added' }),
})

export type PollFieldValues = z.infer<typeof PollSchema>;

export type SurveyFieldValues = z.infer<typeof surveySchema>;