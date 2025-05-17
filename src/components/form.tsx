"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function WaitlistForm() {
	const [step, setStep] = useState<number>(1);
	const [formData, setFormData] = useState({
		email: "",
		name: "",
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (step === 1) {
			// Validate email
			if (!formData.email || !formData.email.includes("@")) {
				alert("Please enter a valid email address");
				return;
			}

			// Move to step 2
			setStep(2);
			return;
		}

		// Handle final submission
		try {
			setLoading(true);

			// Here you would typically send data to your API
			// Replace with your actual API endpoint
			// const response = await fetch('/api/waitlist', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify(formData),
			// });

			// For now, we'll simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setSuccess(true);
			setLoading(false);
		} catch (error) {
			console.error("Error submitting form:", error);
			setLoading(false);
			alert("Something went wrong. Please try again.");
		}
	};

	const resetForm = () => {
		setStep(1);
		setFormData({ email: "", name: "" });
		setSuccess(false);
	};

	return (
		<div className="w-full">
			{success ? (
				<motion.div
					className="p-6 flex justify-center items-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<button
						onClick={resetForm}
						className="bg-[#e5ff00] text-black px-6 py-2 rounded-[12] font-semibold hover:bg-opacity-90 transition-all"
						type="button"
					>
						Join with another email
					</button>
				</motion.div>
			) : (
				<form onSubmit={handleSubmit} className="relative">
					<AnimatePresence mode="wait">
						{step === 1 ? (
							<motion.div
								key="email-step"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								className="flex relative"
							>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12]  focus:outline-1 transition-all duration-300 focus:outline-offset-4 focus:outline-[#e5ff00]"
									disabled={loading}
									required
								/>
								<button
									type="submit"
									className="absolute right-0 font-semibold top-0 bottom-0 bg-[#e5ff00] flex justify-center items-center cursor-pointer text-black px-5 py-2 m-2 rounded-[12] hover:bg-opacity-90 transition-all disabled:opacity-50"
									disabled={loading}
								>
									Continue
								</button>
							</motion.div>
						) : (
							<motion.div
								key="name-step"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 20 }}
								className="flex flex-col space-y-3"
							>
								<div className="flex items-center relative">
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Name"
										className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12]  focus:outline-1 transition-all duration-300 focus:outline-offset-4 focus:outline-[#e5ff00]"
										disabled={loading}
										required
									/>
									<button
										type="submit"
										className="absolute right-0 font-semibold top-0 bottom-0 bg-[#e5ff00] flex justify-center items-center cursor-pointer text-black px-5 py-2 m-2 rounded-[12] hover:bg-opacity-90 transition-all disabled:opacity-50"
										disabled={loading}
									>
										{loading ? (
											<span className="flex items-center">
												<svg
													className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<title>Loading spinner</title>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													/>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													/>
												</svg>
												Joining...
											</span>
										) : (
											<span>Join waitlist</span>
										)}
									</button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</form>
			)}
		</div>
	);
}
