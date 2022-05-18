import { VscChromeClose, VscSearch } from "solid-icons/vsc";
import { Component, createSignal, Show } from "solid-js";
import { TextInput } from "../components/textInput";
export const Showcase: Component = () => {
	const [active, setActive] = createSignal(false);
	let inputRef: HTMLInputElement | null = null;

	const clearValue = () => {
		console.log(inputRef);
		if (inputRef) {
			inputRef.value = "";
		}
	};

	return (
		<>
			<h1 class='text-white text-2xl font-semibold mb-5'>Showcase</h1>
			<p class='text-white text-sm mb-2'>Hey buildergroop!</p>
			<TextInput
				onFocus={() => setActive(true)}
				onBlur={(e) =>
					e.currentTarget.parentElement?.contains(e.relatedTarget as Node)
						? e.currentTarget.focus()
						: setActive(false)
				}
				ref={inputRef!}
				placeholder='Search'
				adornment={
					<>
						<button
							classList={{ "pointer-events-none": !active() }}
							class='cursor-default p-1 px-2 mr-1 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-win text-gray-400'
						>
							<VscSearch size={12} />
						</button>
						<Show when={active()}>
							<button
								class='cursor-default p-1 px-2 mr-1 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-win text-gray-400'
								onClick={clearValue}
							>
								<VscChromeClose size={12} />
							</button>
						</Show>
					</>
				}
			/>
		</>
	);
};
