import Form from '@/components/Form';

function CreatePoll() {
  return (
    <div className='mr-4 h-screen flex flex-col items-center'>
      <h1 className="text-4xl font-semibold text-center mt-6">
      Free Poll Maker
      </h1>
      <p  className="mt-5 text-xl mb-8 m-4 text-center">
      Create engaging live polls and get instant feedback in real time.
Free & Unlimited.
      </p>
      <Form type='poll'/>
    </div>
  )
}

export default CreatePoll