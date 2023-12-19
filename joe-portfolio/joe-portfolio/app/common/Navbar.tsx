import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-20 px-10'>
        
        <Link href='/'>
            <p className='text-2xl'>Joe Kuroha</p>
        </Link>
        <div className='flex gap-10'>
            <Link href='/skill'>
                <p className='mr-5 text-lg'>Skill</p>
            </Link>
            <Link href='/project'>
                <p className='mr-5 text-lg'>Project</p>
            </Link>
            <Link href='/blog'>
                <p className='mr-5 text-lg'>Blog</p>
            </Link>
            <Link href='/contact'>
                <p className='mr-5 text-lg'>Contact</p>
            </Link>
        </div>
    </nav>
  );
}

export default Navbar;