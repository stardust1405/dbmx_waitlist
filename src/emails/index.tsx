import * as React from "react";
import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";

const WaitlistWelcomeEmail = ({ userFirstname }: { userFirstname: string }) => {
	return (
		<Html>
			<Tailwind>
				<Head>
					<title>Welcome to the Waitly Waitlist!</title>
					<Preview>
						Thanks for joining the Waitly waitlist! We're excited to have you on
						board.
					</Preview>
				</Head>
				<Body className="bg-[#f8fafc] font-sans py-[40px]">
					<Container className="bg-white rounded-[16px] mx-auto p-[32px] max-w-[600px] shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
						<Section className="text-center mb-[32px]">
							<Heading className="text-[32px] font-bold text-[#111827] m-0 leading-[40px]">
								Welcome to <span className="text-[#6366f1]">Waitly</span>
							</Heading>
							<Text className="text-[16px] text-[#6b7280] mt-[8px] mb-0">
								We're thrilled to have you join our waitlist
							</Text>
						</Section>

						<Hr className="border-dashed border-[#e5e7eb] my-[24px]" />

						<Section className="mt-[24px]">
							<Text className="text-[18px] leading-[28px] text-[#374151] mb-[16px]">
								Hi {userFirstname},
							</Text>

							<Text className="text-[16px] leading-[26px] text-[#4b5563]">
								Thanks for joining the waitlist for our{" "}
								<span className="font-semibold">
									Next.js + Notion CMS waitlist template!
								</span>{" "}
								We are Idee8, a digital agency that helps businesses grow
								online. We're excited to have you on board.
							</Text>

							<Text className="text-[16px] leading-[26px] text-[#4b5563] mt-[16px]">
								I'll keep you posted on the progress and notify you as soon as
								it's ready for you to use. In the meantime, if you have any
								questions or feedback, don't hesitate to reach out by replying
								directly to this email — We're here to listen!
							</Text>

							<Section className="bg-[#f3f4f6] rounded-[12px] p-[24px] my-[32px]">
								<Text className="text-[16px] leading-[26px] text-[#4b5563] m-0">
									<span className="font-semibold">Stay updated:</span> Follow us
									on X/Twitter for the latest news and announcements
								</Text>

								<Section className="text-center mt-[20px]">
									<Button
										className="bg-[#6366f1] text-white font-medium py-[12px] px-[24px] rounded-[8px] no-underline text-center box-border shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#4f46e5]"
										href="https://twitter.com/Idee8Agency"
									>
										@Idee8Agency
									</Button>
								</Section>
							</Section>

							<Text className="text-[16px] leading-[26px] text-[#4b5563] mt-[32px]">
								Best regards,
							</Text>

							<Text className="text-[18px] font-bold leading-[28px] text-[#111827]">
								Idee8 Agency
							</Text>
						</Section>

						<Hr className="border-solid border-[#e5e7eb] my-[32px]" />

						<Section className="bg-[#f9fafb] rounded-[8px] p-[16px]">
							<Text className="text-[14px] leading-[22px] text-[#6b7280] text-center m-0">
								© {new Date().getFullYear()} Idee8 Agency. All rights reserved.
							</Text>

							<Text className="text-[14px] leading-[22px] text-[#6b7280] text-center m-0">
								123 Digital Avenue, Suite 101, Kigali, Rwanda
							</Text>

							<Text className="text-[14px] leading-[22px] text-[#6b7280] text-center mt-[12px] m-0">
								<Link href="#" className="text-[#6366f1] underline">
									Unsubscribe
								</Link>{" "}
								•{" "}
								<Link href="#" className="text-[#6366f1] underline">
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

export default WaitlistWelcomeEmail;
