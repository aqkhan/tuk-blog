import { Editor } from '@tinymce/tinymce-react'
import Nav from '../components/nav'

const handleEditorChange = (e) => {
  console.log(
    'Content was updated:',
    e.target.getContent()
  );
}

export default function IndexPage() {
  
  return (
    <div>
            {/* Navigation starts */}
            <nav className="w-full mx-auto bg-white shadow z-20 relative">
                <div className="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto">
                    <div className="flex items-center">
                        <div className="mr-10 flex items-center">
                            <svg aria-label="Home" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path
                                        fill="#4c51bf"
                                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                    />
                                </g>
                            </svg>
                            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">The North</h3>
                        </div>
                        <ul className="pr-32 xl:flex hidden items-center h-full">
                            <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal">Dashboard</li>
                            <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal relative" onclick="dropdownHandler(this)">
                                <ul className="bg-white shadow rounded py-1 w-32 left-0 mt-16 -ml-4 absolute hidden top-0">
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Landing Pages</li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Templates</li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Components</li>
                                </ul>
                                Products
                                <div className="ml-2 text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal">Performance</li>
                            <li className="cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal relative" onclick="dropdownHandler(this)">
                                <ul className="bg-white shadow rounded py-1 w-32 left-0 mt-16 -ml-4 absolute hidden top-0">
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Landing Pages</li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Templates</li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Components</li>
                                </ul>
                                Deliverables
                                <div className="ml-2 text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full xl:flex hidden items-center justify-end">
                        <div className="h-full flex items-center">
                            <div className="w-32 pr-16 h-full flex items-center justify-end border-r"></div>
                            <div className="w-full h-full flex">
                                <div className="w-16 xl:w-32 h-full flex items-center justify-center xl:border-r">
                                    <div className="relative">
                                        <div className="w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                    </div>
                                </div>
                                <div aria-haspopup="true" className="cursor-pointer w-full flex items-center justify-end relative" onclick="dropdownHandler(this)">
                                    <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 left-0 shadow mt-64 hidden">
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={12} cy={7} r={4} />
                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                </svg>
                                                <span className="ml-2">My Profile</span>
                                            </div>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={12} cy={12} r={9} />
                                                <line x1={12} y1={17} x2={12} y2="17.01" />
                                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                            </svg>
                                            <span className="ml-2">Help Center</span>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                            <span className="ml-2">Account Settings</span>
                                        </li>
                                        
                                    </ul>
                                    <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                                    <p className="text-gray-800 text-sm ml-2">Jane Doe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visible xl:hidden flex items-center relative" onclick="dropdownHandler(this)">
                        <ul className="p-2 w-64 border-r bg-white absolute top-0 -ml-2 rounded right-0 shadow mt-12 lg:mt-16 hidden">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={7} r={4} />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    <span className="ml-2">Profile</span>
                                </div>
                            </li>
                            <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={4} y={4} width={6} height={6} rx={1} />
                                        <rect x={14} y={4} width={6} height={6} rx={1} />
                                        <rect x={4} y={14} width={6} height={6} rx={1} />
                                        <rect x={14} y={14} width={6} height={6} rx={1} />
                                    </svg>
                                    <span className="ml-2">Dashboard</span>
                                </div>
                            </li>
                            <li className="flex xl:hidden  cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <line x1={12} y1={17} x2={12} y2="17.01" />
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                </svg>
                                <span className="ml-2">Products</span>
                            </li>
                            <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">Performance</span>
                            </li>
                            
                        </ul>
                        <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    </div>
                </div>
            </nav>
            {/* Navigation ends */}
            {/* Page title starts */}
            <div className="my-6 lg:my-8 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div>
                    <p className="flex items-center text-indigo-700 text-xs">
                        <span>Portal</span>
                        <span className="mx-2">&gt;</span>
                        <span>Dashboard</span>
                        <span className="mx-2">&gt;</span>
                        <span>KPIs</span>
                    </p>
                    <h4 className="text-2xl font-bold leading-tight text-gray-800">Dashboard</h4>
                </div>
                <div className="mt-6 lg:mt-0">
                    <button className="mr-3 bg-gray-200 hover:bg-gray-300 transition duration-150 ease-in-out focus:outline-none rounded text-indigo-700 px-5 py-2 text-sm">Back</button>
                    <button className="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
                </div>
            </div>
            {/* Page title ends */}
            <div className="w-full pt-12 bg-gray-200">
                {/* Remove class [ h-64 ] when adding a card block */}
                <div className="container mx-auto px-6 pb-10 h-64">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                            <div className="mt-16 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800">
                                    Title
                                </label>
                                <input type="text" id="username" name="username" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="Title of the blog post" required />
                            </div>
                            <Editor
                              apiKey="t8lm6z7v1x58a3nvl8fgtq2x4ebtuyhgmz1d2ghvv4bhcdzr"
                              initialValue="Go get em tiger!"
                              init={
                                {
                                  height: 700,
                                  menubar: true,
                                  plugins: [
                                    'advlist autolink lists link image', 
                                    'charmap print preview anchor help',
                                    'searchreplace visualblocks code',
                                    'insertdatetime media table paste wordcount'
                                  ]
                                }
                              }
                              onChange={handleEditorChange.bind(this)}
                            />
                    </div>
                </div>
            </div>
        </div>
  )
}
