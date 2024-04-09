import {useForm, SubmitHandler, useFieldArray} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { SurveyFieldValues, surveySchema } from '@/lib/types';

function SurveyForm() {
    const { register, control, handleSubmit, formState: { errors }} = useForm<SurveyFieldValues>({ resolver: zodResolver(surveySchema), defaultValues:{
        description: "",
        title: "",
        questions: [{question: "", type: "single", options: [{option: ""}]}]
    }});
    const {fields, append, remove} = useFieldArray({
        name: "questions",
        control,
    })
    const onSubmit: SubmitHandler<SurveyFieldValues> = (data) => {
    // Do your form submission stuff here
        console.log(data);
    }

  return (
    <form className='bg-slate-100 w-2/3 pt-4 border-2 border-sky-500 p-8' onSubmit={handleSubmit(onSubmit)}>
       
        <label htmlFor="title">Title </label><br />
        <input className='w-full mt-2 border-orange-400 border p-2' id="title" placeholder='Type Your Question here' {...register('title')} /><br />
        {errors.title?.message && <p className='text-sm text-red-600'>{errors.title?.message}</p>}<br />
        
        <label htmlFor="description">Description (Optional) </label><br />
        <textarea placeholder='Add some description here' className='w-full mt-2 border-orange-400 border p-2' id="description" {...register('description')} rows={3}></textarea><br/><br />
        
        <label>Questions : </label><br />
        {fields.map((field, index)=>{
            return  (
                <>
                <label htmlFor={"q"+index} > Question {index + 1}:</label><br/>
                    
                <input {...register(`questions.${index}.question`)} id={"q"+index} key={field.id} placeholder="Question"/><br />
                <label> Options :</label>
                {field.options.map((option, index)=>{
                    return (
                        <div key={index}>
                            <input {...register(`questions.${index}.options.${index}`)} id={`q${index}`} placeholder={`Option ${index+1}`} />
                        </div>
                    )
                })}
                <input placeholder='Option' className='w-4/5 mt-1 border-orange-400 border p-2' key={field.id} {...register(`questions.${index}.options`)} />
                <Button className='w-1/5' type='button' onClick={()=>remove(index)} variant='outline'>Remove</Button>
                </>
            )
        })}
        <p className='text-sm text-red-600'>{errors.options?.root?.message}</p>
        <p className='text-sm text-red-600'>{errors.root?.message}</p>
        {errors.options?.length && <p className='text-sm text-red-600'>Option Can't be empty</p>}
        <Button className='mt-4' variant='outline'  onClick={()=>append({option: ""})}>Add Option</Button><br /><br />

        <Button type='submit' onClick={()=>console.log(errors)} variant='destructive'>Submit</Button>

        {errors.root?.message && <p>{errors.root?.message}</p>}<br />
    </form>
  )
}

export default SurveyForm