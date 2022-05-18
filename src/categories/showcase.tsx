import { VscBell } from "solid-icons/vsc";
import { Component } from "solid-js";
import { SearchDropdown } from "../components/searchDropdown";

export const Showcase: Component = () => {
	return (
		<>
			<h1 class='text-white text-2xl font-semibold mb-5'>Showcase</h1>
			<p class='text-white text-sm mb-2'>Body text</p>
			<SearchDropdown
				terms={{
					one: <span>One</span>,
					two: <span>Two</span>,
					three: <span>Three</span>,
					four: <span>Four</span>,
					five: <span>Five</span>,
					six: <span>Six</span>,
					seven: <span>Seven</span>,
					eight: <span>Eight</span>,
					nine: <span>Nine</span>,
					ten: <span>Ten</span>,
					Buildergroop: <span>Buildergroop</span>,
					Icon: (
						<div class='flex items-end gap-3'>
							<VscBell size={18} />
							<span class='my-auto'>Icon</span>
						</div>
					),
				}}
			/>
		</>
	);
};
