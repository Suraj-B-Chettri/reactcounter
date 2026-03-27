'use client';

const colorClassByName = {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600',
    gray: 'bg-gray-500 hover:bg-gray-600',
  } as const;

type ButtonColor= keyof typeof colorClassByName

interface ButtonProps {
    label: string;
    action: () => void;
    color: ButtonColor;
}
export default function  ControlButton({label, action, color} : ButtonProps) {
    const whichColor:string =  colorClassByName[color] || colorClassByName['gray'];
    return (
        <button 
           onClick={action}
           className={`${whichColor} w-50 px-2 py-5`}> 
            {label}
        </button>
    )
}