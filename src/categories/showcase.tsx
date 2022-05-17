import type { Component } from "solid-js";
import { TextInput } from "../components/textInput";

export const Showcase: Component = () => {
	return (
		<>
			<h1 class='text-white text-2xl font-semibold mb-5'>Showcase</h1>
			<p class='text-white text-sm mb-2'>Hey buildergroop!</p>
			<TextInput />
		</>
	);
};
