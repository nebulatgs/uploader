import type { Component } from "solid-js";

export const TextInput: Component = () => {
	return (
		<div class='inline-block overflow-hidden rounded-win'>
			<input
				type='text'
				class='peer text-sm focus:outline-none text-white focus:placeholder-opacity-70 placeholder-gray-200 bg-white bg-opacity-5 focus:bg-opacity-0 p-1 px-2 border-[1.5px] focus:border-white focus:border-opacity-10 border-transparent rounded-win mb-[-1px] focus:mb-[-2px]'
				placeholder='Text Input'
			/>
			<div class='h-[1.5px] peer-focus:h-[2px] relative bg-white bg-opacity-50 peer-focus:bg-red-400 peer-focus:bg-opacity-100'></div>
		</div>
	);
};
