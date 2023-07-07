// "use_client";

import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";
import Search from "../layouts/Search";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/solid";
// import { GetProducts } from "@/app/redux/features/products/productsService";
import Image from "next/image";
// import { useEffect } from "react";

 const Navbar = () => {
/*  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts());
  }, []) */

  // const products = useSelector(state => state.products);
  // console.log('productos', products);
  return (
    <header className="bg-white py-2 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div>
            <Link href='/' className="flex">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                height={8}
                width={8}
                alt=""
              />
            </Link>
          </div>
          <Search />

          <div className="flex items-center space-x-2 ml-auto">
            <Link href="/cart">
              <ShoppingCartIcon className="h-8 w-8 cursor-pointer text-gray-300 lg:mr-6 mr-4" />
              <span className="text-xs absolute top-1 mt-5 ml-5 bg-red-500 text-white font-semibold rounded-full px-2 text-center">2</span>
            </Link>
            <Link href="/wishlist">
              <HeartIcon className="h-8 w-8 cursor-pointer text-gray-300 lg:mr-6 mr-4" />
              <span className="text-xs absolute top-1 mt-5 ml-5 bg-red-500 text-white font-semibold rounded-full px-2 text-center">0</span>
            </Link>
            <Link
              href="/login"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              {/* <UserIcon className="h-6 w-8 cursor-pointer text-gray-300 ml-5 lg:mr-6 mr-4" /> */}
              <i className="text-gray-400 w-5 fa fa-user"></i>
              <span className="hidden lg:inline ml-1">Sign in</span>
            </Link>
            <Link href="/me">
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <img className="w-10 h-10 rounded-full" src={"/images/default.png"} />
                <div className="space-y-1 font-medium">
                  <p>
                    Guess
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      guess@mail.com
                    </time>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;