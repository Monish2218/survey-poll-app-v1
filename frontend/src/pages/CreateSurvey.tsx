import SurveyForm from '@/components/SurveyForm'

function CreateSurvey() {
  return (
    <div className='mr-4 h-screen flex flex-col items-center'>
      <h1 className="text-4xl font-semibold text-center mt-6">
      Free Survey Maker
      </h1>
      <p  className="mt-5 text-xl mb-8 m-4 text-center">
      Create engaging Surveys and get instant feedback in real time.
Free & Unlimited.
      </p>
      <SurveyForm />
    </div>
  )
}

export default CreateSurvey