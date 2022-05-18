import { VscChromeClose, VscSearch } from "solid-icons/vsc";
import {
	Component,
	ComponentProps,
	createSignal,
	Setter,
	Show,
} from "solid-js";
import { TextInput } from "./textInput";

export interface SearchBarProps {
	ref?: Setter<HTMLInputElement | null>;
	onSearch?: (target: HTMLInputElement) => void;
	onClear?: (target: HTMLInputElement) => void;
	onChange?: (target: HTMLInputElement) => void;
	onInput?: (target: HTMLInputElement) => void;
	onFocus?: (target: HTMLInputElement, related: EventTarget | null) => void;
	onBlur?: (target: HTMLInputElement, related: EventTarget | null) => void;
}

export const SearchBar: Component<SearchBarProps> = ({
	onSearch,
	onClear,
	onChange,
	onInput,
	onFocus,
	onBlur,
	ref,
}) => {
	const [active, setActive] = createSignal(false);

	const clearValue = () => {
		ref?.((val) => {
			if (val) {
				onClear?.(val);
				val.value = "";
				setActive(false);
			}
			return val;
		});
	};

	const search = () => {
		ref?.((val) => {
			if (val) {
				onSearch?.(val);
			}
			return val;
		});
	};

	const change: NonNullable<ComponentProps<typeof TextInput>["onChange"]> = (
		e
	) => {
		onChange?.(e.currentTarget);
	};

	const input: NonNullable<ComponentProps<typeof TextInput>["onInput"]> = (
		e
	) => {
		setActive(!!e.currentTarget.value.length);
		onInput?.(e.currentTarget);
	};

	const focus: NonNullable<ComponentProps<typeof TextInput>["onFocus"]> = (
		e
	) => {
		setActive(!!e.currentTarget.value.length);
		onFocus?.(e.currentTarget, e.relatedTarget);
	};

	const blur: NonNullable<ComponentProps<typeof TextInput>["onBlur"]> = (e) => {
		console.log(e);
		onBlur?.(e.currentTarget, e.relatedTarget);
		e.currentTarget.parentElement?.contains(e.relatedTarget as Node)
			? e.currentTarget.focus()
			: setActive(false);
	};

	return (
		<TextInput
			onFocus={focus}
			onBlur={blur}
			onChange={change}
			onInput={input}
			ref={ref}
			placeholder='Search'
			adornment={
				<>
					<button
						class='cursor-default p-1 px-2 mr-1 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-win text-gray-400'
						onClick={search}
						onFocus={() => {
							ref?.((val) => (val?.focus(), val));
						}}
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
	);
};
