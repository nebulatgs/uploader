import type { Component, JSX } from "solid-js";

interface TextInputProps {
	adornment?: JSX.Element;
}

export const TextInput: Component<
	JSX.InputHTMLAttributes<HTMLInputElement> & TextInputProps
> = (props) => {
	const inputProps = { ...props };

	delete inputProps.class;
	delete inputProps.adornment;

	return (
		<div class='inline-block overflow-hidden rounded-win'>
			<div
				class={`${
					props.class ?? ""
				} flex flex-row-reverse items-center w-60 peer bg-white bg-opacity-5 focus-within:bg-opacity-0 border-[1.5px] focus-within:border-white focus-within:border-opacity-10 border-transparent rounded-win mb-[-1px] focus-within:mb-[-2px]`}
			>
				{props.adornment}
				<input
					{...inputProps}
					class='w-full bg-transparent text-sm focus:outline-none text-white focus:placeholder-opacity-70 placeholder-gray-200 p-1 px-2 '
				/>
			</div>
			<div class='h-[1.5px] peer-focus-within:h-[2px] peer-focus-within:mb-[0.5px] relative bg-white bg-opacity-50 peer-focus-within:bg-red-400 peer-focus-within:bg-opacity-100'></div>
		</div>
	);
};
