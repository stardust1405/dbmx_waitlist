import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from '@react-email/components';

type Props = { userFirstname: string };

// ---- Update these to your real URLs/handles ----
const GITHUB_URL = 'https://github.com/stardust1405/dbmx'; // ← replace with your repo
const X_HANDLE = '@dbmxapp'; // ← replace with your handle
const X_URL = 'https://x.com/dbmxapp'; // ← replace with your profile
const PRIVACY_URL = 'https://dbmx.app/privacy'; // ← replace if needed
const UNSUBSCRIBE_URL = 'https://dbmx.app/unsubscribe'; // ← replace if needed
// -------------------------------------------------

const WaitlistEmail = ({ userFirstname }: Props) => {
	const currentYear = new Date().getFullYear();

	return (
		<Html>
			<Tailwind>
				<Head>
					<title>Welcome to DBMX</title>
					<Preview>We're glad to have you on our waitlist!</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
					</style>
				</Head>

				<Body className="bg-[#09090B] py-[40px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
					<Container className="bg-[#18181B] rounded-[8px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[16px] text-center">
							<Text className="text-[28px] font-bold text-white m-0">
								Welcome to <span className="text-teal-500">DBMX</span>
							</Text>

							<Hr className="border-solid border-[#27272A] my-[16px] w-[80px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[16px] leading-[24px] text-white mt-[32px]">
								Hi {userFirstname},
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								We are glad to have you onboard! 🎉
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								You’re officially on the waitlist for DBMX, the open-source AI-powered database management tool that’s redefining how developers and teams interact with data.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								DBMX lets you:<br />

								⚡ Manage Postgres, MySQL, MongoDB, ClickHouse, and more, all in one modern interface<br />

								🤖 Use AI to understand your schema, explain queries, and fix syntax errors instantly<br />

								🧠 Get context-aware insights into your tables, columns, and relationships<br />

								💡 Optimize performance with smart query recommendations<br />
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								If you’d like to explore the project right away, you can head over to our GitHub repository,
								clone the repo, and give it a ⭐️ if you like what we’re building.
							</Text>

							<Section className="my-[28px] text-center">
								<Button
									className="bg-gray-500 text-black font-bold py-[12px] px-[24px] rounded-[12px] no-underline text-center box-border"
									href={GITHUB_URL}
								>
									View on GitHub
								</Button>
							</Section>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								Have questions, feedback, or want to contribute? Feel free to DM us on X -{' '}
								<Link href={X_URL} className="text-teal-500 underline">
									{X_HANDLE}
								</Link>{' '}
								or email{' '}
								<Link href="mailto:support@dbmx.app" className="text-teal-500 underline">
									support@dbmx.app
								</Link>. Happy to help you understand the codebase and get started contributing.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7] mt-[24px]">
								Thanks again for being early.
								More updates coming soon.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7] mt-[24px]">
								Cheers,
							</Text>

							<Text className="text-[16px] font-bold text-white mb-[32px]">
								The DBMX Team
							</Text>
						</Section>

						<Hr className="border-solid border-[#27272A] my-[24px]" />

						<Section>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								© {currentYear} DBMX. All rights reserved.
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center mt-[16px]">
								<Link href={UNSUBSCRIBE_URL} className="text-teal-500 underline">
									Unsubscribe
								</Link>{' '}
								•{' '}
								<Link href={PRIVACY_URL} className="text-teal-500 underline">
									Privacy Policy
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WaitlistEmail;
