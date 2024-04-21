"use client"
export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string;
        value: string;
    }[];
}) => {
    return <select onChange={(e) => {
        onSelect(e.target.value)
    }} className="bg-[#131313] border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        {options.map(option => <option value={option.key}>{option.value}</option>)}
  </select>
}