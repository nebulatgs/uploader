import Fuse from "fuse.js";
import {
	Component,
	createEffect,
	createSignal,
	JSXElement,
	Show,
} from "solid-js";
import { SearchBar, SearchBarProps } from "./searchBar";

interface SearchDropdownProps
	extends Omit<SearchBarProps, "onChange" | "onInput"> {
	onType?: (target: HTMLInputElement, value: string) => void;
	terms: { [key: string]: JSXElement };
	delay?: number;
}

export const SearchDropdown: Component<SearchDropdownProps> = ({
	onSearch,
	onClear,
	onType,
	terms,
	delay,
}) => {
	const [results, setResults] = createSignal<JSXElement[]>([]);
	const [searchTerm, setSearchTerm] = createSignal("");
	const [inputRef, setInputRef] = createSignal<HTMLInputElement | null>(null);
	const [focused, setFocused] = createSignal(false);

	let ref: HTMLDivElement | undefined = undefined;

	const options = {
		includeScore: true,
	};

	const fuse = new Fuse(Object.keys(terms), options);

	const getTopNResults = (n: number, term: string) => {
		const results = fuse.search(term).slice(0, n);
		return results.map((result) => ({
			key: result,
			value: terms[result.item],
		}));
	};

	const clear: SearchBarProps["onClear"] = (target) => {
		setResults([]);
		setSearchTerm("");
		onClear?.(target);
	};

	createEffect<number | undefined>((timeout) => {
		const ref = inputRef();
		if (!ref) {
			return;
		}

		clearInterval(timeout);

		if (!focused()) {
			return;
		}

		onType?.(ref, searchTerm());
		const term = searchTerm();
		return setTimeout(() => {
			const topNResults = getTopNResults(5, term);
			const mapped = topNResults.map((result) => (
				<div
					class='p-2 rounded-win bg-white bg-opacity-0 hover:bg-opacity-5'
					tabindex='-1'
					onClick={() => {
						setSearchTerm(result.key.item);
						inputRef()!.value = result.key.item;
						onSearch?.(inputRef()!);
						setResults([]);
					}}
				>
					{result.value}
				</div>
			));
			if (term && !mapped.length) {
				mapped.push(
					<div class='p-2'>
						<span>No results for {term}</span>
					</div>
				);
			}
			setResults(mapped);
		}, delay ?? 500);
	});

	return (
		<>
			<div class='inline-flex flex-col' ref={ref}>
				<SearchBar
					ref={setInputRef}
					onBlur={(_, r) => {
						console.log(ref, r);
						ref?.contains(r as Node) ? undefined : setResults([]);
						setFocused(false);
					}}
					onFocus={() => setFocused(true)}
					onSearch={onSearch}
					onClear={clear}
					onChange={(t) => setSearchTerm(t.value)}
					onInput={(t) => setSearchTerm(t.value)}
				/>
				<Show when={results().length}>
					<div class='flex flex-col bg-white bg-opacity-5 p-1 gap-2 text-gray-200 text-sm rounded-b-md border-[1.5px] border-black border-opacity-30'>
						{results()}
					</div>
				</Show>
			</div>
		</>
	);
};
