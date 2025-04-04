import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  function handleClick() {
  router.push('./login')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your ShadCN App!
        </h1>
        <p className="text-lg text-gray-600">
          This is a clean starter template using ShadCN with Next.js.
        </p>
        <div className="mt-6">
          <Button className="px-6 py-3 text-lg">Get Started</Button>
        </div>
      </div>
      <Button className='mt-6' onClick={handleClick}>Login Page</Button>
    </main>
  );
}
