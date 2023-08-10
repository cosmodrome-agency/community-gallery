import * as Form from '@radix-ui/react-form';

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="justify-between text-center">
      <h1 className="text-6xl lg:text-8xl font-black text-center text-primary p-12"> The Community Gallery </h1>
  {/* form for entering email to subscribe to newsletter */}
      <Form.Root className='FormRoot'>
        <Form.Field className='FormField' name="Email">
        <div className=''>
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
        <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
        </div>
        </Form.Field>
      </Form.Root>
      <h2 className="text-4xl font-bold text-center text-secondary"> Express Yourself</h2>
  </div>
  </main>  )     
}