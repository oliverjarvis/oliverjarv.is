/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useEffect } from 'react'

export default function MathPage() {
  const [slider1Value, setSlider1Value] = useState(50)
  const [slider2Value, setSlider2Value] = useState(50)

  const secondsInAWeek = 604800

  const totalProblems = 4946

  const [completionDate, setCompletionDate] = useState(new Date().toDateString())

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNextDate = () => {
    return new Date(
      Date.now() + (((slider1Value / 100) * totalProblems) / slider2Value) * secondsInAWeek * 1000
    )
  }

  useEffect(() => {
    setCompletionDate(getNextDate().toDateString())
  }, [getNextDate, slider1Value, slider2Value])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Calculus dispenser
          </h1>

          <div className="flex flex-row justify-center h-full">
            <div className="flex flex-col  w-full justify-between m-2">
              <label
                htmlFor="myRange"
                className="block text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Select percentage of problems to solve | {slider1Value}%
              </label>
              <p>[{Math.floor((slider1Value / 100) * totalProblems)} / {totalProblems}]</p>
              <br />
              <input
                onChange={(e) => setSlider1Value(e.target.value)}
                type="range"
                min="0"
                max="100"
                defaultValue={slider1Value}
                className="h-8 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 px-2 dark:bg-gray-700"
                id="myRange"
              ></input>
            </div>
            <div className="flex flex-col w-full justify-between m-2">
              <label
                htmlFor="myRange2"
                className="block text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                {slider2Value} problems / week
              </label>
              <br />
              <input
                onChange={(e) => setSlider2Value(e.target.value)}
                type="range"
                min="0"
                max="100"
                defaultValue={slider2Value}
                className="h-8 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 px-2 dark:bg-gray-700"
                id="myRange2"
              ></input>
            </div>
          </div>
          <div className="text-2xl m-2">Estimated completion date: {completionDate}</div>
          <h2 className="text-xl m-2 font-medium">Ugens opgaver (baseret på hvad du har læst indtil videre)</h2>
          <div className="problemContainer grid grid-cols-7">
            <div className="p-2 m-2 rounded bg-green-500 grid grid-cols-3 justify-between items-center">
                <div></div>
                <span>1.23</span>
                <span className="w-full flex flex-row justify-end ">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </span>
            </div>

            <div className="p-2 m-2 rounded bg-green-500 grid grid-cols-3 justify-between items-center">
                <div></div>
                <span>1.23</span>
                <span className="w-full flex flex-row justify-end ">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </span>
            </div>

            <div className="p-2 m-2 rounded bg-green-500 grid grid-cols-3 justify-between items-center">
                <div></div>
                <span>1.23</span>
                <span className="w-full flex flex-row justify-end ">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </span>
            </div>

            <div className="p-2 m-2 rounded bg-green-500 grid grid-cols-3 justify-between items-center">
                <div></div>
                <span>1.23</span>
                <span className="w-full flex flex-row justify-end ">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </span>
            </div>
            
          </div>

<div class="overflow-x-auto relative">
    <h1 className="text-xl my-4">Progress</h1>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Chapter Section
                </th>
                <th scope="col" class="py-3 px-6">
                    Læst
                </th>
                <th scope="col" class="py-3 px-6">
                    Opgaver
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Chapter 1.1
                </th>
                <td class="py-4 px-6">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Chapter 1.2
                </th>
                <td class="py-4 px-6">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </td>
                <td class="py-4 px-6">
                    Laptop PC
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Chapter 1.3
                </th>
                <td class="py-4 px-6">
                     <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                </td>
                <td class="py-4 px-6">
                    <div className="problemContainer grid grid-cols-7">
                        <div className="p-2 m-2 rounded bg-green-500 grid grid-cols-3 justify-between items-center">
                            <div></div>
                            <span>1.23</span>
                            <span className="w-full flex flex-row justify-end ">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                            </span>
                        </div>

                        <div className="p-2 m-2 rounded bg-green-500 grid grid-cols-3 justify-between items-center">
                            <span className="text-white justify-center grid col-span-2">1.23</span>
                            <span className="w-full flex flex-row justify-end">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 cursor-pointer" />
                            </span>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
      </div>
    </>
  )
}


