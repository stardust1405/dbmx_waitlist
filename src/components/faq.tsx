import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-10">
			<div className="flex flex-col items-center justify-center gap-2 max-w-md">
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					Frequently Asked Questions
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					Everything you need to know about DBMX. Find answers to common
					questions.
				</p>
			</div>
			<div className="w-full max-w-lg">
				<Accordion
					type="single"
					collapsible
					className="w-full flex flex-col gap-4"
				>
					<AccordionItem value="item-2">
						<AccordionTrigger className="hover:no-underline">
							Where are my connection strings stored?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Your connection strings are stored in your desktop app's local
							storage which is powered by SQLite3. They are not sent to any server.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-1">
						<AccordionTrigger className="hover:no-underline">
							What databases are supported?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							DBMX currently supports PostgreSQL, MongoDB, ClickHouse and MySQL. We are
							working on adding support for more databases.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
