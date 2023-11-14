import LOGO from '../assets/images/logo.png'
const Nav = () => {
    return (
        <nav class=" fixed top-0 w-full z-[999] border-gray-200 bg-blue-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={LOGO} class="h-10 md:h-16" alt="Flowbite Logo" />
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse ">
                    <li>
                    <a href="#home" class="block py-2 px-3 bg-blue-700 md:p-0 hover:text-blue-300 rounded text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#services" class="block py-2 px-3 bg-blue-700 md:p-0 hover:text-blue-300 rounded text-white">Services</a>
                    </li>
                    <li>
                    <a href="#contact" class="block py-2 px-3 text-gray-900 rounded hover:text-blue-300  md:border-0 md:p-0 dark:text-white">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;