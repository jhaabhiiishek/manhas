"use client";
import React from "react";
// import logo from "/public/icons.jpg"
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
 

const text = "A little bit more about the links"

export default function Contact() {

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log("Form submitted");
		e.preventDefault();
	};
	return (
		<div className="flex overflow-x-hidden flex-col items-center pt-32 max-w-full">
			<h1 className="font-bold text-2xl sm:text-4xl mb-6">Leave us a message!</h1>
			<div className="w-4/5 sm:w-3/5 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
					Thanks for considering<br/> Manhas AC services
				</h2>
			
				<form className="my-8" onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<LabelInputContainer>
						<Label htmlFor="firstname">First name</Label>
						<Input id="firstname" placeholder="..." type="text" />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname">Last name</Label>
						<Input id="lastname" placeholder="..." type="text" />
					</LabelInputContainer>
					</div>
					<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input id="email" placeholder="...@gmail.com" type="email" />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="message">Message</Label>
						<Input id="message" placeholder="enter your message" type="text" />
					</LabelInputContainer>
					<button
						className="bg-gradient-to-br mt-4 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
					Send &rarr;
					<BottomGradient />
					</button>
			
					<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
			
					<div className="flex flex-col space-y-4">
					<Link
						href ="tel:+919797943188"
						className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
					>
						<IconPhone className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
						<span className="text-neutral-700 dark:text-neutral-300 text-sm">
						+91 97979 43188
						</span>
						<BottomGradient />
					</Link>
					<Link
						href ="mailto:abhi10092003@gmail.com"
						className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
					>
						<IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
						<span className="text-neutral-700 dark:text-neutral-300 text-sm">
						jasvir@gmail.com
						</span>
						<BottomGradient />
					</Link>
					<Link
						href="https://www.google.com/maps/dir//manhas+ac+service+jammu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x391e9b1020071d33:0xa3153b635814d2ad?sa=X&ved=2ahUKEwj6ppeI19yEAxVQwzgGHQ_hBhoQ9Rd6BAhJEAA"
						className="p-4 group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md  font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
					>
						<IconLocation className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
						<span className="text-neutral-700 dark:text-neutral-300 text-sm ml-6 text-left">
						House no 313, Sect 4, Sanjay Nagar, Jammu,<br/> Jammu and Kashmir 180010
						</span>
						<BottomGradient />
					</Link>
					</div>
				</form>
			</div>
		</div>
	);
}


	const BottomGradient = () => {
		return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
		);
	};
	
	const LabelInputContainer = ({
		children,
		className,
	}: {
		children: React.ReactNode;
		className?: string;
	}) => {
		return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
		);
	};