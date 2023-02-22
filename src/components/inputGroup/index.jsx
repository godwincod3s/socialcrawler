import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Input1() {
    return (
      <div>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-white sm:text-sm">&#128279;</span>
          </div>
          <input
            type="text"
            name="url"
            id="url"
            className="bg-gray-100 block w-full rounded-3xl border-gray-300 pl-10 pr-36 py-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
            placeholder="Site url"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-3xl border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <MagnifyingGlassIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Crawl
            </button>
          </div>
        </div>
      </div>
    )
  }
  