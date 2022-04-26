import Head from "next/head";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const bst = document.querySelector(`link[href^="/lib/bootstrap"]`);

    if (bst) {
      bst.remove();

      return () => {
        document.querySelector("head").prepend(bst);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/tailwind.css" />
      </Head>
      <section className="w-full px-6 pb-12 antialiased bg-white">
        <div className="mx-auto max-w-7xl">
          <nav className="relative z-50 h-24 select-none" style={{}}>
            <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
              <div className="flex items-center justify-start w-1/4 h-full pr-4">
                <a href="#_" className="inline-block py-4 md:py-0">
                  <span className="p-1 text-xl font-black leading-none text-gray-900">
                    <span className="">toeic community</span>
                    <span className="text-blue-600">.</span>
                  </span>
                </a>
              </div>
              <div
                className={clsx(
                  "top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex",
                  { "!flex !fixed": open, hidden: !open }
                )}
              >
                <div className="flex-col pt-4 md:pt-0 md:justify-end w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                  <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                    <Link href="/login">
                      <a className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">
                        Sign In
                      </a>
                    </Link>
                    <Link href="/signup">
                      <a className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">
                        Sign Up
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setOpen((o) => !o)}
                className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
              >
                {!open ? (
                  <svg
                    className="w-6 h-6 text-gray-700"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-700"
                    x-show="showMenu"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            </div>
          </nav>
          {/* Main Hero Content */}
          <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-[1.2] tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
              <span className="inline md:block">Improve your TOEIC</span>{" "}
              <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
                by practicing in the right place
              </span>
            </h1>
            <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
              Simplifying sharing your questions, knowledge, and answers others'
              questions!
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a
                  href="/login"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Sign in
                </a>
              </span>
              <a href="/signup" className="mt-3 text-sm text-indigo-500">
                Sign up
              </a>
            </div>
          </div>
          {/* End Main Hero Content */}
        </div>
      </section>
      {/* Section 2 */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Our Features
          </h2>
          <p className="mt-2 text-lg text-center text-gray-600">
            Check out our list of awesome features below.
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                  <circle cx={6} cy={14} r={3} />
                  <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Share Knowledge
              </h4>
              <p className="text-base text-center text-gray-500">
                Ask your questions and share your knowledge with others. By that
                way, you can learn actively.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 8a3 3 0 0 1 0 6" />
                  <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                  <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Vote up/Vote down
              </h4>
              <p className="text-base text-center text-gray-500">
                Avoid spam questions with vote up and vote down.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                  <line x1={12} y1={12} x2={20} y2="7.5" />
                  <line x1={12} y1={12} x2={12} y2={21} />
                  <line x1={12} y1={12} x2={4} y2="7.5" />
                  <line x1={16} y1="5.25" x2={8} y2="9.75" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">Follow</h4>
              <p className="text-base text-center text-gray-500">
                You can follow your favorite members.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 9l3 3l-3 3" />
                  <line x1={13} y1={15} x2={16} y2={15} />
                  <rect x={3} y={4} width={18} height={16} rx={2} />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">Save</h4>
              <p className="text-base text-center text-gray-500">
                Save any posts you feel interesting and review them later.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="9.5" y1={11} x2="9.51" y2={11} />
                  <line x1="14.5" y1={11} x2="14.51" y2={11} />
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                  <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Search by tags
              </h4>
              <p className="text-base text-center text-gray-500">
                Look for posts by tags? Search them.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={15} y1={5} x2={15} y2={7} />
                  <line x1={15} y1={11} x2={15} y2={13} />
                  <line x1={15} y1={17} x2={15} y2={19} />
                  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">Rank on top</h4>
              <p className="text-base text-center text-gray-500">
                By getting more votes, you can rank your name on top.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="relative py-20 overflow-hidden bg-white">
        <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
          <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
        </span>
        <span className="absolute bottom-0 left-0"> </span>
        <div className="relative px-16 mx-auto max-w-7xl">
          <p className="font-medium tracking-wide text-blue-500 uppercase">
            OUR TEAM
          </p>
          <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
            An incredible team of <br />
            amazing individuals
          </h2>
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                <img
                  className="relative z-20 w-full rounded-full  aspect-square object-cover"
                  src="/images/5.jpeg"
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Lê Hữu Quân</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                <img
                  className="relative z-20 w-full rounded-full aspect-square object-cover"
                  src="/images/1.jpeg"
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Nguyễn Hồ Khải Hoàng</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                <img
                  className="relative z-20 w-full rounded-full  aspect-square object-cover"
                  src="/images/2.jpeg"
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Vũ Chính Trực</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
                <img
                  className="relative z-20 w-full rounded-full  aspect-square object-cover"
                  src="/images/3.jpeg"
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Nguyễn Hoàng Chánh Trực</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
                <img
                  className="relative z-20 w-full rounded-full  aspect-square object-cover"
                  src="/images/4.jpeg"
                />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Huỳnh Ngọc Đỉnh</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-blue-500 uppercase">
                Building Your Knowledge
              </p>
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Changing The Way You learn.
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis, et.
              </p>
            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Ask us anything
                </h3>
                <input
                  type="text"
                  name="email"
                  className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Email address"
                />
                <input
                  type="text"
                  name="question"
                  className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Your question"
                />
                <div className="block">
                  <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
