import { Component, createSignal, For, Show } from "solid-js";
import { Showcase } from "./categories/showcase";
const App: Component = () => {
	const [active, setActive] = createSignal(0);
	const categories = [
		["Showcase", <Showcase />],
		[
			"Category 2",
			<h1 class='text-white text-2xl font-semibold'>Category 2</h1>,
		],
		[
			"Category 3",
			<h1 class='text-white text-2xl font-semibold'>Category 3</h1>,
		],
		[
			"Category 4",
			<h1 class='text-white text-2xl font-semibold'>Category 4</h1>,
		],
		[
			"Category 5",
			<h1 class='text-white text-2xl font-semibold'>Category 5</h1>,
		],
		[
			"Category 6",
			<h1 class='text-white text-2xl font-semibold'>Category 6</h1>,
		],
		[
			"Category 7",
			<h1 class='text-white text-2xl font-semibold'>Category 7</h1>,
		],
		[
			"Category 8",
			<h1 class='text-white text-2xl font-semibold'>Category 8</h1>,
		],
		[
			"Category 9",
			<h1 class='text-white text-2xl font-semibold'>Category 9</h1>,
		],
		[
			"Category 10",
			<h1 class='text-white text-2xl font-semibold'>Category 10</h1>,
		],
		[
			"Category 11",
			<h1 class='text-white text-2xl font-semibold'>Category 11</h1>,
		],
		[
			"Category 12",
			<h1 class='text-white text-2xl font-semibold'>Category 12</h1>,
		],
		[
			"Category 13",
			<h1 class='text-white text-2xl font-semibold'>Category 13</h1>,
		],
		[
			"Category 14",
			<h1 class='text-white text-2xl font-semibold'>Category 14</h1>,
		],
		[
			"Category 15",
			<h1 class='text-white text-2xl font-semibold'>Category 15</h1>,
		],
		[
			"Category 16",
			<h1 class='text-white text-2xl font-semibold'>Category 16</h1>,
		],
		[
			"Category 17",
			<h1 class='text-white text-2xl font-semibold'>Category 17</h1>,
		],
		[
			"Category 18",
			<h1 class='text-white text-2xl font-semibold'>Category 18</h1>,
		],
		[
			"Category 19",
			<h1 class='text-white text-2xl font-semibold'>Category 19</h1>,
		],
		[
			"Category 20",
			<h1 class='text-white text-2xl font-semibold'>Category 20</h1>,
		],
		[
			"Category 21",
			<h1 class='text-white text-2xl font-semibold'>Category 21</h1>,
		],
		[
			"Category 22",
			<h1 class='text-white text-2xl font-semibold'>Category 22</h1>,
		],
		[
			"Category 23",
			<h1 class='text-white text-2xl font-semibold'>Category 23</h1>,
		],
		[
			"Category 24",
			<h1 class='text-white text-2xl font-semibold'>Category 24</h1>,
		],
		[
			"Category 25",
			<h1 class='text-white text-2xl font-semibold'>Category 25</h1>,
		],
	];

	return (
		<div class='h-full grid grid-cols-settings'>
			<div class='flex flex-col text-white p-1 gap-[2px] h-screen overflow-auto overscroll-auto scroll-smooth no-scrollbar cursor-default'>
				<For each={categories}>
					{([item, _], index) => (
						<div
							class='flex items-center rounded-win bg-white hover:bg-opacity-5 py-2 ml-2 mr-4'
							classList={{
								"bg-opacity-5": active() === index(),
								"bg-opacity-0": active() !== index(),
							}}
							onClick={() => setActive(index())}
						>
							<Show
								when={active() === index()}
								fallback={<div class='rounded-full w-1 h-4 mr-2'></div>}
							>
								<div class='rounded-full w-1 h-4 bg-red-400 mr-2'></div>
							</Show>
							<div class='flex text-sm text-gray-200'>{item}</div>
						</div>
					)}
				</For>
			</div>
			<div>{categories[active()][1]}</div>
		</div>
	);
};

export default App;
