import React from 'react';

import VoteCard from './Components/VoteCard';

const demoData = [
	{
		id: 1,
		title: 'Bob Dylan',
		desc:
			'Bob Dylan is an American folk singer and song writer known for his extraordinary lyrical capability that includes human nature, love, hate and war.'
	}
];

export default function Vote() {
	return (
		<React.Fragment>
			<main class="h-screen w-screen bg-black text-white overflow-x-hidden">
				<div class="flex flex-col py-4 px-4 space-y-4 max-w-2xl mx-auto bg-black">
					<div id="title" class="text-4xl font-semibold w-full">
						Greatest Song writer of our generation.
					</div>

					<div id="desc">
						Beside composition, lyrics are what gives life to a song. In this list we will determine the
						greatest song writer of our generation.
					</div>

					<hr class="" />

					<div id="list" class="max-h-screen">
						<ul class="space-y-10 pb-4">
							{demoData.map((data) => {
								return (
									<li>
										<VoteCard {...data} key={data.id} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}
